> AppImage is an executable program format for Linux platform. For more information about AppImage, please visit [https://docs.appimage.org/](https://docs.appimage.org/introduction/quickstart.html)

_It’s quite simple to run AppImages. All you have to do is download them, make them executable and run them. This can either be done using the GUI or via the command line._

_--- *The description from the official website*_

---

1. Add executable permissions to the app

```bash
chmod +x your_ttqm_appimage_path.AppImage
```

2. Double-click or Using the Terminal

```bash
./your_ttqm_appimage_path.AppImage
```

---

!>If you have problems running the AppImage, for example, after setting the permissions, you cannot open it by double-clicking, please use the command line to open it, and do something according to the error output.

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

!> If you have this error, you can also visit [https://docs.appimage.org/user-guide/troubleshooting/fuse.html](https://docs.appimage.org/user-guide/troubleshooting/fuse.html)
