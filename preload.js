const { contextBridge, ipcRenderer } = require('electron');

// Exponer un conjunto de funciones seguras al renderer
contextBridge.exposeInMainWorld('electronAPI', {
  navigate: (screen) => ipcRenderer.send('navigate', screen),
  onNavigate: (callback) => ipcRenderer.on('navigate', (event, screen) => callback(screen)),
});
