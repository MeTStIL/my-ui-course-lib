import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import type { TButtonSize, TButtonVariant } from './components';
import type { TLocale } from './locale';
import type { TThemeMode } from './theme';
import { Button, Calendar, calendarStyles } from './components';
import { arEG, enUS, LocaleContext, ruRU } from './locale';
import { ThemeOverride, ThemeProvider } from './theme';
import './App.css';

const BUTTON_VARIANTS: Array<TButtonVariant> = ['fill', 'outline', 'text'];
const BUTTON_SIZES: Array<TButtonSize> = ['S', 'M', 'L'];

const LOCALES: Record<string, TLocale> = {
  'ru-RU': ruRU,
  'en-US': enUS,
  'ar-EG': arEG,
};

const DAY_STATES_COLUMNS = [
  'type',
  'default',
  ':hover',
  ':active',
  ':focus-visible',
  'selected',
  'today',
  'today + selected',
  'disabled',
  'outside',
] as const;

const App = (): ReactElement => {
  const [theme, setTheme] = useState<TThemeMode>('light');
  const [localeKey, setLocaleKey] = useState<string>('ru-RU');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [restrictedDate, setRestrictedDate] = useState<Date | null>(null);

  const activeLocale = useMemo(() => LOCALES[localeKey], [localeKey]);

  // Ограничения для демо: minDate = сегодня, maxDate = через 60 дней, вторники заблокированы
  const today = useMemo(() => new Date(), []);
  const maxDateLimit = useMemo(
    () => new Date(today.getFullYear(), today.getMonth() + 2, today.getDate()),
    [today],
  );

  return (
    <div className="showcase-root">
      <header className="showcase-header">
        <h1>MeTStIL Design-system</h1>
        <p>Коллекция компонентов учебной дизайн-системы</p>
      </header>

      <main>
        {/* Панель глобального переключения Темы и Локали */}
        <section className="component-section">
          <div className="component-header">
            <h2>Глобальные настройки витрины</h2>
            <p className="component-desc">
              Переключение режима темы (&lt;ThemeProvider&gt;) и языка (&lt;LocaleContext&gt;).
            </p>
          </div>

          <div
            style={{
              padding: '24px 32px',
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>Тема:</span>
              <Button
                size="S"
                variant={theme === 'light' ? 'fill' : 'outline'}
                onClick={() => setTheme('light')}
              >
                Светлая (Light)
              </Button>
              <Button
                size="S"
                variant={theme === 'dark' ? 'fill' : 'outline'}
                onClick={() => setTheme('dark')}
              >
                Тёмная (Dark)
              </Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>Локаль:</span>
              <Button
                size="S"
                variant={localeKey === 'ru-RU' ? 'fill' : 'outline'}
                onClick={() => setLocaleKey('ru-RU')}
              >
                ru-RU (Пн)
              </Button>
              <Button
                size="S"
                variant={localeKey === 'en-US' ? 'fill' : 'outline'}
                onClick={() => setLocaleKey('en-US')}
              >
                en-US (Вс)
              </Button>
              <Button
                size="S"
                variant={localeKey === 'ar-EG' ? 'fill' : 'outline'}
                onClick={() => setLocaleKey('ar-EG')}
              >
                ar-EG (Сб, RTL)
              </Button>
            </div>
          </div>
        </section>

        {/* Секция 1: Интерактивный Календарь */}
        <section className="component-section">
          <div className="component-header">
            <h2>&lt;Calendar&gt; Интерактивный календарь</h2>
            <p className="component-desc">
              Выбор даты, листание месяцев, кнопка «Сегодня», поддержка темы и направления текста.
            </p>
          </div>

          <ThemeProvider
            theme={theme}
            style={{
              padding: '32px',
              display: 'flex',
              gap: '40px',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}
          >
            <LocaleContext.Provider value={activeLocale}>
              <div dir={activeLocale.dir}>
                <Calendar value={selectedDate} onValueChange={setSelectedDate} />
              </div>

              <div
                style={{
                  minWidth: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <h3 style={{ margin: 0, fontSize: '16px' }}>Состояние:</h3>
                <p style={{ margin: 0, fontSize: '14px' }}>
                  Выбранное значение:
                  <br />
                  <code style={{ marginTop: '6px' }}>
                    {selectedDate ? selectedDate.toLocaleDateString(activeLocale.locale) : 'null'}
                  </code>
                </p>

                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <Button size="S" variant="outline" onClick={() => setSelectedDate(null)}>
                    Сбросить
                  </Button>
                  <Button size="S" variant="fill" onClick={() => setSelectedDate(new Date())}>
                    Сегодня
                  </Button>
                </div>
              </div>
            </LocaleContext.Provider>
          </ThemeProvider>
        </section>

        {/* Секция 2: 3 Локали одновременно */}
        <section className="component-section">
          <div className="component-header">
            <h2>3 Языковые локали (ru-RU, en-US, ar-EG)</h2>
            <p className="component-desc">
              Демонстрация старта недели (пн / вс / сб), названий месяцев, арабских цифр и RTL-зеркалирования.
            </p>
          </div>

          <ThemeProvider
            theme={theme}
            style={{
              padding: '32px',
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}
          >
            <LocaleContext.Provider value={ruRU}>
              <div dir={ruRU.dir}>
                <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>
                  ru-RU (неделя с пн)
                </div>
                <Calendar value={today} />
              </div>
            </LocaleContext.Provider>

            <LocaleContext.Provider value={enUS}>
              <div dir={enUS.dir}>
                <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>
                  en-US (неделя с вс)
                </div>
                <Calendar value={today} />
              </div>
            </LocaleContext.Provider>

            <LocaleContext.Provider value={arEG}>
              <div dir={arEG.dir}>
                <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>
                  ar-EG (неделя с сб, RTL)
                </div>
                <Calendar value={today} />
              </div>
            </LocaleContext.Provider>
          </ThemeProvider>
        </section>

        {/* Секция 3: Ограничения дат minDate, maxDate, isDateDisabled */}
        <section className="component-section">
          <div className="component-header">
            <h2>Ограничения дат (minDate, maxDate, isDateDisabled)</h2>
            <p className="component-desc">
              Прошедшие даты и даты позже 2-х месяцев заблокированы. Вторники программно отключены через предикат.
            </p>
          </div>

          <ThemeProvider
            theme={theme}
            style={{
              padding: '32px',
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}
          >
            <LocaleContext.Provider value={activeLocale}>
              <div dir={activeLocale.dir}>
                <Calendar
                  value={restrictedDate}
                  onValueChange={setRestrictedDate}
                  minDate={today}
                  maxDate={maxDateLimit}
                  isDateDisabled={(date) => date.getDay() === 2}
                />
              </div>

              <div style={{ maxWidth: '320px', fontSize: '14px', lineHeight: '20px' }}>
                <p>
                  <strong>Правила валидации:</strong>
                </p>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                  <li>minDate: сегодня ({today.toLocaleDateString()})</li>
                  <li>maxDate: +60 дней ({maxDateLimit.toLocaleDateString()})</li>
                  <li>isDateDisabled: все вторники отключены</li>
                </ul>
              </div>
            </LocaleContext.Provider>
          </ThemeProvider>
        </section>

        {/* Секция 4: Таблица состояний дня (Figma) */}
        <section className="component-section">
          <div className="component-header">
            <h2>Состояния дня (Day States из Figma)</h2>
            <p className="component-desc">
              Все визуальные состояния ячейки дня для будней и выходных в текущей теме ({theme}).
            </p>
          </div>

          <ThemeProvider theme={theme} className="table-container">
            <table className="showcase-table">
              <thead>
                <tr>
                  {DAY_STATES_COLUMNS.map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Будний день */}
                <tr>
                  <td className="cell-variant">день</td>
                  <td>
                    <button type="button" className={calendarStyles.dayCell}>
                      17
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.dayHoverState}`}
                    >
                      17
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.dayActiveState}`}
                    >
                      17
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.dayFocusVisibleState}`}
                    >
                      17
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.daySelected}`}
                    >
                      17
                    </button>
                  </td>
                  <td>
                    <button type="button" className={calendarStyles.dayCell}>
                      17
                      <span className={calendarStyles.todayDot} />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.daySelected}`}
                    >
                      17
                      <span
                        className={`${calendarStyles.todayDot} ${calendarStyles.todayDotSelected}`}
                      />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      disabled
                      className={`${calendarStyles.dayCell} ${calendarStyles.dayDisabled}`}
                    >
                      17
                    </button>
                  </td>
                  <td>
                    <div className={calendarStyles.emptyCell} />
                  </td>
                </tr>

                {/* Выходной день */}
                <tr>
                  <td className="cell-variant">выходной</td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.dayWeekend}`}
                    >
                      21
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.dayWeekend} ${calendarStyles.dayHoverState}`}
                    >
                      21
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.dayWeekend} ${calendarStyles.dayActiveState}`}
                    >
                      21
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.dayWeekend} ${calendarStyles.dayFocusVisibleState}`}
                    >
                      21
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.daySelected}`}
                    >
                      21
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.dayWeekend}`}
                    >
                      21
                      <span className={calendarStyles.todayDot} />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${calendarStyles.dayCell} ${calendarStyles.daySelected}`}
                    >
                      21
                      <span
                        className={`${calendarStyles.todayDot} ${calendarStyles.todayDotSelected}`}
                      />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      disabled
                      className={`${calendarStyles.dayCell} ${calendarStyles.dayDisabled}`}
                    >
                      21
                    </button>
                  </td>
                  <td>
                    <div className={calendarStyles.emptyCell} />
                  </td>
                </tr>
              </tbody>
            </table>
          </ThemeProvider>
        </section>

        {/* Секция 5: Демонстрация Button & ThemeOverride */}
        <section className="component-section">
          <div className="component-header">
            <h2>Button Themes &amp; Customization (&lt;ThemeOverride&gt;)</h2>
            <p className="component-desc">
              Демонстрация переопределения токенов через каскадный ThemeOverride (Zero-Runtime CSS Variables).
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              flexWrap: 'wrap',
              padding: '24px 32px',
            }}
          >
            <Button size="S">Обычная кнопка без кастомизаций</Button>

            <ThemeOverride
              tokens={{
                button: {
                  smallPaddingX: '80px',
                },
              }}
            >
              <Button size="S">Подтюненная кнопка</Button>
            </ThemeOverride>

            <ThemeOverride
              tokens={{
                button: {
                  radius: '999px',
                  fillBg: '#e11d48',
                  fillBgHover: '#be123c',
                  fillBgActive: '#9f1239',
                },
              }}
            >
              <Button variant="fill">Pill + Custom Color</Button>
            </ThemeOverride>
          </div>
        </section>

        {/* Секция 6: Button Matrix */}
        <section className="component-section">
          <div className="component-header">
            <h2>Button Matrix</h2>
            <p className="component-desc">
              Используется для инициации действий. Поддерживает полиморфизм (может быть ссылкой).
            </p>
          </div>

          <div className="table-container">
            <table className="showcase-table">
              <thead>
                <tr>
                  <th>variant</th>
                  <th>size</th>
                  <th>default / :hover / :active</th>
                  <th>disabled</th>
                </tr>
              </thead>
              <tbody>
                {BUTTON_VARIANTS.map((variant) =>
                  BUTTON_SIZES.map((size, index) => (
                    <tr key={`${variant}-${size}`}>
                      {index === 0 && (
                        <td rowSpan={BUTTON_SIZES.length} className="cell-variant">
                          {variant}
                        </td>
                      )}

                      <td className="cell-size">{size}</td>

                      <td className="cell-interactive">
                        <Button variant={variant} size={size}>
                          Кнопка
                        </Button>
                      </td>

                      <td className="cell-disabled">
                        <Button variant={variant} size={size} disabled>
                          Кнопка
                        </Button>
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
