import type { ReactElement } from 'react';
import type { TButtonSize, TButtonVariant } from './components';
import { Button } from './components';
import './App.css';

const BUTTON_VARIANTS: Array<TButtonVariant> = ['fill', 'outline', 'text'];
const BUTTON_SIZES: Array<TButtonSize> = ['S', 'M', 'L'];

const App = (): ReactElement => {
  return (
    <div className="showcase-root">
      <header className="showcase-header">
        <h1>MeTStIL Design-system</h1>
      </header>

      <main>
        <section className="component-section">
          <div className="component-header">
            <h2>Button</h2>
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
