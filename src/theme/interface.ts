import type { ComponentPropsWithRef, ReactNode } from 'react';

export type TThemeMode = 'light' | 'dark';

export type TAllowedThemeContextTags = 'div' | 'span';

export type TButtonTokens = {
  fillBg: string;
  fillBgHover: string;
  fillBgActive: string;
  fillText: string;

  outlineBg: string;
  outlineBgHover: string;
  outlineBgActive: string;
  outlineBorder: string;
  outlineText: string;

  textBg: string;
  textBgHover: string;
  textBgActive: string;
  textText: string;

  radius: string;

  smallPaddingX: string;
  smallHeight: string;
  smallFontSize: string;

  mediumPaddingX: string;
  mediumHeight: string;
  mediumFontSize: string;

  largePaddingX: string;
  largeHeight: string;
  largeFontSize: string;
};

export type TCalendarTokens = {
  bg: string;
  border: string;
  radius: string;
  padding: string;

  headerText: string;
  weekdayText: string;
  weekendText: string;
  divider: string;

  dayRadius: string;
  dayText: string;
  dayHoverBg: string;
  dayActiveBg: string;
  daySelectedBg: string;
  daySelectedText: string;
  dayBorderFocus: string;
  dayDisabledText: string;

  todayDot: string;
  todaySelectedDot: string;

  navButtonBg: string;
  navButtonBorder: string;
  navButtonHoverBg: string;
  navButtonActiveBg: string;
  navButtonIcon: string;

  footerText: string;
};

export type TThemeTokens = {
  button?: Partial<TButtonTokens>;
  calendar?: Partial<TCalendarTokens>;
};

export type TThemeProviderProps<T extends TAllowedThemeContextTags = 'div'> = ComponentPropsWithRef<T> & {
  /**
   * Режим темы: 'light' или 'dark'.
   * @default light
   */
  theme?: TThemeMode;

  /**
   * HTML-тег для рендера обертки темы.
   * @default div
   */
  as?: T;

  /**
   * Дочерние элементы.
   */
  children?: ReactNode;
};

export type TThemeContextProps<T extends TAllowedThemeContextTags = 'div'> = ComponentPropsWithRef<T> & {
  /**
   * HTML-тег для рендера обертки темы.
   * @default div
   */
  as?: T;

  /**
   * Словарь переопределяемых токенов.
   */
  tokens?: TThemeTokens;

  /**
   * Дочерние элементы.
   */
  children?: ReactNode;
};
