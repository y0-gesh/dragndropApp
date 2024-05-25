const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const ipc = ipcMain;

const createWindow = () => {

  const win = new BrowserWindow({
    width: 500,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      preload: path.join(__dirname, "./preload.js"),
    },
    frame: false,
    transparent: true, 
    titleBarStyle: "hidden",
  });

  win.loadURL("http://localhost:3000");

  ipc.on("minimizeApp", (event) => {
    win.minimize();
  });

  ipc.on("toggleMaximizeApp", (event) => {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });

  ipc.on("closeApp", (event) => {
    win.close();
  });
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
