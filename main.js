const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, // Más seguro
      contextIsolation: true, // Habilitar contexto aislado
    },
  });

  // Cargar tu aplicación web
  mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html')); // Ruta al archivo compilado de React
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
