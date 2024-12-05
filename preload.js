const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  myFunction: () => console.log('Función expuesta a la ventana'),
});
