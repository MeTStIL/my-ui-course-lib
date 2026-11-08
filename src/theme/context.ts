import { createContext, useContext } from 'react';
import type { TThemeMode } from './interface';

export const ThemeContext = createContext<TThemeMode>('light');

export const useTheme = (): TThemeMode => useContext(ThemeContext);
