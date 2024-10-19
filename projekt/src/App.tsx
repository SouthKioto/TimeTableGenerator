import React, { useState } from 'react';

export function App() {
  const [inputValue, setInputValue] = useState('');

  const handleDownload = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <p>${inputValue}</p>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <>
      <div>
        <h1>Generowanie pliku HTML</h1>
        <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Wpisz tekst' />
        <button onClick={handleDownload}>Pobierz plik HTML</button>
      </div>
    </>
  );
}
