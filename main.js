const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');

function createWindow() {
  const iconPath = path.join(__dirname, 'app-icon.png'); // 根据实际图标文件名进行修改
  const icon = nativeImage.createFromPath(iconPath);

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: icon, // 添加此行以设置图标
    webPreferences: {
      nodeIntegration: false
    }
  });

  win.loadURL('https://www.poe.com/');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});