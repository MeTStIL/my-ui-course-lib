import clsx from 'clsx';
import type { ReactElement } from 'react';
import type { TButtonSize, TButtonVariant } from './components';
import { Button } from './components';
import { defaultThemeClass, ThemeContext } from './theme';
import './App.css';

const BUTTON_VARIANTS: Array<TButtonVariant> = ['fill', 'outline', 'text'];
const BUTTON_SIZES: Array<TButtonSize> = ['S', 'M', 'L'];

const App = (): ReactElement => {
  return (
    <div className={clsx('showcase-root', defaultThemeClass)}>
      <header className="showcase-header">
        <h1>MeTStIL Design-system</h1>
      </header>

      <main>
        <section className="component-section">
          <div className="component-header">
            <h2>Button Themes & Customization (&lt;ThemeContext&gt;)</h2>
            <p className="component-desc">
              Демонстрация переопределения токенов через каскадный ThemeContext (Zero-Runtime CSS Variables).
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', padding: '16px 0' }}>
            <Button size="S">Обычная кнопка без кастомизаций</Button>

            <ThemeContext
              tokens={{
                buttonSmallPaddingX: '150px',
              }}
            >
              <Button size="S">Подтюненная кнопка</Button>
            </ThemeContext>

            <ThemeContext
              tokens={{
                buttonRadius: '999px',
                buttonFillBg: '#e11d48',
                buttonFillBgHover: '#be123c',
                buttonFillBgActive: '#9f1239',
              }}
            >
              <Button variant="fill">Pill + Custom Color</Button>
            </ThemeContext>
          </div>
        </section>

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
