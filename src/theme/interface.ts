import type { ComponentPropsWithRef, ReactNode } from 'react';

export type TAllowedThemeContextTags = 'div' | 'span';

export type TThemeTokens = {
  /** Цвет фона для варианта fill */
  buttonFillBg?: string;
  /** Цвет фона для варианта fill при :hover */
  buttonFillBgHover?: string;
  /** Цвет фона для варианта fill при :active */
  buttonFillBgActive?: string;
  /** Цвет текста для варианта fill */
  buttonFillText?: string;

  /** Цвет фона для варианта outline */
  buttonOutlineBg?: string;
  /** Цвет фона для варианта outline при :hover */
  buttonOutlineBgHover?: string;
  /** Цвет фона для варианта outline при :active */
  buttonOutlineBgActive?: string;
  /** Цвет рамки для варианта outline */
  buttonOutlineBorder?: string;
  /** Цвет текста для варианта outline */
  buttonOutlineText?: string;

  /** Цвет фона для варианта text */
  buttonTextBg?: string;
  /** Цвет фона для варианта text при :hover */
  buttonTextBgHover?: string;
  /** Цвет фона для варианта text при :active */
  buttonTextBgActive?: string;
  /** Цвет текста для варианта text */
  buttonTextText?: string;

  /** Скругление углов кнопки */
  buttonRadius?: string;

  /** Горизонтальный отступ кнопки размера S */
  buttonSmallPaddingX?: string;
  /** Высота кнопки размера S */
  buttonSmallHeight?: string;
  /** Размер шрифта кнопки размера S */
  buttonSmallFontSize?: string;

  /** Горизонтальный отступ кнопки размера M */
  buttonMediumPaddingX?: string;
  /** Высота кнопки размера M */
  buttonMediumHeight?: string;
  /** Размер шрифта кнопки размера M */
  buttonMediumFontSize?: string;

  /** Горизонтальный отступ кнопки размера L */
  buttonLargePaddingX?: string;
  /** Высота кнопки размера L */
  buttonLargeHeight?: string;
  /** Размер шрифта кнопки размера L */
  buttonLargeFontSize?: string;
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
