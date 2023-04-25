> AppImage 为 Linux 平台的一种可执行程序格式, 关于更多 AppImage 信息请访问[https://docs.appimage.org/](https://docs.appimage.org/introduction/quickstart.html)

_运行 AppImages 非常简单。 您所要做的就是下载它们，使它们可执行并运行它们。 这可以使用 GUI 或通过命令行完成。_

_--- *来自官网的描述*_

---

1.为程序添加可执行权限

```bash
chmod +x your_ttqm_appimage_path.AppImage
```

2.双击或者通过命令行打开

```bash
./your_ttqm_appimage_path.AppImage
```

---

!>如果您在运行 AppImage 的过程中遇到问题,例如设置好权限后,无法通过双击打开,请使用命令行方式打开,根据错误输出进行安装依赖等操作.

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

!>如果您出现该错误也可访问[https://docs.appimage.org/user-guide/troubleshooting/fuse.html](https://docs.appimage.org/user-guide/troubleshooting/fuse.html)
