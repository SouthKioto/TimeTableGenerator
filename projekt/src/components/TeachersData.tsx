export interface Teacher {
  name: string;
  surname: string;
  sala: string;
  lessonName: string;
  lessonsInWeekCount: GLfloat;
}

export const TeachersData: Teacher[] = [
  { name: 'Marta', surname: 'Smolen', lessonName: 'Jezyk Polski', sala: '26', lessonsInWeekCount: 3 },
  { name: 'Alicja', surname: 'Dębska', lessonName: 'Matematyka', sala: '60', lessonsInWeekCount: 5 },
  { name: 'Monika', surname: 'Tajduś', lessonName: 'Wychowanie Fizyczne', sala: 'none', lessonsInWeekCount: 6 },
  { name: 'Anita', surname: 'Iwan-Franczyk', lessonName: 'j. Angielski', sala: '14i', lessonsInWeekCount: 11 },
  {
    name: 'Mirosław',
    surname: 'Trzupek ',
    lessonName: 'Programowanie Aplikacji Desktopowych',
    sala: '50',
    lessonsInWeekCount: 8,
  },

  {
    name: 'Mirosław',
    surname: 'Trzupek ',
    lessonName: 'Programowanie Aplikacji Mobilnych',
    sala: '50',
    lessonsInWeekCount: 8,
  },
  {
    name: 'Grzegorz',
    surname: 'Kęska',
    lessonName: 'Narzędzia Współczesnej Informatyki',
    sala: '36',
    lessonsInWeekCount: 4,
  },
  { name: 'Beata', surname: 'Berdychowska ', lessonName: 'Wiedza o społeczeństwie', sala: '62', lessonsInWeekCount: 1 },
  {
    name: 'Maciej',
    surname: 'Wiktor',
    lessonName: 'Programowanie zaawansowanych aplikacji webowych',
    sala: '12i',
    lessonsInWeekCount: 6,
  },
];
