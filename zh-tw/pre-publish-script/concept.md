> 是指使用腳本在發送消息之前對要發送的消息進行模板替換,變量替換等操作,然後再進行發送,例如:替換發送消息中的`時間`,`unix時間戳`,`uuid`等,用戶可以通過內置的`變量(variable)`,`變量管道(variable pipe)`,`管道(pipe)`進行處理,用戶自己也可對`變量(variable)`,`變量管道(variable pipe)`,`管道(pipe)`進行拓展,詳見[前置腳本](zh-tw/pre-publish-script/default.md)

!>注意:`變量管道variable pipe`和`管道pipe`的概念的區別在於,`變量管道variable pipe`用以處理單個模板變量,而`管道pipe`用以處理整個消息體
