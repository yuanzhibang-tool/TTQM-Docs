---

### Built-in `variable` :id=1

| Name | Description | Example |
| ------ | ------------------------------------------ |-- ----- |
| `date` | Get the current time in `YYYY-MM-DD HH:mm:ss` format | `2022-12-12 23:12:32` |
| `unixSecond` | current `unix` timestamp, in seconds, `int` number format |`1670861452` |
| `unixMillisecond` | current `unix` timestamp in milliseconds, `int` number format |`1670861452123` |
| `unixMillisecondFloat` | The current `unix` timestamp, in seconds, accurate to 3 decimal places, a number of `float` type |`1670861452.123` |
| `uuid` | Generate a string in `uuid v4` format, all lowercase | `9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d`|

---

### Built-in `variable pipe` :id=2

| Name               | Parameters                                                                                                                                                                          | Description                                                                                                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `date`             | A parameter, `format`                                                                                                                                                               | used to output formatted time, `format` supports `YYYY-MM-DD HH:mm:ss` type, for more supported formats, please refer to [Moment.js] (https://momentjs.com/docs/#/parsing/string-format/) |
| `nullToEmpty`      | No arguments                                                                                                                                                                        | Convert `null` and `undefined` to empty strings                                                                                                                                           |
| `notStringToEmpty` | no arguments                                                                                                                                                                        | convert a non-string variable to an empty string                                                                                                                                          |
| `int`              | A parameter, which is `type` (optional), supports `floor`, `ceil`, `round`, `trunc`, not passed, the default is `trunc`                                                             | convert the number to `int` format, the parameters are used to convert the conversion method adopted by `int`                                                                             |
| `float`            | Two parameters, the first is `precision` accuracy, supports `int` type, the second parameter is `type` optional `floor`, `ceil`, `round`, `trunc` , not passed, defaults to `trunc` | converts numbers to floating point values according to precision                                                                                                                          |
| `number`           | None                                                                                                                                                                                | Convert numeric type strings to `Number` type, return non-numeric type strings directly and ignore                                                                                        |
| `string`           | None                                                                                                                                                                                | Convert other type variables to strings                                                                                                                                                   |
| `json`             | None                                                                                                                                                                                | Use `JSON.stringify()` to process variables                                                                                                                                               |
| `uppercase`        | None                                                                                                                                                                                | Convert string to uppercase                                                                                                                                                               |
| `lowercase`        | None                                                                                                                                                                                | Convert string to lowercase                                                                                                                                                               |

---

### Built-in `pipe` :id=3

| Name               | Description                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `leafNodeToString` | Convert all leaf nodes in `json` format to `string`, return the original information without processing if it is not in `json` format |

!>Leaf node, refers to the last level of `json` tree
