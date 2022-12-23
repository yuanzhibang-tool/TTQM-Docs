!>TTQM 内置了一些库,如网络请求等,具体支持的库在下放列出来,当然您也可以自己安装拓展库,具体请参照 [常见问题?>如何添加脚本依赖库?](zh-cn/question/how-to-add-support-modules.md)

---

### 1.网络请求库`axios` :id=1

**用法示例,更多用法请参照[axios](https://www.npmjs.com/package/axios)**

```javascript
const axios = require('axios');

// a get request
axios
  .get('/user?ID=12345')
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });

// a post request

axios
  .post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
