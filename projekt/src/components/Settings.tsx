import { useState } from 'react';
import { Teacher, TeachersData } from './TeachersData';

export const Settings = () => {
  const [selectedTeacherId, setSelectedTeacherId] = useState<number>(0);
  const [checkIsSelected, setCheckIsSelected] = useState(false);
  const [selectedFilteredTeacher, setSelectedFilteredTeacher] = useState<Teacher[]>();

  const handleFilterTeachersById = (teacherId: number) => {
    //const teachersId = new Set(TeachersData.map(({ id }) => id));

    //setSelectedFilteredTeacher();
    const filteredData = TeachersData.filter(teacher => teacher.id === teacherId);

    filteredData.map(teacher => {
      console.log(teacher.name);
    });
  };

  const handleChangeSelectedTeacher = e => {
    setSelectedTeacherId(e.target.value);
    setCheckIsSelected(true);

    //handleFilterTeachersById();
  };

  const handleSaveSettings = e => {
    e.preventDefault();
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
              <h1>siema {selectedTeacherId}</h1>
            </>
          ) : (
            <></>
          )}

          <button
            type='submit'
            className='w-full bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300'
            onClick={handleSaveSettings}>
            Zapisz ustawienia
          </button>
        </form>
      </div>
    </>
  );
};
