// interface: jest to sposob definiowania struktury obiektów,
// (określenie jakie właściwości i typy będą miec dane w obiekcie)
export interface Teacher {
  id: number;
  name: string;
  surname: string;
  sala: string;
  lessonName: string;
  lessonsInWeekCount: number;
}

// Stworzenie tablicy nauczycieli zgodną z interfejsem Teacher
export const TeachersData: Teacher[] = [
  { id: 1, name: 'Wanda', surname: 'Iwanek', lessonName: 'Jezyk Polski', sala: '26', lessonsInWeekCount: 3 },
  { id: 2, name: 'Igor', surname: 'Drab', lessonName: 'Matematyka', sala: '60', lessonsInWeekCount: 5 },
  {
    id: 3,
    name: 'Mikołaj',
    surname: 'Krystek',
    lessonName: 'Wychowanie Fizyczne',
    sala: 'none',
    lessonsInWeekCount: 6,
  },
  { id: 4, name: 'Daria', surname: 'Czupryn', lessonName: 'j. Angielski', sala: '14i', lessonsInWeekCount: 11 },
  {
    id: 5,
    name: 'Borys',
    surname: 'Matuła ',
    lessonName: 'Programowanie Aplikacji Desktopowych',
    sala: '50',
    lessonsInWeekCount: 8,
  },

  {
    id: 6,
    name: 'Krzysztof',
    surname: 'Klag ',
    lessonName: 'Programowanie Aplikacji Mobilnych',
    sala: '50',
    lessonsInWeekCount: 8,
  },
  {
    id: 7,
    name: 'Wiktor',
    surname: 'Kroczak',
    lessonName: 'Narzędzia Współczesnej Informatyki',
    sala: '36',
    lessonsInWeekCount: 4,
  },
  { id: 8, name: 'Lena', surname: 'Strach ', lessonName: 'Wiedza o społeczeństwie', sala: '62', lessonsInWeekCount: 1 },
  {
    id: 9,
    name: 'Piotr',
    surname: 'Szymczyk',
    lessonName: 'Programowanie zaawansowanych aplikacji webowych',
    sala: '12i',
    lessonsInWeekCount: 6,
  },
];
