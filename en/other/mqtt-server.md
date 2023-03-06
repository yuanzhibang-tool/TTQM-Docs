> Start MQTT server via Docker compose, your container data will sava in data dir.

---

### Start MQTT Server

please install [Docker Desktop](https://www.docker.com/products/docker-desktop/) for Windows & macOS

```bash
# install docker and docker-compose on linux, please install Docker Desktop for Windows & macOS,
apt install docker.io docker-compose
# clone the repository
git clone  https://github.com/ttqm/MQTT-DOCKER.git
cd MQTT-DOCKER
# start docker container via docker-compose
docker-compose up -d
```

---

- Supports user access control with [iegomez/mosquitto-go-auth](https://hub.docker.com/r/iegomez/mosquitto-go-auth)

---

### Enable User Access Control

> You can enable user access control by change the config in `./etc/mosquitto/mosquitto.conf`

```

>you can set allow_anonymous false for forbidden anonymous
allow_anonymous false
include_dir /etc/mosquitto/conf.d
```

---

You can open link: `your-id:80` to manage acl on `phpmyadmin`

```
host: mqtt-mysql
user: root
password: mXgp8WOzZg
```

---

For more info please read: [iegomez/mosquitto-go-auth](https://hub.docker.com/r/iegomez/mosquitto-go-auth)
