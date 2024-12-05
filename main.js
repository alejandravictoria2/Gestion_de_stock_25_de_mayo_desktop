const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow; // Ventana principal

// Crear la ventana principal cuando la aplicación esté lista
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Preload para funciones seguras
      nodeIntegration: false, // Más seguro deshabilitar la integración de Node.js
      contextIsolation: true, // Asegura un contexto aislado para la seguridad
    },
  });

  // Cargar el archivo HTML compilado en React
  mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));

  // Abrir las herramientas de desarrollo (opcional, útil para depuración)
  // mainWindow.webContents.openDevTools();
});

// Manejar el cierre de todas las ventanas
app.on('window-all-closed', () => {
  // Cierra la aplicación excepto en macOS
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Activar la aplicación en macOS cuando no haya ventanas abiertas
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    mainWindow = new BrowserWindow({
      width: 1024,
      height: 768,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: false,
        contextIsolation: true,
      },
    });
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }
});

