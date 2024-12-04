const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

// Función para crear la ventana principal
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280, // Ajuste a una resolución más amplia
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Script de preload para comunicación segura
      contextIsolation: true, // Seguridad: aislar el contexto del renderer y Node.js
      nodeIntegration: false, // Evitar acceso directo al sistema de archivos desde el renderer
      enableRemoteModule: false, // Deshabilitar el uso del módulo remoto (obsoleto)
    },
  });

  // Carga el archivo HTML o la URL del servidor de desarrollo
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:3000'); // Cambia esto según tu configuración de desarrollo
  } else {
    mainWindow.loadFile(path.join(__dirname, './src/index.html')); // Archivo empaquetado para producción
  }

  // Abre las herramientas de desarrollador en modo desarrollo
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  // Maneja el cierre de la ventana principal
  mainWindow.on('closed', () => {
    mainWindow = null; // Limpia la referencia para evitar fugas de memoria
  });
}

// Maneja los eventos principales del ciclo de vida de la app
app.on('ready', createWindow); // Crea la ventana cuando la app esté lista

app.on('window-all-closed', () => {
  // En macOS, las aplicaciones suelen permanecer activas hasta que el usuario las cierra explícitamente
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // En macOS, vuelve a crear la ventana si no hay otras abiertas
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Manejo adicional de errores globales (opcional)
app.on('uncaughtException', (error) => {
  console.error('Error no controlado:', error);
  app.quit(); // Opcional: cerrar la app en caso de error crítico
});
