// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, Menu, Tray  } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    icon: 'assets/icon.png',
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('src/index.html')
  //win.webContents.openDevTools()

  const template = [
    {
      label: "Menu",
      submenu: [
        {label: "Notification",
          click(){
            openWin2("Notification")
          }
        },
        {label: "Refresh",
          click(){
            win.webContents.send('refresh')
          }
        },
        {type: "separator"},
        {role: "quit", label: "Ende"}
      ]
    }
  ]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

}

// Window2
ipcMain.on('window', function(event, arg){
  openWin2(arg)
})

function openWin2(arg){
  const win2 = new BrowserWindow({
    icon: 'assets/icon.png',
    width:600, 
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win2.loadFile('src/notify.html')
  win2.removeMenu()
  win2.title = arg
}

app.whenReady().then(() => {
  createWindow();
  const tray = new Tray('assets/icon-tray.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Aktien App', click(){
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    }},
    { label: 'Notification', click(){
      openWin2("Notification")
    }
  },
  {role: "reload", label: "Refresh"},
  {role: "quit", label: "Ende"}
  ])
  tray.setToolTip('Aktien App');
  tray.setContextMenu(contextMenu)
  

  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    //app.quit()
  }
})
