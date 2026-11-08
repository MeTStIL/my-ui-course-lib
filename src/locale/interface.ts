export type TLocaleMessages = {
  calendar: {
    today: string;
    prevMonth: string;
    nextMonth: string;
  };
};

export type TLocale = {
  locale: string;
  dir: 'ltr' | 'rtl';
  /** Первый день недели: 0 — вс, 1 — пн, 6 — сб */
  firstDayOfWeek: number;
  /** Индексы дней недели, считающиеся выходными (0 — вс, 6 — сб) */
  weekend: number[];
  messages: TLocaleMessages;
};

export type Locale = TLocale;
