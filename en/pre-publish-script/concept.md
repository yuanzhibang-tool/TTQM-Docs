> 是指使用脚本在发送消息之前对要发送的消息进行模板替换,变量替换等操作,然后再进行发送,例如:替换发送消息中的`时间`,`unix时间戳`,`uuid`等,用户可以通过内置的`变量(variable)`,`变量管道(variable pipe)`,`管道(pipe)`进行处理,用户自己也可对`变量(variable)`,`变量管道(variable pipe)`,`管道(pipe)`进行拓展,详见[前置脚本](en/pre-publish-script/default.md)

!>注意:`变量管道variable_pipe`和`管道pipe`的概念的区别在于,`变量管道variable_pipe`用以处理单个模板变量,而`管道pipe`用以处理整个消息体
