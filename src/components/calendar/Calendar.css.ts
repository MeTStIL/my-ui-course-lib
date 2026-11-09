import { globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from '../../theme';

export const root = style({
  boxSizing: 'border-box',
  width: '286px',
  backgroundColor: themeVars.calendar.bg,
  border: `1px solid ${themeVars.calendar.border}`,
  borderRadius: themeVars.calendar.radius,
  paddingInline: themeVars.calendar.padding,
  paddingBlock: themeVars.calendar.padding,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  userSelect: 'none',
  fontFamily: 'inherit',
  color: themeVars.calendar.dayText,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '36px',
  width: '100%',
});

export const headerTitle = style({
  fontFamily: 'inherit',
  fontSize: '15px',
  fontWeight: 600,
  lineHeight: '18px',
  color: themeVars.calendar.headerText,
});

export const navButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  minWidth: '36px',
  padding: '0',
  borderRadius: themeVars.calendar.dayRadius,
  border: `1px solid ${themeVars.calendar.navButtonBorder}`,
  backgroundColor: themeVars.calendar.navButtonBg,
  color: themeVars.calendar.navButtonIcon,
  cursor: 'pointer',
  outline: 'none',
  transition: 'background-color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease',

  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: themeVars.calendar.navButtonHoverBg,
    },
    '&:active:not(:disabled)': {
      backgroundColor: themeVars.calendar.navButtonActiveBg,
    },
    '&:focus-visible': {
      outline: `2px solid ${themeVars.calendar.headerText}`,
      outlineOffset: '2px',
    },
    '&:disabled': {
      opacity: 0.35,
      cursor: 'not-allowed',
    },
  },
});

// TODO: убрать в компоненту
globalStyle(`[dir="rtl"] ${navButton} svg`, {
  transform: 'scaleX(-1)',
});

export const weekdays = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 36px)',
  height: '28px',
  alignItems: 'center',
  justifyItems: 'center',
});

export const weekdayCell = style({
  fontSize: '11px',
  fontWeight: 500,
  lineHeight: '13px',
  color: themeVars.calendar.weekdayText,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const weeks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const weekRow = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 36px)',
  height: '36px',
  alignItems: 'center',
  justifyItems: 'center',
});

export const emptyCell = style({
  width: '36px',
  height: '36px',
  visibility: 'hidden',
});

export const dayCell = style({
  // TODO: в обдуманную переменную
  width: '36px',
  height: '36px',
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: themeVars.calendar.dayRadius,
  border: '1px solid transparent',
  backgroundColor: 'transparent',
  color: themeVars.calendar.dayText,
  fontFamily: 'inherit',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '17px',
  cursor: 'pointer',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease',

  selectors: {
    '&:hover:not(:disabled, [aria-disabled="true"], [data-selected="true"])': {
      backgroundColor: themeVars.calendar.dayHoverBg,
    },
    '&:active:not(:disabled, [aria-disabled="true"], [data-selected="true"])': {
      backgroundColor: themeVars.calendar.dayActiveBg,
    },
    '&:focus-visible': {
      outline: `2px solid ${themeVars.calendar.dayBorderFocus}`,
      outlineOffset: '-2px',
      borderColor: themeVars.calendar.dayBorderFocus,
    },
  },
});

export const dayWeekend = style({
  color: themeVars.calendar.weekendText,
});

export const dayHoverState = style({
  backgroundColor: themeVars.calendar.dayHoverBg,
});

export const dayActiveState = style({
  backgroundColor: themeVars.calendar.dayActiveBg,
});

export const dayFocusVisibleState = style({
  outline: `2px solid ${themeVars.calendar.dayBorderFocus}`,
  outlineOffset: '-2px',
  borderColor: themeVars.calendar.dayBorderFocus,
});

export const daySelected = style({
  backgroundColor: `${themeVars.calendar.daySelectedBg} !important`,
  color: `${themeVars.calendar.daySelectedText} !important`,
  fontWeight: 600,
});

export const dayDisabled = style({
  color: `${themeVars.calendar.dayDisabledText} !important`,
  cursor: 'not-allowed',
  pointerEvents: 'none',
});

export const todayDot = style({
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  backgroundColor: themeVars.calendar.todayDot,
  position: 'absolute',
  bottom: '4px',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const todayDotSelected = style({
  backgroundColor: themeVars.calendar.todaySelectedDot,
});

export const divider = style({
  height: '1px',
  backgroundColor: themeVars.calendar.divider,
  border: 'none',
  margin: 0,
  width: '100%',
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '36px',
  gap: '8px',
});

export const footerText = style({
  fontSize: '13px',
  lineHeight: '16px',
  color: themeVars.calendar.footerText,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
