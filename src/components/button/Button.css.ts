import { style } from '@vanilla-extract/css';
import { themeVars } from '../../theme';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  border: '1px solid transparent',
  borderRadius: themeVars.buttonRadius,
  fontFamily: 'inherit',
  fontWeight: 600,
  letterSpacing: '-0.1px',
  cursor: 'pointer',
  textDecoration: 'none',
  userSelect: 'none',
  transition: 'background-color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease',
  outline: 'none',
  minWidth: '140px',
  lineHeight: '20px',

  selectors: {
    '&:disabled, &[aria-disabled="true"]': {
      opacity: 0.4,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
});

export const sizeS = style({
  height: themeVars.buttonSmallHeight,
  paddingLeft: themeVars.buttonSmallPaddingX,
  paddingRight: themeVars.buttonSmallPaddingX,
  fontSize: themeVars.buttonSmallFontSize,
});

export const sizeM = style({
  height: themeVars.buttonMediumHeight,
  paddingLeft: themeVars.buttonMediumPaddingX,
  paddingRight: themeVars.buttonMediumPaddingX,
  fontSize: themeVars.buttonMediumFontSize,
});

export const sizeL = style({
  height: themeVars.buttonLargeHeight,
  paddingLeft: themeVars.buttonLargePaddingX,
  paddingRight: themeVars.buttonLargePaddingX,
  fontSize: themeVars.buttonLargeFontSize,
});

export const fill = style({
  backgroundColor: themeVars.buttonFillBg,
  color: themeVars.buttonFillText,

  selectors: {
    '&:hover:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.buttonFillBgHover,
    },
    '&:active:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.buttonFillBgActive,
    },
  },
});

export const outline = style({
  backgroundColor: themeVars.buttonOutlineBg,
  borderColor: themeVars.buttonOutlineBorder,
  color: themeVars.buttonOutlineText,

  selectors: {
    '&:hover:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.buttonOutlineBgHover,
    },
    '&:active:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.buttonOutlineBgActive,
    },
  },
});

export const text = style({
  backgroundColor: themeVars.buttonTextBg,
  borderColor: 'transparent',
  color: themeVars.buttonTextText,

  selectors: {
    '&:hover:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.buttonTextBgHover,
    },
    '&:active:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.buttonTextBgActive,
    },
  },
});
