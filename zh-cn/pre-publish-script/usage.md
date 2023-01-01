> 使用和拓展前置脚本

---

### 1.模板变量语法 :id=1

![模板变量](../../_media/variable.png ':size=500')

1.模板变量必须使用 `{{}}`进行包裹,如果是`json`类型的字符串,外部还需要使用`""`双引号包裹,非`json`的字符串无需使用`""`双引号包裹

2.模板变量必须以使用`$`开头,第一部分标记为变量名,如果前置脚本或者内置中没有没有对应的变量,或者想从`变量管道(variable pipe)`直接获取变量,则可以只使用一个`$`标识

3.变量(`variable`)和多个变量管道(`variable pipe`)之间使用`|`分割

4.如果`变量管道(variable pipe)`有参数,则使用`:`分割管道名和变量,有多个参数必须使用逗号分割,参数必须使用`''`单引号包裹

---

### 2.在消息中使用模板变量 :id=2

!>支持非 json 字符串消息以及 `json` 格式消息

**`json` 输入消息(没有用到自定义`variable`和`pipe`)**

<!-- tabs:start -->

<!-- tab: 模板消息 -->

```json
{
  "uuid": "{{$uuid|uppercase}}",
  "unix_millisecond_float": "{{$unixMillisecondFloat|float:'1','round'|string}}",
  "current_date": "{{$|date:'yyyy-MM-DD HH:mm:ss'}}"
}
```

<!-- tab: 输出 -->

```json
{
  "uuid": "AF105855-049B-4543-916D-05F87D72CFB3", //1.生成一个uuid;2.并全部转换为大写
  "unix_millisecond_float": "1671003373.7", //1.获取当前unix时间戳,毫秒为小数格式;2.以round形式取1位小数精度;3.将数字转换为字符串
  "current_date": "2022-12-14 15:36:13" //1.获取yyyy-MM-DD HH:mm:ss格式的时间
}
```

<!-- tabs:end -->

---

### 3.自定义 `variable` 和 `pipe` :id=3

<!-- tabs:start -->

<!-- tab:前置脚本 -->

```javascript
// the module uuid is built-in, please read uuid docs: https://www.npmjs.com/package/uuid
var { v4: uuidv4 } = require('uuid');
// the module mockjs is built-in, please read mockjs docs: http://mockjs.com/examples.html
var mockjs = require('mockjs');
// if you need to use other modules, you can install other modules via npm, please read the doc: https://doc.ttqm.app/#/en/question/how-to-add-support-modules

// generate mock data
var mockData = mockjs.mock({
  'list|3': [
    {
      'id|+1': 1,
    },
  ],
});
module.exports = {
  variable: {
    // the variable can be a function(must return a value sync and can not be a Promise) or a value
    user_variable1() {
      return '432';
    },
    user_variable2: 107,
    user_variable3: uuidv4(),
    user_variable4: mockData.list,
  },
  variable_pipe: {
    // variable pipe is used to process the template variable
    user_variable_pipe1(publishMessage, value, multiple) {
      // publishMessage has all the info you publish to the server, like topic, message, opts: {qos:2}
      // you can't change publishMessage
      // value is the value of the template variable
      return value * multiple;
    },
  },
  pipe: {
    // pipe is used to process the full message body
    // leafNodeToString is a built-in pipe, covert all leaf node to string, the value is not used, you can set the value with null;
    leafNodeToString: null,
    addUserStringToRootNode: (publishMessage) => {
      try {
        var messageString = publishMessage.message;
        var messageObject = JSON.parse(messageString);
        messageObject.test_user_string = 'test_user_string_value';
        // you need return the message in string format
        return JSON.stringify(messageObject);
      } catch (error) {
        // if any error is thrown, return the original message of publishMessage
        return publishMessage.message;
      }
    },
  },
};
```

---

<!-- tab:模板消息 -->

```json
{
  "user_variable1": "{{$user_variable1}}",
  "user_variable2": "{{$user_variable2|user_variable_pipe1:'3'}}",
  "user_variable3": "{{$user_variable3}}",
  "user_variable4": "{{$user_variable4}}"
}
```

<!-- tab:输出 -->

```json
{
  "user_variable1": "432",
  "user_variable2": "321",
  "user_variable3": "b2357f1c-4799-495d-9818-a6b72816ffa3",
  "user_variable4": [
    {
      "id": "1"
    },
    {
      "id": "2"
    },
    {
      "id": "3"
    }
  ],
  "test_user_string": "test_user_string_value"
}
```

<!-- tabs:end -->
