> AppImage 為 Linux 平台的一種可執行程序格式, 關於更多 AppImage 信息請訪問[https://docs.appimage.org/](https://docs.appimage.org/introduction/quickstart.html)

_運行 AppImages 非常簡單。您所要做的就是下載它們，使它們可執行並運行它們。這可以使用 GUI 或通過命令行完成。 _

_--- *來自官網的描述*_

---

1.為程序添加可執行權限

```bash
chmod +x your_ttqm_appimage_path.AppImage
```

2.雙擊或者通過命令行打開

```bash
./your_ttqm_appimage_path.AppImage
```

---

!>如果您在運行 AppImage 的過程中遇到問題,例如設置好權限後,無法通過雙擊打開,請使用命令行方式打開,根據錯誤輸出進行安裝依賴等操作.

```bash
cd /your_ttqm_app_dir/
chmod +x TTQM-latest-linux-x86_64.AppImage
./TTQM-latest-linux-x86_64.AppImage
# An error occurred while running the app

# AppImages require FUSE to run.
# You might still be able to extract the contents of this AppImage
# if you run it with the --appimage-extract option.
# See https://github.com/AppImage/AppImageKit/wiki/FUSE
# for more information

```

![Error](_media/how-to-run-an-appimage/1.jpg ':size=600')

!>如果您出現該錯誤也可訪問[https://docs.appimage.org/user-guide/troubleshooting/fuse.html](https://docs.appimage.org/user-guide/troubleshooting/fuse.html)
