import { useState, useEffect } from 'react';
import { Teacher, TeachersData } from './TeachersData';

export const Settings = () => {
  const [selectedFilteredTeacher, setSelectedFilteredTeacher] = useState<Teacher | null>(null);
  const [teacherId, setTeacherId] = useState<number>(0);
  const [checkIsSelected, setCheckIsSelected] = useState(false);

  // changed teacher data states
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [lessonsCount, setLessonsCount] = useState<number>(0);
  const [classroom, setClassroom] = useState<string>('');
  const [lessonName, setLessonName] = useState<string>('');

  useEffect(() => {
    handleFilterTeachersById(teacherId);
    //console.log(selectedFilteredTeacher);

    if (selectedFilteredTeacher !== null) {
      setName(selectedFilteredTeacher?.name || '');
      setSurname(selectedFilteredTeacher?.surname || '');
      setLessonsCount(selectedFilteredTeacher?.lessonsInWeekCount || 0);
      setClassroom(selectedFilteredTeacher?.classroom || '');
      setLessonName(selectedFilteredTeacher?.lessonName || '');
    } else {
      setName('');
      setSurname('');
      setLessonsCount(0);
      setClassroom('');
      setLessonName('');
    }
  }, [teacherId]);
  // useEffect

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeSurname = e => {
    setSurname(e.target.value);
  };

  const handleChangeLessonsCount = e => {
    setLessonsCount(e.target.value);
  };

  const handleChangeClassroom = e => {
    setClassroom(e.target.value);
  };

  const handleChangeLessonName = e => {
    setLessonName(e.target.value);
  };

  const handleFilterTeachersById = (teacherId: number) => {
    const filteredData = TeachersData.find(teacher => teacher.id === teacherId);
    setSelectedFilteredTeacher(filteredData || null);
  };

  const handleChangeSelectedTeacher = e => {
    if (e.target.value.length > 0) {
      setTeacherId(parseInt(e.target.value));
      setCheckIsSelected(true);
      //console.log('true');
    } else {
      setCheckIsSelected(false);
      //console.log('false');
    }
  };

  const handleSaveSettings = () => {
    const newTecherData: Teacher[] = [
      {
        id: selectedFilteredTeacher?.id || 0,
        name: name,
        surname: surname,
        lessonsInWeekCount: lessonsCount,
        classroom: classroom,
        lessonName: lessonName,
      },
    ];

    console.log(`Dane ${JSON.stringify(newTecherData)}`);
  };

  return (
    <>
      <div className='p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Ustawienia</h1>
        <form className='space-y-4'>
          {/* Liczba lekcji */}
          <div>
            <h2 className='text-xl font-semibold mb-2'>Lista nauczycieli</h2>
            <select
              className='w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              onChange={handleChangeSelectedTeacher}>
              <option selected></option>
              {TeachersData.length > 0 ? (
                TeachersData.map((teacher, index) => (
                  <option key={index} value={teacher.id}>
                    {teacher.name} {teacher.surname}
                  </option>
                ))
              ) : (
                <option>Brak nauczycieli na liście</option>
              )}
            </select>
          </div>

          {checkIsSelected ? (
            <>
              <div className='p-6 bg-white rounded-lg shadow-md space-y-4'>
                <h2 className='text-xl font-semibold text-gray-800 mb-4'>Dane nauczyciela</h2>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>Imię</label>
                  <input
                    type='text'
                    value={name}
                    className='w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Wpisz imię'
                    onChange={handleChangeName}
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>Nazwisko</label>
                  <input
                    type='text'
                    value={surname}
                    className='w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Wpisz nazwisko'
                    onChange={handleChangeSurname}
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>Ilość lekcji w tygodniu</label>
                  <input
                    type='number'
                    value={lessonsCount}
                    className='w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Wpisz liczbę lekcji'
                    onChange={handleChangeLessonsCount}
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>Sala</label>
                  <input
                    type='text'
                    value={classroom}
                    className='w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Wpisz salę'
                    onChange={handleChangeClassroom}
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>Przedmiot</label>
                  <input
                    type='text'
                    value={lessonName}
                    className='w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Wpisz przedmiot'
                    onChange={handleChangeLessonName}
                  />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          <input
            type='button'
            className='w-full bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300'
            onClick={handleSaveSettings}
            value='Zapisz'
          />
        </form>
      </div>
    </>
  );
};
