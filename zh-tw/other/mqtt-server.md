> 搭建 MQTT 服務器, 您的容器數據將會保存在`data`目錄下

---

### 啟動 `MQTT Server`

如果您要在 Windows & macOS 使用, 請先安裝 [Docker Desktop](https://www.docker.com/products/docker-desktop/)

```bash
# 在linux上安裝 docker 和 docker-compose
apt install docker.io docker-compose
# 克隆倉庫
git clone  https://github.com/ttqm/MQTT-DOCKER.git
cd MQTT-DOCKER
# 啟動服務
docker-compose up -d
```

---

- 這裡我們使用[iegomez/mosquitto-go-auth](https://hub.docker.com/r/iegomez/mosquitto-go-auth)來實現用戶權限控制(USER ACCESS CONTROL)

---

### 使能用戶權限控制,默認允許匿名登錄 `MQTT` 服務器

> 你可以更改 `./etc/mosquitto/mosquitto.conf`中的配置來使能用戶權限控制

```

>you can set allow_anonymous false for forbidden anonymous
allow_anonymous false
include_dir /etc/mosquitto/conf.d
```

---

你可以訪問`your-id:80` 通過 `phpmyadmin`來管理用戶權限列表(ACL)

```
host: mqtt-mysql
user: root
password: mXgp8WOzZg
```

---

更多請訪問: [iegomez/mosquitto-go-auth](https://hub.docker.com/r/iegomez/mosquitto-go-auth)
