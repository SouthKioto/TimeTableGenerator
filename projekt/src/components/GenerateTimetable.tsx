import { SettingsForm } from './SettingsForm';
import { HtmlContent } from './HtmlContent';
import { useState } from 'react';

export const GenerateTimetable = params => {
  const [inputValue, setInputValue] = useState('');

  const handleDownload = () => {
    const blob = new Blob([HtmlContent], { type: 'text/html' });
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
};
