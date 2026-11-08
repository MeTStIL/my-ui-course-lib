import type { TLocale } from './interface';

export const ruRU: TLocale = {
  locale: 'ru-RU',
  dir: 'ltr',
  firstDayOfWeek: 1,
  weekend: [6, 0],
  messages: {
    calendar: {
      today: 'Сегодня',
      prevMonth: 'Предыдущий месяц',
      nextMonth: 'Следующий месяц',
    },
  },
};

export const enUS: TLocale = {
  locale: 'en-US',
  dir: 'ltr',
  firstDayOfWeek: 0,
  weekend: [6, 0],
  messages: {
    calendar: {
      today: 'Today',
      prevMonth: 'Previous month',
      nextMonth: 'Next month',
    },
  },
};

export const arEG: TLocale = {
  locale: 'ar-EG',
  dir: 'rtl',
  firstDayOfWeek: 6,
  weekend: [5, 6],
  messages: {
    calendar: {
      today: 'اليوم',
      prevMonth: 'الشهر السابق',
      nextMonth: 'الشهر التالي',
    },
  },
};
