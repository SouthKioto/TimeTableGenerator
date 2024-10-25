import { SettingsForm } from './SettingsForm';
import { HtmlContent } from './HtmlContent';
import { useState } from 'react';
import { TeachersData } from './TeachersData';

export const GenerateTimetable = () => {
  const [inputValue, setInputValue] = useState('');

  console.log(TeachersData);

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

  /*



  */

  return (
    <>
      <div>
        <h1>Generowanie pliku HTML</h1>
        <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Wpisz tekst' />
        <button onClick={handleDownload}>Pobierz plik HTML</button>
      </div>

      <ul>
        {TeachersData.map(index, data => {
          <li key={index}>{data.name}</li>;
        })}
      </ul>
    </>
  );
};
