> 搭建 MQTT 服务器, 您的容器数据将会保存在`data`目录下

---

### 启动 `MQTT Server`

如果您要在 Windows & macOS 使用, 请先安装 [Docker Desktop](https://www.docker.com/products/docker-desktop/)

```bash
# 在linux上安装 docker 和 docker-compose
apt install docker.io docker-compose
# 克隆仓库
git clone  https://github.com/ttqm/MQTT-DOCKER.git
cd MQTT-DOCKER
# 启动服务
docker-compose up -d
```

---

- 这里我们使用[iegomez/mosquitto-go-auth](https://hub.docker.com/r/iegomez/mosquitto-go-auth)来实现用户权限控制(USER ACCESS CONTROL)

---

### 使能用户权限控制,默认允许匿名登录 `MQTT` 服务器

> 你可以更改 `./etc/mosquitto/mosquitto.conf`中的配置来使能用户权限控制

```

# you can set allow_anonymous false for forbidden anonymous
allow_anonymous false
include_dir /etc/mosquitto/conf.d
```

---

你可以访问`your-id:80` 通过 `phpmyadmin`来管理用户权限列表(ACL)

```
host: mqtt-mysql
user: root
password: mXgp8WOzZg
```

---

更多请访问: [iegomez/mosquitto-go-auth](https://hub.docker.com/r/iegomez/mosquitto-go-auth)
