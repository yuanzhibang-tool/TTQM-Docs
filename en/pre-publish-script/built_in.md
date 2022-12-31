---

### Built-in `variable` :id=1

| Name | Description | Example |
| ------ | ------------------------------------------ |-- ----- |
| `date` | Get the current time in `YYYY-MM-DD HH:mm:ss` format | `2022-12-12 23:12:32` |
| `unixSecond` | current `unix` timestamp, in seconds, `int` number format |`1670861452` |
| `unixMillisecond` | current `unix` timestamp in milliseconds, `int` number format |`1670861452123` |
| `unixMillisecondFloat` | The current `unix` timestamp, in seconds, correct to 3 decimal places, a number of `float` type |`1670861452.123` |
| `uuid` | Generate a string in `uuid v4` format, in lowercase | `9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d`|

---

### Built-in `variable pipe` :id=2

| Name               | Parameters                                                                                                                                                          | Description                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `date`             | A parameter, `format`                                                                                                                                               | Used to get formatted time, `format` supports `YYYY-MM-DD HH:mm:ss` type, for more supported formats, please refer to [Moment.js](https://momentjs.com/docs/#/parsing/string-format/). |
| `nullToEmpty`      | None                                                                                                                                                                | Convert `null` and `undefined` to empty string.                                                                                                                                        |
| `notStringToEmpty` | None                                                                                                                                                                | Convert a non-string variable to an empty string.                                                                                                                                      |
| `int`              | A parameter, `type` (optional), supports `floor`, `ceil`, `round`, `trunc`, not passed, the default is `trunc`                                                      | convert the number to `int` format, the parameters are used to set the conversion type.                                                                                                |
| `float`            | Two parameters, the first is `precision` accuracy, supports `int` type, the second parameter is `type` optional `floor`, `ceil`, `round`, `trunc` , default `trunc` | convert a number to float                                                                                                                                                              |
| `number`           | None                                                                                                                                                                | Convert numeric type strings to `Number` type, return itself if input is non-numeric string.                                                                                           |
| `string`           | None                                                                                                                                                                | Convert other type variables to string.                                                                                                                                                |
| `json`             | None                                                                                                                                                                | Use `JSON.stringify()` to process the variable.                                                                                                                                        |
| `uppercase`        | None                                                                                                                                                                | Convert string to uppercase.                                                                                                                                                           |
| `lowercase`        | None                                                                                                                                                                | Convert string to lowercase.                                                                                                                                                           |

---

### Built-in `pipe` :id=3

| Name               | Description                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- |
| `leafNodeToString` | Convert all leaf nodes in `json` format to `string`, return itself if it is non-json format |

!>Leaf node is the node which does not have a child in `json` tree

---

!>For more usage demos, please refer to [Pre-Publish Script>Demo](en/pre-publish-script/demo.md)
