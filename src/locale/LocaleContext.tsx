import { createContext, useContext } from 'react';
import type { TLocale } from './interface';
import { ruRU } from './locales';

export const LocaleContext = createContext<TLocale>(ruRU);

export const useLocale = (): TLocale => useContext(LocaleContext);
