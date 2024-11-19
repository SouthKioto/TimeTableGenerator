// interface: jest to sposob definiowania struktury obiektów,
// (określenie jakie właściwości i typy będą miec dane w obiekcie)
export interface Teacher {
  name: string;
  surname: string;
  sala: string;
  lessonName: string;
  lessonsInWeekCount: GLfloat;
}

// Stworzenie tablicy nauczycieli zgodną z interfejsem Teacher
export const TeachersData: Teacher[] = [
  { name: 'Wanda', surname: 'Iwanek', lessonName: 'Jezyk Polski', sala: '26', lessonsInWeekCount: 3 },
  { name: 'Igor', surname: 'Drab', lessonName: 'Matematyka', sala: '60', lessonsInWeekCount: 5 },
  { name: 'Mikołaj', surname: 'Krystek', lessonName: 'Wychowanie Fizyczne', sala: 'none', lessonsInWeekCount: 6 },
  { name: 'Daria', surname: 'Czupryn', lessonName: 'j. Angielski', sala: '14i', lessonsInWeekCount: 11 },
  {
    name: 'Borys',
    surname: 'Matuła ',
    lessonName: 'Programowanie Aplikacji Desktopowych',
    sala: '50',
    lessonsInWeekCount: 8,
  },

  {
    name: 'Krzysztof',
    surname: 'Klag ',
    lessonName: 'Programowanie Aplikacji Mobilnych',
    sala: '50',
    lessonsInWeekCount: 8,
  },
  {
    name: 'Wiktor',
    surname: 'Kroczak',
    lessonName: 'Narzędzia Współczesnej Informatyki',
    sala: '36',
    lessonsInWeekCount: 4,
  },
  { name: 'Lena', surname: 'Strach ', lessonName: 'Wiedza o społeczeństwie', sala: '62', lessonsInWeekCount: 1 },
  {
    name: 'Piotr',
    surname: 'Szymczyk',
    lessonName: 'Programowanie zaawansowanych aplikacji webowych',
    sala: '12i',
    lessonsInWeekCount: 6,
  },
];
