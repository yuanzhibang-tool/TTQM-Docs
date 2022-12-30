> Debugging and using pre-scripts

---

### 1. Template variable syntax :id=1

![Template variable](../../_media/variable.png ':size=500')

1. Template variables must be wrapped with `{{}}`. If it is a string of `json` type, it needs to be wrapped with `""` double quotes outside. Strings that are not `json` do not need to use `""` double quote wrap

2. The template variable must start with `$`, and the first part is marked as the variable name. If there is no corresponding variable in the pre-script or built-in, or if you want to get the variable directly from `variable_pipe`, you can just use a `$` flag

3. Use `|` between variables (`variable`) and multiple variable pipes (`variable_pipe`)

4. If `variable_pipe` has parameters, use `:` to separate the pipe name and variables, and multiple parameters must be separated by commas, and the parameters must be wrapped in `''` single quotes

---

### 2. Use template variables in messages, support ordinary string messages and `json` format messages :id=2

**`json` input message (no custom `variable` and `pipe` used)**

```json
{
  "uuid": "{{$uuid|uppercase}}",
  "unix_millisecond_float": "{{$unixMillisecondFloat|float:'1','round'|string}}",
  "current_date": "{{$|date:'yyyy-MM-DD HH:mm:ss'}}"
}
```

**Output message**

```json
{
  "uuid": "AF105855-049B-4543-916D-05F87D72CFB3", //1. Generate a uuid; 2. Convert all to uppercase
  "unix_millisecond_float": "1671003373.7", //1. Get the current unix timestamp, milliseconds in decimal format; 2. Take 1 decimal precision in round form; 3. Convert the number to a string
  "current_date": "2022-12-14 15:36:13" //1. Get the time in yyyy-MM-DD HH:mm:ss format
}
```

---

### 3. Customize `variable` and `pipe` :id=3

<!-- tabs: start -->

<!-- tab: pre-script -->

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
    // leafNodeToString is a built-in pipe, covert all leaf nodes to string, the value is not used, you can set the value with null;
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

<!-- tab: template message -->

```json
{
  "user_variable1": "{{$user_variable1}}",
  "user_variable2": "{{$user_variable2|user_variable_pipe1:'3'}}",
  "user_variable3": "{{$user_variable3}}",
  "user_variable4": "{{$user_variable4}}"
}
```

<!-- tab: output -->

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

<!-- tabs: end -->
