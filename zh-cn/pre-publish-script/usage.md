> 调试和使用前置脚本

---

#### 模板变量语法

![模板变量](../../_media/variable.png ':size=500')

1.模板变量必须使用 `{{}}`进行包裹

2.模板变量必须以使用`$`开头,第一部分标记为变量名,如果前置脚本或者内置中没有没有对应的变量,或者想从`变量管道(variable_pipe)`直接获取变量,则可以只使用一个`$`标识

3.变量(variable)和多个变量管道(variable_pipe)之间使用`|`分割

4.如果`变量管道(variable_pipe)`有参数,则使用`:`分割管道名和变量,有多个参数必须使用逗号分割,参数必须使用`''`单引号包裹

---

#### 1.在消息中使用模板变量,支持普通字符串消息以及 `json` 格式消息

**`json` 输入消息**

```json
{
  "uuid": "{{$uuid|uppercase}}",
  "unix_millisecond_float": "{{$unixMillisecondFloat|float:'1','round'}}",
  "current_date": "{{$|date:'yyyyMMdd HH:mm:ss'}}"
}
```

---

#### 2.自定义 `variable` 和 `pipe`

#### 4.启动前置脚本
