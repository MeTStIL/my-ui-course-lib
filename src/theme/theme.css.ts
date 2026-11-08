import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

export const themeVars = createThemeContract({
  button: {
    fillBg: null,
    fillBgHover: null,
    fillBgActive: null,
    fillText: null,

    outlineBg: null,
    outlineBgHover: null,
    outlineBgActive: null,
    outlineBorder: null,
    outlineText: null,

    textBg: null,
    textBgHover: null,
    textBgActive: null,
    textText: null,

    radius: null,

    smallPaddingX: null,
    smallHeight: null,
    smallFontSize: null,

    mediumPaddingX: null,
    mediumHeight: null,
    mediumFontSize: null,

    largePaddingX: null,
    largeHeight: null,
    largeFontSize: null,
  },
  calendar: {
    bg: null,
    border: null,
    radius: null,
    padding: null,

    headerText: null,
    weekdayText: null,
    weekendText: null,
    divider: null,

    dayRadius: null,
    dayText: null,
    dayHoverBg: null,
    dayActiveBg: null,
    daySelectedBg: null,
    daySelectedText: null,
    dayBorderFocus: null,
    dayDisabledText: null,

    todayDot: null,
    todaySelectedDot: null,

    navButtonBg: null,
    navButtonBorder: null,
    navButtonHoverBg: null,
    navButtonActiveBg: null,
    navButtonIcon: null,

    footerText: null,
  },
});

const lightTokens = {
  button: {
    fillBg: '#17171b',
    fillBgHover: '#2d2d33',
    fillBgActive: '#050506',
    fillText: '#ffffff',

    outlineBg: '#fcfcfd',
    outlineBgHover: '#f4f4f5',
    outlineBgActive: '#e7e7ea',
    outlineBorder: '#17171b',
    outlineText: '#17171b',

    textBg: 'transparent',
    textBgHover: '#f4f4f5',
    textBgActive: '#e7e7ea',
    textText: '#17171b',

    radius: '10px',

    smallPaddingX: '16px',
    smallHeight: '36px',
    smallFontSize: '14px',

    mediumPaddingX: '20px',
    mediumHeight: '44px',
    mediumFontSize: '15px',

    largePaddingX: '24px',
    largeHeight: '52px',
    largeFontSize: '16px',
  },
  calendar: {
    bg: '#ffffff',
    border: '#e4e4e7',
    radius: '12px',
    padding: '16px',

    headerText: '#18181b',
    weekdayText: '#8e8e93',
    weekendText: '#a1a1aa',
    divider: '#e4e4e7',

    dayRadius: '8px',
    dayText: '#18181b',
    dayHoverBg: '#f4f4f5',
    dayActiveBg: '#e4e4e7',
    daySelectedBg: '#18181b',
    daySelectedText: '#ffffff',
    dayBorderFocus: '#18181b',
    dayDisabledText: '#d4d4d8',

    todayDot: '#18181b',
    todaySelectedDot: '#ffffff',

    navButtonBg: '#ffffff',
    navButtonBorder: '#18181b',
    navButtonHoverBg: '#f4f4f5',
    navButtonActiveBg: '#e4e4e7',
    navButtonIcon: '#18181b',

    footerText: '#8e8e93',
  },
};

const darkTokens = {
  button: {
    fillBg: '#ffffff',
    fillBgHover: '#e4e4e7',
    fillBgActive: '#d4d4d8',
    fillText: '#18181b',

    outlineBg: '#18181b',
    outlineBgHover: '#27272a',
    outlineBgActive: '#3f3f46',
    outlineBorder: '#3f3f46',
    outlineText: '#ffffff',

    textBg: 'transparent',
    textBgHover: '#27272a',
    textBgActive: '#3f3f46',
    textText: '#ffffff',

    radius: '10px',

    smallPaddingX: '16px',
    smallHeight: '36px',
    smallFontSize: '14px',

    mediumPaddingX: '20px',
    mediumHeight: '44px',
    mediumFontSize: '15px',

    largePaddingX: '24px',
    largeHeight: '52px',
    largeFontSize: '16px',
  },
  calendar: {
    bg: '#18181b',
    border: '#27272a',
    radius: '12px',
    padding: '16px',

    headerText: '#ffffff',
    weekdayText: '#71717a',
    weekendText: '#71717a',
    divider: '#27272a',

    dayRadius: '8px',
    dayText: '#ffffff',
    dayHoverBg: '#27272a',
    dayActiveBg: '#3f3f46',
    daySelectedBg: '#ffffff',
    daySelectedText: '#18181b',
    dayBorderFocus: '#ffffff',
    dayDisabledText: '#3f3f46',

    todayDot: '#ffffff',
    todaySelectedDot: '#18181b',

    navButtonBg: '#18181b',
    navButtonBorder: '#3f3f46',
    navButtonHoverBg: '#27272a',
    navButtonActiveBg: '#3f3f46',
    navButtonIcon: '#ffffff',

    footerText: '#71717a',
  },
};

createGlobalTheme(':root, [data-theme="light"]', themeVars, lightTokens);
createGlobalTheme('[data-theme="dark"]', themeVars, darkTokens);

export const defaultThemeClass = '';
