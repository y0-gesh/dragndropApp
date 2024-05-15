
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const ipc = ipcMain;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 680,
    minWidth: 940,
    minHeight: 560,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      preload: path.join(__dirname, "./preload.js"),
    },
    titleBarStyle: "hidden",
  });

  win.loadURL("http://localhost:3000");

  ipc.on("minimizeApp", (event) => {
    win.minimize();
  });

//   ipc.on("maximizeApp", (event) => {
//     if (!win.isMaximized()) {
//       win.maximize();
//       // win.restore();
//       console.log("Maximizing");
//     } else {
//       win.unmaximize();
//       // win.restore();
//       console.log("UnMaximizing");
//     }
//   });

  ipc.on("maximizeApp", (event) => {
    win.maximize();
  });
  ipc.on("unmaximizeApp", (event) => {
    win.unmaximize();
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
