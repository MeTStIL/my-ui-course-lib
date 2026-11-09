import { style, type StyleRule, styleVariants } from '@vanilla-extract/css';
import type { TButtonSize } from './interface';
import { themeVars } from '../../theme';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  border: '1px solid transparent',
  borderRadius: themeVars.button.radius,
  fontFamily: 'inherit',
  fontWeight: 600,
  letterSpacing: '-0.1px',
  cursor: 'pointer',
  textDecoration: 'none',
  userSelect: 'none',
  transition: 'background-color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease',
  outline: 'none',
  lineHeight: '20px',

  selectors: {
    '&:disabled, &[aria-disabled="true"]': {
      opacity: 0.4,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
});

export const sizes = styleVariants<Record<TButtonSize, StyleRule>>({
  S: {
    height: themeVars.button.smallHeight,
    paddingInline: themeVars.button.smallPaddingX,
    fontSize: themeVars.button.smallFontSize,
  },
  M: {
    height: themeVars.button.mediumHeight,
    paddingInline: themeVars.button.mediumPaddingX,
    fontSize: themeVars.button.mediumFontSize,
  },
  L: {
    height: themeVars.button.largeHeight,
    paddingInline: themeVars.button.largePaddingX,
    fontSize: themeVars.button.largeFontSize,
  },
});

export const hasIcon = style({
  paddingInlineStart: '12px',
  paddingInlineEnd: '16px',
  gap: '8px',
});

export const iconWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '16px',
  height: '16px',
});

export const fill = style({
  backgroundColor: themeVars.button.fillBg,
  color: themeVars.button.fillText,

  selectors: {
    '&:hover:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.button.fillBgHover,
    },
    '&:active:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.button.fillBgActive,
    },
  },
});

export const outline = style({
  backgroundColor: themeVars.button.outlineBg,
  borderColor: themeVars.button.outlineBorder,
  color: themeVars.button.outlineText,

  selectors: {
    '&:hover:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.button.outlineBgHover,
    },
    '&:active:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.button.outlineBgActive,
    },
  },
});

export const text = style({
  backgroundColor: themeVars.button.textBg,
  borderColor: 'transparent',
  color: themeVars.button.textText,

  selectors: {
    '&:hover:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.button.textBgHover,
    },
    '&:active:not(:disabled, [aria-disabled="true"])': {
      backgroundColor: themeVars.button.textBgActive,
    },
  },
});
