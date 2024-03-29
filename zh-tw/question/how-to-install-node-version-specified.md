> 如果您需要使用到多版本,請使用 `nvm` 進行多版本 `node` 管理

### Windows :id=1

_直接安裝:_

1. 去`node`<a href="https://nodejs.org/zh-tw/download/" target="_blank">官方網站下載頁面</a> 下載指定版本的 `windows` 的 `node` 安裝包
2. 安裝選項中選擇自動添加 `PATH`

_使用 nvm:_

1. 去 nvm-windows 官網下載安裝包`https://github.com/coreybutler/nvm-windows/releases`
2. 使用`nvm install`安裝指定版本的`node`
3. 使用`nvm use` 設置使用的`node`版本

```shell
# 如果安裝比較慢請設置國內源
SET NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# 列出node版本
nvm list-remote
# 安裝16.19.0版本的 node
nvm install 16.19.0
# 切換到16.19.0版本的 node
nvm use 16.19.0
```

### macOS :id=2

_直接安裝:_

1. 去`node`<a href="https://nodejs.org/zh-tw/download/" target="_blank">官方網站下載頁面</a> 下載指定版本的 `macOS ` 的 `node` 安裝包
2. 安裝即可

_brew 安裝_

!> brew 的源倉庫使用到的是`github`源,`github`加速請<a href="https://su.yuanzhibang.com/2Cp" target="_blank">點擊</a>

1. `brew` 安裝,已安裝清忽略,<a href="https://brew.sh/" target="_blank">brew 官網</a>
2. 使用`brew`安裝`node` `brew install node@16`

```shell
# 安裝brew
/bin/bash -c "$(curl -fsSL https://static.yuanzhibang.com/script/Homebrew/install.sh)"
# 安裝node 16
brew install node@16
```

_nvm 安裝_

1. `brew` 安裝 `nvm`
2. 使用`nvm install`安裝指定版本的`node`
3. 使用`nvm use` 設置使用的`node`版本

```shell
brew install nvm
# 如果安裝比較慢請設置國內源
export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# 列出node版本
nvm list-remote
# 安裝16.19.0版本的 node
nvm install 16.19.0
# 切換到16.19.0版本的 node
nvm use 16.19.0
```

### Linux :id=3

_shell 安裝_

1. 安裝`node`源
2. 安裝

```shell
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
apt-get install -y nodejs # 其他系統請使用對應的安裝命令
```

_nvm 安裝_

1. 安裝`nvm`
2. 使用`nvm install`安裝指定版本的`node`
3. 使用`nvm use` 設置使用的`node`版本

```shell
curl -o- https://static.yuanzhibang.com/script/nvm/v0.39.1/install.sh | bash
# 如果安裝比較慢請設置加速源
export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# 列出node版本
nvm list-remote
# 安裝16.19.0版本的 node
nvm install 16.19.0
# 切換到16.19.0版本的 node
nvm use 16.19.0
```
