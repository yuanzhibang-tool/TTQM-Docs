> Pre-Publish Script, used to process the published message before publishing, the actual published content is the processed content.

!> Note: After the pre-script is enabled, all messages(only string type) published in this client, such as messages published manually(only `plaintext` and `json` format messages will be processed) and messages published via the `User Script` will be processed by `Pre-Publish Script`. As a special case, if you send a message with type of `Buffer` or `Array<number>` via the script, it will not be processed by `Pre-Publish Script`.

| No. | Title                                                       | Description                                                                                                                    |
| --- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1   | [Concept](en/pre-publish-script/concept.md)                 | Introduce some related concepts in the use of `Pre-Publish Script`.                                                            |
| 2   | [Capability](en/pre-publish-script/capability.md)           | Introduces the capabilities of `Pre-Publish Script`.                                                                           |
| 3   | [Usage](en/pre-publish-script/usage.md)                     | Introduce the use of `Pre-Publish Script` and introduce how to expand `pipe`,`variable`.                                       |
| 4   | [Built-in pipe,variable](en/pre-publish-script/built_in.md) | Introduce the built-in `pipe`,`variable` supported by the `Pre-Publish Script`                                                 |
| 5   | [Demo](en/pre-publish-script/demo.md)                       | Provide some demos of using `Pre-Publish Script`, including expanding `pipe`, `variable` and using built-in `pipe`, `variable` |
| 6   | [Debug](en/pre-publish-script/debug.md)                     | Introduce how to debug the `Pre-Publish Script`                                                                                |
