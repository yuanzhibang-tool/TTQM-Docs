> If you need to use multiple versions of node, please use `nvm` for multi-version `node version` management

### Windows :id=1

_Via package:_

1. Go to `node` <a href="https://nodejs.org/en/download/" target="_blank">Official Website Download Page</a> to download the specified version of `windows` and install after download is complete.
2. Select to automatically add `PATH` in the installation options.

_Via nvm:_

1. Go to the nvm-windows [Home Page](https://github.com/coreybutler/nvm-windows/releases) to download the installation package, then install it.
2. Use `nvm install` to install the specified version of `node`.
3. Use `nvm use` to set the version of `node` used.

```shell
# If the installation is slow, please set the mirror
# SET NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# list node version
nvm list-remote
# Install the 16.19.0 version of node
nvm install 16.19.0
# Switch to the 16.19.0 version of node
nvm use 16.19.0
```

---

### macOS :id=2

_Via package:_

1. Go to `node` <a href="https://nodejs.org/en/download/" target="_blank">Official Website Download Page</a> to download the specified version of `macOS`.
2. Install after download is complete.

_Via brew_

1. Install `brew`, ignore if already installed, <a href="https://brew.sh/" target="_blank">Brew Official Website</a>
2. Use `brew` to install `node` `brew install node@16`

```shell
# install brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# install node 16
brew install node@16
```

_Via nvm_

1. `brew` install `nvm`
2. Use `nvm install` to install the specified version of `node`
3. Use `nvm use` to set the version of `node` used

```shell
brew install nvm
# If the installation is slow, please set the mirror
# export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# list node version
nvm list-remote
# Install the 16.19.0 version of node
nvm install 16.19.0
# Switch to the 16.19.0 version of node
nvm use 16.19.0
```

---

### Linux :id=3

_Via shell_

1. Add the `node` source
2. Install

```shell
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
apt-get install -y nodejs # For other systems, please use the corresponding Android command
```

_Via nvm_

1. Install `nvm`
2. Use `nvm install` to install the specified version of `node`
3. Use `nvm use` to set the version of `node` used

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# If the installation is slow, please set the mirror
# export NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/
# list node version
nvm list-remote
# Install the 16.19.0 version of node
nvm install 16.19.0
# Switch to the 16.19.0 version of node
nvm use 16.19.0
```
