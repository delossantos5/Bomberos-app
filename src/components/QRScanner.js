import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './QRScanner.css';

export default function QRScanner() {
  const [qrData, setQrData] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="qr-scanner">
      <h2>Rescue Cards</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {qrData && <p>Datos del QR: {qrData}</p>}
    </div>
  );
}
