import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode'; // Biblioteca para escaneo
import './BarcodeScannerScreen.css'; // Archivo CSS para estilos

const BarcodeScannerScreen = () => {
  const [scannedData, setScannedData] = useState('');
  const [scanner, setScanner] = useState(null);

  useEffect(() => {
    // Configuración del escáner
    const scannerInstance = new Html5QrcodeScanner(
      'reader', // ID del contenedor
      { fps: 10, qrbox: { width: 250, height: 250 } }
    );

    scannerInstance.render(
      (decodedText) => {
        setScannedData(decodedText);
        scannerInstance.clear(); // Detener el escáner después de un escaneo exitoso
        setScanner(null);
      },
      (error) => {
        console.error('Error al escanear: ', error);
      }
    );

    setScanner(scannerInstance);

    return () => {
      if (scannerInstance) {
        scannerInstance.clear();
      }
    };
  }, []);

  const handleRescan = () => {
    setScannedData('');
    if (scanner) {
      scanner.render();
    }
  };

  return (
    <div className="scanner-container">
      <h1 className="header">Escáner de Código de Barras</h1>
      <div id="reader" className="reader"></div>
      {scannedData && (
        <>
          <p className="scanned-text">Datos escaneados: {scannedData}</p>
          <button className="rescan-button" onClick={handleRescan}>
            Escanear nuevamente
          </button>
        </>
      )}
    </div>
  );
};

export default BarcodeScannerScreen;
