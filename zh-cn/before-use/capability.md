> 通过 `前置脚本(Pre-Publish Script)` `图表(Chart View)` `用户脚本(User Script)` 可以极大的拓展`TTQM`的能力,以丰富其适用的场景

---

### `前置脚本(Pre-Publish Script)` :id=1

| 序号 | 能力                                                                                                                                                                                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 可以使用内置的`变量(variable)`来替换发送消息中的模板变量                                                                                                                                                                                                 |
| 2    | 可以使用内置的`变量管道(variable pipe)`来实现对变量的处理,如转换为数字,转换为字符串,所有变量管道将会按照顺序执行,上一个处理的返回值将会作为下一个的输入值                                                                                                |
| 3    | 可以使用`管道(pipe)`对整个消息体进行处理,管道将会按照顺序执行,上一个处理的返回值将会作为下一个的输入值                                                                                                                                                   |
| 4    | 可以添加自定义的`变量(variable)`,自定义的变量可以是`function`,这时将会把返回值作为处理后的变量,也可以是字符串,数字等变量,将会直接作为变量返回. `function`的第一个参数将会传入整个消息体,具体的使用请参照 [前置脚本](zh-cn/pre-publish-script/default.md) |
| 5    | 可以添加自定义的 `变量管道(variable pipe)`,其为`function`类型,将会传入整个消息体和需要传入的参数,将返回值作为模板变量                                                                                                                                    |
| 6    | 可以添加自定义的`pipe`,用来处理整个消息体,并返回新的消息体                                                                                                                                                                                               |
| 7    | 支持添加第三方 `node modules`来丰富脚本功能, 请参考 [常见问题>如何添加脚本依赖库?](zh-cn/question/how-to-add-support-modules.md)                                                                                                                         |
| 8    | 可以通过 `console` 来实现打印调试                                                                                                                                                                                                                        |

---

### `图表(Chart View)` :id=2

| 序号 | 能力                                                                                                                             |
| ---- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 支持众多的图表类型,柱状图,饼状图,玫瑰图等类型,具体请[参考链接](https://echarts.apache.org/examples/zh/index.html)                |
| 2    | 兼容 `Apache Echarts` 配置, 配置项需要进行一些调整,具体参考 [图表>配置](zh-cn/chart/option.md)                                   |
| 3    | 支持图表交互                                                                                                                     |
| 4    | 支持数据源的整体和局部更新 [图表>脚本](zh-cn/chart/script.md)                                                                    |
| 5    | 支持监听`MQTT`客户端事件以及图表事件来实现不同的图表更新,例如: 客户端连接上,断开等,具体请参考 [图表>脚本](zh-cn/chart/script.md) |
| 6    | 支持同时绘制多图表                                                                                                               |
| 7    | 支持添加第三方 `node modules`来丰富脚本功能, 请参考 [常见问题>如何添加脚本依赖库?](zh-cn/question/how-to-add-support-modules.md) |
| 8    | 可以通过 `console` 来实现打印调试                                                                                                |

---

### `用户脚本(User Script)` :id=3

| 序号 | 能力                                                                                                                             |
| ---- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 支持同时运行多个脚本                                                                                                             |
| 2    | 支持监听处理`MQTT`客户端事件                                                                                                     |
| 3    | 支持发布消息                                                                                                                     |
| 4    | 可以模拟 `IoT` 设备, 模拟服务端程序,以及其他端设备                                                                               |
| 5    | 支持添加第三方 `node modules`来丰富脚本功能, 请参考 [常见问题>如何添加脚本依赖库?](zh-cn/question/how-to-add-support-modules.md) |
| 6    | 可以通过 `console` 来实现打印调试                                                                                                |
