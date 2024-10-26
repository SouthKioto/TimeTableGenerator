import { SettingsForm } from './SettingsForm';
import { useState } from 'react';
import { TeachersData } from './TeachersData';
import { DisplayCodeGeneratedTable } from './DisplayCodeGeneratedTable';

export const GenerateTimetable = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [showTimetableSourceCode, setShowTimetableSourceCode] = useState(false);

  const [hours, setHours] = useState([
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
    '21:45-21:46',
    '21:47-21:48',
    '21:49-21:50',
    '21:51-21:52',
  ]);

  //console.log(TeachersData);

  const getAvailableTeachers = () => {
    const availableTeacher = TeachersData.map(teacher => ({
      ...teacher,
      remainingLessons: teacher.lessonsInWeekCount,
    }));

    return availableTeacher;
  };

  const getTeachersWithFreeHours = teachers => {
    const data = teachers.filter(teacher => teacher.remainingLessons > 0);
    return data;
  };

  const generateTableSchema = async () => {
    let tableRows = '';

    const availableTeachers = getAvailableTeachers();

    for (let i = 0; i < hours.length; i++) {
      let row = `<tr style="background: #fff">
                  <td style="width: 100px; height: 40px; text-align: center">${i + 1}.<br />${hours[i]}</td>
                `;

      for (let j = 0; j < 5; j++) {
        const teachersWithFreeHours = getTeachersWithFreeHours(availableTeachers);

        if (teachersWithFreeHours.length > 0) {
          const randomIndex = Math.floor(Math.random() * teachersWithFreeHours.length);
          const selectedTeacher = teachersWithFreeHours[randomIndex];

          row += `<td style="width: 180px; height: 40px; text-align: center">
                    ${selectedTeacher.name} ${selectedTeacher.surname}<br> 
                     ${selectedTeacher.lessonName}<br>
                     sala: ${selectedTeacher.sala}<br>
                  </td>`;

          selectedTeacher.remainingLessons--;
        } else {
          row += `<td style="width: 180px; height: 40px; text-align: center"></td>`;
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
          <table border="1">
            <tbody>
              <tr style="background: #eee">
                <td style="width: 100px; height: 40px; text-align: center"><b>Nr lekcji</b></td>
                <td style="width: 180px; height: 40px; text-align: center"><b>Poniedziałek</b></td>
                <td style="width: 180px; height: 40px; text-align: center"><b>Wtorek</b></td>
                <td style="width: 180px; height: 40px; text-align: center"><b>Środa</b></td>
                <td style="width: 180px; height: 40px; text-align: center"><b>Czwartek</b></td>
                <td style="width: 180px; height: 40px; text-align: center"><b>Piątek</b></td>
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

  const handleChangeSourceCodeWisibility = () => {
    setShowTimetableSourceCode(!showTimetableSourceCode);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  /*
  przydatny kod
        <ul>
        {TeachersData.map(data => (
          <li key={data.name}>
            {data.name}, {data.sala}
          </li>
        ))}
      </ul>

      <ol>
        {randomIndex.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ol>
  */

  return (
    <>
      <div style={{ maxWidth: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Generowanie pliku HTML</h1>
        <button onClick={handleDownload}>Pobierz plik HTML</button>
        <button onClick={generateTableSchema}>Generuj</button>
        <button onClick={handleChangeSourceCodeWisibility}>Pokaż kod planu lekcji</button>
      </div>

      {showTimetableSourceCode ? <DisplayCodeGeneratedTable htmlContent={htmlContent} /> : null}

      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </>
  );
};
