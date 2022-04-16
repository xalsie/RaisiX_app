// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')
Menu.setApplicationMenu(false)
const path = require('path')

async function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 600,
    minWidth: 300,
    minHeight: 300,
    icon: `${__dirname}/assets/images/favicon.ico`,

    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, 'preload.js')
    }
    
  })

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
    // mainWindow.loadURL('https://raisix.fr/login.php?url_redirect=/')
    mainWindow.loadURL('http://app.raisix/')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.