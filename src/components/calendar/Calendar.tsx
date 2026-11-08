import clsx from 'clsx';
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent, ReactElement } from 'react';
import type { TCalendarProps } from './interface';
import { useLocale } from '../../locale';
import { Button } from '../button';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';
import * as styles from './Calendar.css';

const isSameDay = (firstDate: Date, secondDate: Date): boolean =>
  firstDate.getFullYear() === secondDate.getFullYear() &&
  firstDate.getMonth() === secondDate.getMonth() &&
  firstDate.getDate() === secondDate.getDate();

const normalizeDate = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate());

const formatDateKey = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

export const Calendar = ({
  value = null,
  onValueChange,
  month,
  onMonthChange,
  minDate,
  maxDate,
  isDateDisabled,
  autoFocus = false,
  className,
  ...otherProps
}: TCalendarProps): ReactElement => {
  const { locale, dir, firstDayOfWeek, weekend, messages } = useLocale();
  const labelId = useId();

  const [internalMonth, setInternalMonth] = useState<Date>(() => {
    const initial = month ?? value ?? new Date();
    return new Date(initial.getFullYear(), initial.getMonth(), 1);
  });

  const currentMonth = useMemo(() => {
    const target = month ?? internalMonth;
    return new Date(target.getFullYear(), target.getMonth(), 1);
  }, [month, internalMonth]);

  const [focusedDate, setFocusedDate] = useState<Date>(() => {
    return value ? normalizeDate(value) : normalizeDate(new Date());
  });

  const gridRef = useRef<HTMLDivElement | null>(null);

  const handleMonthUpdate = useCallback(
    (newMonth: Date) => {
      const sanitizedMonth = new Date(newMonth.getFullYear(), newMonth.getMonth(), 1);
      if (!month) {
        setInternalMonth(sanitizedMonth);
      }
      onMonthChange?.(sanitizedMonth);
    },
    [month, onMonthChange],
  );

  const goToPrevMonth = useCallback(() => {
    handleMonthUpdate(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  }, [currentMonth, handleMonthUpdate]);

  const goToNextMonth = useCallback(() => {
    handleMonthUpdate(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  }, [currentMonth, handleMonthUpdate]);

  const goToToday = useCallback(() => {
    const today = new Date();
    handleMonthUpdate(today);
    setFocusedDate(normalizeDate(today));
    onValueChange?.(today);
  }, [handleMonthUpdate, onValueChange]);

  const monthTitle = useMemo(() => {
    let str = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(currentMonth);
    if (locale === 'ru-RU') {
      str = str.replace(/\s*г\.?$/, '');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }, [locale, currentMonth]);

  const weekdayHeaders = useMemo(() => {
    const headers: Array<{ name: string; isWeekend: boolean }> = [];
    for (let i = 0; i < 7; i += 1) {
      const dayIndex = (firstDayOfWeek + i) % 7;
      // 1970-01-04 is Sunday (0)
      const sample = new Date(1970, 0, 4 + dayIndex);
      const name = new Intl.DateTimeFormat(locale, {
        weekday: locale === 'ar-EG' ? 'narrow' : 'short',
      }).format(sample);

      headers.push({
        name,
        isWeekend: weekend.includes(dayIndex),
      });
    }
    return headers;
  }, [locale, firstDayOfWeek, weekend]);

  const numberFormatter = useMemo(() => new Intl.NumberFormat(locale), [locale]);

  const selectedDateText = useMemo(() => {
    if (!value) return '';
    let str = new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(value);
    if (locale === 'ru-RU') {
      str = str.replace(/\s*г\.?$/, '');
    }
    return str;
  }, [locale, value]);

  const daysGrid = useMemo(() => {
    const year = currentMonth.getFullYear();
    const monthIndex = currentMonth.getMonth();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const firstDayIndex = new Date(year, monthIndex, 1).getDay();
    const offset = (firstDayIndex - firstDayOfWeek + 7) % 7;

    const rows: Array<Array<Date | null>> = [];
    let currentRow: Array<Date | null> = [];

    for (let i = 0; i < offset; i += 1) {
      currentRow.push(null);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      currentRow.push(new Date(year, monthIndex, day));
      if (currentRow.length === 7) {
        rows.push(currentRow);
        currentRow = [];
      }
    }

    if (currentRow.length > 0) {
      while (currentRow.length < 7) {
        currentRow.push(null);
      }
      rows.push(currentRow);
    }

    return rows;
  }, [currentMonth, firstDayOfWeek]);

  const checkIsDisabled = useCallback(
    (targetDate: Date): boolean => {
      const normalized = normalizeDate(targetDate);

      if (minDate && normalized < normalizeDate(minDate)) {
        return true;
      }
      if (maxDate && normalized > normalizeDate(maxDate)) {
        return true;
      }
      return Boolean(isDateDisabled && isDateDisabled(normalized));
    },
    [minDate, maxDate, isDateDisabled],
  );

  const selectDate = useCallback(
    (dateToSelect: Date) => {
      if (checkIsDisabled(dateToSelect)) return;
      setFocusedDate(normalizeDate(dateToSelect));
      onValueChange?.(dateToSelect);
    },
    [checkIsDisabled, onValueChange],
  );

  const focusDateInDom = useCallback((targetDate: Date) => {
    const key = formatDateKey(targetDate);
    const btn = gridRef.current?.querySelector<HTMLButtonElement>(`button[data-date="${key}"]`);
    if (btn) {
      btn.focus();
    }
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const isRtl = dir === 'rtl';
      let dayDelta = 0;

      switch (event.key) {
        case 'ArrowLeft':
          dayDelta = isRtl ? 1 : -1;
          break;
        case 'ArrowRight':
          dayDelta = isRtl ? -1 : 1;
          break;
        case 'ArrowUp':
          dayDelta = -7;
          break;
        case 'ArrowDown':
          dayDelta = 7;
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          selectDate(focusedDate);
          return;
        case 'PageUp':
          event.preventDefault();
          goToPrevMonth();
          return;
        case 'PageDown':
          event.preventDefault();
          goToNextMonth();
          return;
        default:
          return;
      }

      event.preventDefault();
      const nextDate = new Date(focusedDate.getFullYear(), focusedDate.getMonth(), focusedDate.getDate() + dayDelta);

      setFocusedDate(nextDate);

      if (nextDate.getMonth() !== currentMonth.getMonth() || nextDate.getFullYear() !== currentMonth.getFullYear()) {
        handleMonthUpdate(nextDate);
      }

      // Перемещаем реальный фокус в DOM на целевую дату
      setTimeout(() => {
        focusDateInDom(nextDate);
      }, 0);
    },
    [dir, focusedDate, currentMonth, handleMonthUpdate, selectDate, goToPrevMonth, goToNextMonth, focusDateInDom],
  );

  useEffect(() => {
    if (autoFocus && gridRef.current) {
      focusDateInDom(focusedDate);
    }
  }, [autoFocus, focusDateInDom, focusedDate]);

  const today = useMemo(() => new Date(), []);

  return (
    <div className={clsx(styles.root, className)} role="group" aria-labelledby={labelId} {...otherProps}>
      <header className={styles.header}>
        <Button
          type="button"
          variant="outline"
          size="S"
          className={styles.navButton}
          onClick={goToPrevMonth}
          aria-label={messages.calendar.prevMonth}
        >
          <ChevronLeftIcon />
        </Button>

        <span id={labelId} className={styles.headerTitle} aria-live="polite">
          {monthTitle}
        </span>

        <Button
          type="button"
          variant="outline"
          size="S"
          className={styles.navButton}
          onClick={goToNextMonth}
          aria-label={messages.calendar.nextMonth}
        >
          <ChevronRightIcon />
        </Button>
      </header>

      <div ref={gridRef} role="grid" aria-labelledby={labelId} tabIndex={0} onKeyDown={handleKeyDown}>
        <div role="row" className={styles.weekdays}>
          {weekdayHeaders.map((header) => (
            <div
              key={header.name}
              role="columnheader"
              className={clsx(styles.weekdayCell, header.isWeekend && styles.dayWeekend)}
            >
              {header.name}
            </div>
          ))}
        </div>

        <div className={styles.weeks}>
          {daysGrid.map((week, weekIndex) => (
            <div key={`week-${weekIndex}`} role="row" className={styles.weekRow}>
              {week.map((dayDate, dayIndex) => {
                if (!dayDate) {
                  return <div key={`empty-${weekIndex}-${dayIndex}`} className={styles.emptyCell} aria-hidden="true" />;
                }

                const isCurrentDay = isSameDay(dayDate, today);
                const isSelected = Boolean(value && isSameDay(dayDate, value));
                const isDisabled = checkIsDisabled(dayDate);
                const isWeekendDay = weekend.includes(dayDate.getDay());
                const isFocused = isSameDay(dayDate, focusedDate);

                return (
                  <button
                    key={dayDate.toISOString()}
                    type="button"
                    role="gridcell"
                    tabIndex={isFocused ? 0 : -1}
                    data-date={formatDateKey(dayDate)}
                    data-selected={isSelected}
                    aria-selected={isSelected}
                    aria-disabled={isDisabled}
                    disabled={isDisabled}
                    className={clsx(
                      styles.dayCell,
                      isWeekendDay && styles.dayWeekend,
                      isSelected && styles.daySelected,
                      isDisabled && styles.dayDisabled,
                      isFocused && styles.dayFocusVisibleState,
                    )}
                    onClick={() => selectDate(dayDate)}
                  >
                    <span>{numberFormatter.format(dayDate.getDate())}</span>
                    {isCurrentDay ? (
                      <span
                        className={clsx(styles.todayDot, isSelected && styles.todayDotSelected)}
                        aria-hidden="true"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      <footer className={styles.footer}>
        <span className={styles.footerText}>{selectedDateText}</span>

        <Button type="button" variant="outline" size="S" icon={<CalendarIcon />} onClick={goToToday}>
          {messages.calendar.today}
        </Button>
      </footer>
    </div>
  );
};

Calendar.displayName = 'Calendar';
