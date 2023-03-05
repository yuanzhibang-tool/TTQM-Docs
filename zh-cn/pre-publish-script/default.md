> 前置脚本,用来在发送前对发送的消息进行处理,实际发送的内容为处理后的脚本内容

!>注意:前置脚本开启后,该连接下,所有形式发送的消息,如手动发送(手动发送的消息,仅 `plaintext` 和 `json` 格式会被处理),以及通过前置脚本发送的消息(消息体是字符串)都会被前置脚本处理. 特例,如果你通过脚本发送时内容是以`Buffer`或者`Array<number>`格式发送的消息,则不会经过前置脚本处理.

| 序号 | 标题                                                       | 描述                                                           |
| ---- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| 1    | [概念](zh-cn/pre-publish-script/concept.md)                | 介绍前置脚本使用中一些相关的概念                               |
| 2    | [能力](zh-cn/pre-publish-script/capability.md)             | 介绍前置脚本能够实现的能力                                     |
| 3    | [使用](zh-cn/pre-publish-script/usage.md)                  | 介绍前置脚本的使用,以及拓展 `pipe`,`variable`                  |
| 4    | [内置 pipe,variable](zh-cn/pre-publish-script/built_in.md) | 介绍前置脚本支持的内置 `pipe`,`variable`                       |
| 5    | [示例](zh-cn/pre-publish-script/demo.md)                   | 提供一些前置脚本的使用示例,包含拓展以及内置的`pipe`,`variable` |
| 6    | [调试](zh-cn/pre-publish-script/debug.md)                  | 介绍如何进行前置脚本的调试                                     |
