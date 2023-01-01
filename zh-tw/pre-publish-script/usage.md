> 使用和拓展前置腳本

---

### 1.模板變量語法 :id=1

![模板變量](../../_media/variable.png ':size=500')

1.模板變量必須使用 `{{}}`進行包裹,如果是`json`類型的字符串,外部還需要使用`""`雙引號包裹,非`json`的字符串無需使用`""`雙引號包裹

2.模板變量必須以使用`$`開頭,第一部分標記為變量名,如果前置腳本或者內置中沒有沒有對應的變量,或者想從`變量管道(variable pipe)`直接獲取變量,則可以只使用一個`$`標識

3.變量(`variable`)和多個變量管道(`variable pipe`)之間使用`|`分割

4.如果`變量管道(variable pipe)`有參數,則使用`:`分割管道名和變量,有多個參數必須使用逗號分割,參數必須使用`''`單引號包裹

---

### 2.在消息中使用模板變量 :id=2

!>支持非 json 字符串消息以及 `json` 格式消息

**`json` 輸入消息(沒有用到自定義`variable`和`pipe`)**

<!-- tabs:start -->

<!-- tab: 模板消息 -->

```json
{
  "uuid": "{{$uuid|uppercase}}",
  "unix_millisecond_float": "{{$unixMillisecondFloat|float:'1','round'|string}}",
  "current_date": "{{$|date:'yyyy-MM-DD HH:mm:ss'}}"
}
```

<!-- tab: 輸出 -->

```json
{
  "uuid": "AF105855-049B-4543-916D-05F87D72CFB3", //1.生成一個uuid;2.並全部轉換為大寫
  "unix_millisecond_float": "1671003373.7", //1.獲取當前unix時間戳,毫秒為小數格式;2.以round形式取1位小數精度;3.將數字轉換為字符串
  "current_date": "2022-12-14 15:36:13" //1.獲取yyyy-MM-DD HH:mm:ss格式的時間
}
```

<!-- tabs:end -->

---

### 3.自定義 `variable` 和 `pipe` :id=3

<!-- tabs:start -->

<!-- tab:前置腳本 -->

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

<!-- tab:輸出 -->

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
