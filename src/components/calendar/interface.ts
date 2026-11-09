import type { ComponentPropsWithRef, ReactElement } from 'react';

export type TCalendarProps = Omit<ComponentPropsWithRef<'div'>, 'value' | 'defaultValue'> & {
  /**
   * Выбранная дата.
   */
  value?: Date | null;

  /**
   * Колбэк при выборе даты.
   */
  onValueChange?: (date: Date) => void;

  /**
   * Отображаемый месяц (дата, определяющая год и месяц).
   * Если не передан, календарь управляет месяцем самостоятельно (по умолчанию текущий месяц).
   */
  month?: Date;

  /**
   * Колбэк при переключении отображаемого месяца пользователем.
   */
  onMonthChange?: (month: Date) => void;

  /**
   * Минимальная дата, доступная для выбора.
   */
  minDate?: Date;

  /**
   * Максимальная дата, доступная для выбора.
   */
  maxDate?: Date;

  renderItem?: (date: Date) => ReactElement;

  /**
   * Функция для выборочного отключения определенных дат.
   */
  isDateDisabled?: (date: Date) => boolean;

  /**
   * Автоматический фокус на сетке календаря.
   * @default false
   */
  autoFocus?: boolean;
};

export type CalendarProps = TCalendarProps;
