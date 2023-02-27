> 前置腳本,用來在發送前對發送的消息進行處理,實際發送的內容為處理後的腳本內容

!>注意:前置腳本開啟後,該連接下,所有形式發送的消息,如手動發送,以及通過前置腳本發送的消息(消息體是字符串)都會被前置腳本處理. 特例,如果你通過腳本發送時內容是以`Buffer`或者`Array<number>`格式發送的消息,則不會經過前置腳本處理.

| 序號 | 標題                                                       | 描述                                                           |
| ---- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| 1    | [概念](zh-tw/pre-publish-script/concept.md)                | 介紹前置腳本使用中一些相關的概念                               |
| 2    | [能力](zh-tw/pre-publish-script/capability.md)             | 介紹前置腳本能夠實現的能力                                     |
| 3    | [使用](zh-tw/pre-publish-script/usage.md)                  | 介紹前置腳本的使用,以及拓展 `pipe`,`variable`                  |
| 4    | [內置 pipe,variable](zh-tw/pre-publish-script/built_in.md) | 介紹前置腳本支持的內置 `pipe`,`variable`                       |
| 5    | [示例](zh-tw/pre-publish-script/demo.md)                   | 提供一些前置腳本的使用示例,包含拓展以及內置的`pipe`,`variable` |
| 6    | [調試](zh-tw/pre-publish-script/debug.md)                  | 介紹如何進行前置腳本的調試                                     |
