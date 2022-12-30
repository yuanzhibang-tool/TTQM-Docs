// the module uuid is built-in, please read uuid docs: https://www.npmjs.com/package/uuid
var { v4: uuidv4 } = require('uuid');
// the module mockjs is built-in, please read mockjs docs: http://mockjs.com/examples.html
var mockjs = require('mockjs');
// if you need to use other modules, you can install other modules via npm, please read the doc: https://doc.ttqm.app/#/en/question/how-to-add-support-modules

// generate mock data
var mockData = mockjs.mock({
    'list|3': [{
        'id|+1': 1
    }]
})
module.exports = {
    variable: {
        // the variable can be a function(must return a value sync and can not be a Promise) or a value
        user_variable1() {
            return '432';
        },
        user_variable2: 107,
        user_variable3: uuidv4(),
        user_variable4: mockData.list
    },
    variable_pipe: {
        // variable pipe is used to process the template variable
        user_variable_pipe1(publishMessage, value, multiple) {
            // publishMessage has all the info you publish to the server, like topic, message, opts: {qos:2}
            // you can't change publishMessage
            // value is the value of the template variable
            return value * multiple;
        }
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
        }
    }
}