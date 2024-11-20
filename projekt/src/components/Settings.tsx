import { useState } from 'react';
import { Teacher, TeachersData } from './TeachersData';

export const Settings = () => {
  const [selectedFilteredTeacher, setSelectedFilteredTeacher] = useState<Teacher | null>(null);
  const [checkIsSelected, setCheckIsSelected] = useState(false);

  const handleFilterTeachersById = (teacherId: number) => {
    const filteredData = TeachersData.find(teacher => teacher.id === teacherId);
    setSelectedFilteredTeacher(filteredData || null);
  };

  const handleChangeSelectedTeacher = e => {
    const teacherId = parseInt(e.target.value, 10);
    handleFilterTeachersById(teacherId);

    setCheckIsSelected(true);
  };

  const handleSaveSettings = () => {
    console.log('Selected teacher:', selectedFilteredTeacher);
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
                    value={selectedFilteredTeacher?.name}
                    className='w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Wpisz imię'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>Nazwisko</label>
                  <input
                    type='text'
                    value={selectedFilteredTeacher?.surname}
                    className='w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Wpisz nazwisko'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>Ilość lekcji w tygodniu</label>
                  <input
                    type='number'
                    value={selectedFilteredTeacher?.lessonsInWeekCount}
                    className='w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Wpisz liczbę lekcji'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>Sala</label>
                  <input
                    type='text'
                    value={selectedFilteredTeacher?.sala}
                    className='w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Wpisz salę'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>Przedmiot</label>
                  <input
                    type='text'
                    value={selectedFilteredTeacher?.lessonName}
                    className='w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Wpisz przedmiot'
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
