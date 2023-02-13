```javascript
const { CommonHelper } = require('@ttqm/ttqm-support');
const { setTimeout } = require('timers');

// stop script process after 1s;
// 1s后停止脚本
// 1s後停止腳本

setTimeout(() => {
  // stop script process manually
  // 手动停止脚本运行
  // 手動停止腳本運行
  CommonHelper.exit();
}, 1000);
```
