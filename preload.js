const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Aquí puedes exponer funciones personalizadas al proceso de renderizado
});
