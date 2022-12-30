> If you need to use multiple versions, please use `nvm` for multi-version `node` management

### Windows :id=1

_Direct installation:_

1. Go to `node` <a href="https://nodejs.org/en/download/" target="_blank">official website download page</a> to download the specified version of `windows` and install `node` Bag
2. Choose to automatically add `PATH` in the installation options

_Using nvm:_

1. Go to the nvm-windows official website to download the installation package `https://github.com/coreybutler/nvm-windows/releases`
2. Use `nvm install` to install the specified version of `node`
3. Use `nvm use` to set the version of `node` used

```shell
# If the installation is slow, please set the domestic source
SET NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# list node version
nvm list-remote
# Install the 16.19.0 version of node
nvm install 16.19.0
# Switch to the 16.19.0 version of node
nvm use 16.19.0
```

### macOS :id=2

_Direct installation:_

1. Go to `node` <a href="https://nodejs.org/en/download/" target="_blank">official website download page</a> to download the specified version of `macOS` and install `node` Bag
2. Install it

_brew install_

!> The source warehouse of brew uses `github` source, `github` speeds up, please <a href="https://su.yuanzhibang.com/2Cp" target="_blank">click</a>

1. `brew` installation, already installed and cleared, <a href="https://brew.sh/" target="_blank">brew official website</a>
2. Use `brew` to install `node` `brew install node@16`

```shell
# install brew
/bin/bash -c "$(curl -fsSL https://static.yuanzhibang.com/script/Homebrew/install.sh)"
# install node 16
brew install node@16
```

_nvm install_

1. `brew` install `nvm`
2. Use `nvm install` to install the specified version of `node`
3. Use `nvm use` to set the version of `node` used

```shell
brew install nvm
# If the installation is slow, please set the domestic source
export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# list node version
nvm list-remote
# Install the 16.19.0 version of node
nvm install 16.19.0
# Switch to the 16.19.0 version of node
nvm use 16.19.0
```

### Linux :id=3

_shell installation_

1. Install the `node` source
2. Install

```shell
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
apt-get install -y nodejs # For other systems, please use the corresponding Android command
```

_nvm install_

1. Install `nvm`
2. Use `nvm install` to install the specified version of `node`
3. Use `nvm use` to set the version of `node` used

```shell
curl -o- https://static.yuanzhibang.com/script/nvm/v0.39.1/install.sh | bash
# If the installation is slow, please set the domestic source
export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# list node version
nvm list-remote
# Install the 16.19.0 version of node
nvm install 16.19.0
# Switch to the 16.19.0 version of node
nvm use 16.19.0
```
