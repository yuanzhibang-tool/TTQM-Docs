> 如果您需要使用到多版本,请使用 `nvm` 进行多版本 `node` 管理

### Windows :id=1

_直接安装:_

1. 去`node`<a href="https://nodejs.org/en/download/" target="_blank">官方网站下载页面</a> 下载指定版本的 `windows` 的 `node` 安装包
2. 安装选项中选择自动添加 `PATH`

_使用 nvm:_

1. 去 nvm-windows 官网下载安装包`https://github.com/coreybutler/nvm-windows/releases`
2. 使用`nvm install`安装指定版本的`node`
3. 使用`nvm use` 设置使用的`node`版本

```shell
# 如果安装比较慢请设置国内源
SET NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# 列出node版本
nvm list-remote
# 安装16.19.0版本的 node
nvm install 16.19.0
# 切换到16.19.0版本的 node
nvm use 16.19.0
```

### macOS :id=2

_直接安装:_

1. 去`node`<a href="https://nodejs.org/en/download/" target="_blank">官方网站下载页面</a> 下载指定版本的 `macOS ` 的 `node` 安装包
2. 安装即可

_brew 安装_

!> brew 的源仓库使用到的是`github`源,`github`加速请<a href="https://su.yuanzhibang.com/2Cp" target="_blank">点击</a>

1. `brew` 安装,已安装清忽略,<a href="https://brew.sh/" target="_blank">brew 官网</a>
2. 使用`brew`安装`node` `brew install node@16`

```shell
# 安装brew
/bin/bash -c "$(curl -fsSL https://static.yuanzhibang.com/script/Homebrew/install.sh)"
# 安装node 16
brew install node@16
```

_nvm 安装_

1. `brew` 安装 `nvm`
2. 使用`nvm install`安装指定版本的`node`
3. 使用`nvm use` 设置使用的`node`版本

```shell
brew install nvm
# 如果安装比较慢请设置国内源
export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# 列出node版本
nvm list-remote
# 安装16.19.0版本的 node
nvm install 16.19.0
# 切换到16.19.0版本的 node
nvm use 16.19.0
```

### Linux :id=3

_shell 安装_

1. 安装`node`源
2. 安装

```shell
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
apt-get install -y nodejs # 其他系统请使用对应的安卓命令
```

_nvm 安装_

1. 安装`nvm`
2. 使用`nvm install`安装指定版本的`node`
3. 使用`nvm use` 设置使用的`node`版本

```shell
curl -o- https://static.yuanzhibang.com/script/nvm/v0.39.1/install.sh | bash
# 如果安装比较慢请设置国内源
export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# 列出node版本
nvm list-remote
# 安装16.19.0版本的 node
nvm install 16.19.0
# 切换到16.19.0版本的 node
nvm use 16.19.0
```
