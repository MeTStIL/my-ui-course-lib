import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const themeVars = createThemeContract({
  buttonFillBg: null,
  buttonFillBgHover: null,
  buttonFillBgActive: null,
  buttonFillText: null,

  buttonOutlineBg: null,
  buttonOutlineBgHover: null,
  buttonOutlineBgActive: null,
  buttonOutlineBorder: null,
  buttonOutlineText: null,

  buttonTextBg: null,
  buttonTextBgHover: null,
  buttonTextBgActive: null,
  buttonTextText: null,

  buttonRadius: null,

  buttonSmallPaddingX: null,
  buttonSmallHeight: null,
  buttonSmallFontSize: null,

  buttonMediumPaddingX: null,
  buttonMediumHeight: null,
  buttonMediumFontSize: null,

  buttonLargePaddingX: null,
  buttonLargeHeight: null,
  buttonLargeFontSize: null,
});

export const defaultThemeClass = createTheme(themeVars, {
  buttonFillBg: '#17171b',
  buttonFillBgHover: '#2d2d33',
  buttonFillBgActive: '#050506',
  buttonFillText: '#ffffff',

  buttonOutlineBg: '#fcfcfd',
  buttonOutlineBgHover: '#f4f4f5',
  buttonOutlineBgActive: '#e7e7ea',
  buttonOutlineBorder: '#17171b',
  buttonOutlineText: '#17171b',

  buttonTextBg: 'transparent',
  buttonTextBgHover: '#f4f4f5',
  buttonTextBgActive: '#e7e7ea',
  buttonTextText: '#17171b',

  buttonRadius: '10px',

  buttonSmallPaddingX: '16px',
  buttonSmallHeight: '36px',
  buttonSmallFontSize: '14px',

  buttonMediumPaddingX: '20px',
  buttonMediumHeight: '44px',
  buttonMediumFontSize: '15px',

  buttonLargePaddingX: '24px',
  buttonLargeHeight: '52px',
  buttonLargeFontSize: '16px',
});
