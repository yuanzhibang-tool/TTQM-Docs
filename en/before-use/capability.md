> Through `Pre-Publish Script`, `Chart` `User Script`, you can greatly expand the capabilities of `TTQM` to enrich its applicable scenarios.

---

### Pre-Publish Script :id=1

| No. | Capcapability                                                                                                                                                                                                                                                                                                                                                                                                     |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | You can use the built-in `variable` to replace template variables in publishing messages.                                                                                                                                                                                                                                                                                                                         |
| 2   | You can use the built-in `variable pipe` to realize the processing of variables, such as converting to number, converting to string. All variable pipes will be executed in order, and the return value of the previous processing will be used as next input value.                                                                                                                                              |
| 3   | You can use `pipe` to process the entire message body, the pipe will be executed in order, and the return value of the previous processing will be used as the input value of the next.                                                                                                                                                                                                                           |
| 4   | You can add custom `variable`. The custom variable can be `function`. At this time, the return value will be used as the processed variable, or it can be a variable such as a string or a number. It will be returned directly as a variable. The first parameter of `function` will pass in the entire message body. For specific usage, please refer to [Pre-Publish Script](en/pre-publish-script/default.md) |
| 5   | You can add a custom `variable pipe`, which is of `function` type. The first parameter of `function` will pass in the entire message body and other parameters will passed in behind.                                                                                                                                                                                                                             |
| 6   | You can add a custom `pipe` to process the entire message body and return a new message in string                                                                                                                                                                                                                                                                                                                 |
| 7   | Support adding third-party `node modules` to enrich script functions, please refer to [FAQ>How to add script third-party modules?](en/question/how-to-add-support-modules.md)                                                                                                                                                                                                                                     |
| 8   | You can print info and debug by using `Console`                                                                                                                                                                                                                                                                                                                                                                   |

---

### Chart :id=2

| No. | Capcapability                                                                                                                                                                 |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Supports many types of charts, such as histograms, pie charts, rose charts, etc. For details, please see [Demo](https://echarts.apache.org/examples/en/index.html).           |
| 2   | Compatible with `Apache Echarts` option, option items need to be adjusted, please refer to [Chart>Option](en/chart/option.md)                                                 |
| 3   | Support chart interaction                                                                                                                                                     |
| 4   | Support overall and partial update of data sources [Chart>Script](en/chart/script.md)                                                                                         |
| 5   | Support lisening `MQTT` client events and chart events to update chart, such as: client connect, disconnect, etc., please refer to [Chart>Script](en/chart/script.md)         |
| 6   | Support drawing multiple charts at the same time                                                                                                                              |
| 7   | Support adding third-party `node modules` to enrich script functions, please refer to [FAQ>How to add script third-party modules?](en/question/how-to-add-support-modules.md) |
| 8   | You can print info and debug by using `Console`                                                                                                                               |

---

### User Script :id=3

| No. | Capcapability                                                                                                                                                                 |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Support running multiple scripts at the same time                                                                                                                             |
| 2   | Support listening and processing `MQTT` client events                                                                                                                         |
| 3   | Support publishing message                                                                                                                                                    |
| 4   | Can simulate `IoT` devices, simulate server programs, and other mqtt devices                                                                                                  |
| 5   | Support adding third-party `node modules` to enrich script functions, please refer to [FAQ>How to add script third-party modules?](en/question/how-to-add-support-modules.md) |
| 6   | You can print info and debug by using `Console`                                                                                                                               |
