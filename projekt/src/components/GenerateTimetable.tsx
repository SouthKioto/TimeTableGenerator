//import { SettingsForm } from "./SettingsForm";
import { useState, useEffect } from 'react';
import { Teacher, TeachersData } from './TeachersData';
import { DisplayCodeGeneratedTable } from './DisplayCodeGeneratedTable';
import { Settings } from './Settings';

export const GenerateTimetable = () => {
  const [htmlContent, setHtmlContent] = useState(''); // stan przechowujący wykenerowany kod html
  const [showTimetableSourceCode, setShowTimetableSourceCode] = useState(false); // stan zmieniający widocznosc kodu
  const [showSettings, setShowSettings] = useState(false);

  const [htmlContentGenerated, setHtmlContentGenerated] = useState(false); // stan sprawdzajacy czy kod został wygenerowany

  // definicja tablicy z godzinami
  const hours = [
    '7:30-8:15',
    '8:20-9:05',
    '9:10-9:55',
    '10:00-10:45',
    '11:00-11:45',
    '11:50-12:35',
    '12:40-13:25',
    '13:45-14:30',
    '14:35-15:20',
    '15:25-16:10',
    '16:15-17:00',
    '17:05-17:50',
    '17:55-18:40',
  ];

  // hook useEffect wywyołujący funkcje handleCheckGeneratedHtmlContent, efekt wykonuje się tyle razy ile zmienia się stan htmlContent
  useEffect(() => {
    handleCheckGeneratedHtmlContent();
  }, [htmlContent]);

  // funkcja kopiujaca dane z tablicy Teachers do zmiennej availableTeacher
  const getAvailableTeachers = () => {
    const availableTeacher = TeachersData.map(teacher => ({
      ...teacher,
    }));

    return availableTeacher;
  };

  // funkcja sprawdzająca którzy nauczyciele maja jeszcze wieksza
  // od zera ilosc pozostałych godzin
  const getTeachersWithFreeHours = (teachers: Teacher[]) => {
    const data = teachers.filter(teacher => teacher.lessonsInWeekCount > 0);
    return data;
  };

  //funkcja generująca podzial godzin
  const generateTableSchema = async () => {
    let tableRows = '';

    const availableTeachers = getAvailableTeachers();

    for (let i = 0; i < hours.length; i++) {
      let row = `<tr>
                  <td class="bg-gray-200 border-2 border-black" style="width: 100px; height: 40px; text-align: center">${i + 1}.<br />${hours[i]}</td>
                `;

      for (let j = 0; j < 5; j++) {
        const teachersWithFreeHours = getTeachersWithFreeHours(availableTeachers);

        if (teachersWithFreeHours.length > 0) {
          const randomIndex = Math.floor(Math.random() * teachersWithFreeHours.length); // generowanie randomowego indeksu (od 0 do ilosci nauczycieli z aktualnie wolnymi godzinami)
          const selectedTeacher = teachersWithFreeHours[randomIndex];

          row += `<td style="width: 180px; height: 40px; text-align: center; ${i % 2 == 0 ? 'background-color: lightgray;' : ''} border: 1px solid black;">
                    ${selectedTeacher.name} ${selectedTeacher.surname}<br> 
                    ${selectedTeacher.lessonName}<br>
                    sala: ${selectedTeacher.classroom}<br>
                  </td>`;

          selectedTeacher.lessonsInWeekCount--;
        } else {
          row += `<td style="width: 180px; height: 40px; text-align: center; ${i % 2 == 0 ? 'background-color: lightgray;' : ''} border: 1px solid black;"> - </td>`;
        }
      }

      row += '</tr>';
      tableRows += row;
    }

    const updatedHtmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
        <center>
          <table class="rounded-lg">
            <tbody>
              <tr class="bg-gray-200">
                <td class="border-2 border-black" style="width: 100px; height: 40px; text-align: center"><b>Lesson No.</b></td>
                <td class="border-2 border-black" style="width: 180px; height: 40px; text-align: center"><b>Monday</b></td>
                <td class="border-2 border-black" style="width: 180px; height: 40px; text-align: center"><b>Tuesday</b></td>
                <td class="border-2 border-black" style="width: 180px; height: 40px; text-align: center"><b>Wednesday</b></td>
                <td class="border-2 border-black" style="width: 180px; height: 40px; text-align: center"><b>Thursday</b></td>
                <td class="border-2 border-black" style="width: 180px; height: 40px; text-align: center"><b>Friday</b></td>
              </tr>
              ${tableRows}
            </tbody>
          </table>
        </center>
      </body>
      </html>
    `;

    setHtmlContent(updatedHtmlContent);
  };

  const handleChangeSourceCodeVisibility = () => {
    setShowTimetableSourceCode(!showTimetableSourceCode);
  };

  const handleChangeSettingsVisibility = () => {
    setShowSettings(!showSettings);
  };

  const handleDeleteGeneratedTableShema = () => {
    setHtmlContent('');
    setShowTimetableSourceCode(false);
  };

  const handleCheckGeneratedHtmlContent = () => {
    if (htmlContent.length === 0) {
      setHtmlContentGenerated(true);
    } else {
      setHtmlContentGenerated(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html' }); // tworzenie obiektu Blob przechowującego kod html (type: 'text/html')
    const url = URL.createObjectURL(blob); // tworzenie tymczasowego adresu URL

    const link = document.createElement('a'); // tworzenie hiperłącza
    link.href = url; // ustawienei wartości href dla hiperłącza
    link.download = 'index.html'; // nadanie nazwy pobieranemu plikowi
    document.body.appendChild(link); // dodanie hiperłącza do dokumentu
    link.click(); // automatyczne kliknięcie hiperłącza

    document.body.removeChild(link); // usuniecie hiperłącza z dokumentu
  };

  // dangerouslySetInnerHTML atrybut react wstawiający surowy kod html do elementu DOM

  return (
    <>
      <div className='container mx-auto py-8 px-4 bg-blue-50 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold text-blue-700 mb-6 text-center'>Generator podziału godzin</h1>

        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-8'>
          <button
            className='px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors'
            onClick={generateTableSchema}>
            Generuj
          </button>

          <button
            className='px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors'
            onClick={handleDeleteGeneratedTableShema}>
            Czyść
          </button>

          <button
            disabled={htmlContentGenerated}
            className='px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors'
            onClick={handleDownload}>
            Pobierz plik HTML
          </button>

          <button
            disabled={htmlContentGenerated}
            className='px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors'
            onClick={handleChangeSourceCodeVisibility}>
            {showTimetableSourceCode ? 'Ukryj kod HTML' : 'Pokaż kod HTML'}
          </button>

          <button
            className='px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition-colors'
            onClick={handleChangeSettingsVisibility}>
            {showSettings ? 'Ukryj Ustawienia' : 'Pokaż Ustawienia'}
          </button>
        </div>

        {showSettings && (
          <div className='bg-gray-100 p-4 rounded-lg shadow-md mb-8'>
            <Settings />
          </div>
        )}

        {showTimetableSourceCode && (
          <div className='bg-gray-100 p-4 rounded-lg shadow-md mb-8'>
            <DisplayCodeGeneratedTable htmlContent={htmlContent} />
          </div>
        )}

        {htmlContent && (
          <div className='bg-gray-100 p-4 rounded-lg shadow-md mb-8'>
            <div
              className='p-4 bg-white rounded-lg shadow-md overflow-x-auto'
              dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
          </div>
        )}
      </div>
    </>
  );
};
