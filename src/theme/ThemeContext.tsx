import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { ElementType, ReactElement } from 'react';
import type {
  TAllowedThemeContextTags,
  TThemeContextProps,
  TThemeProviderProps,
} from './interface';
import { ThemeContext } from './context';
import { themeVars } from './theme.css';

export const ThemeProvider = <T extends TAllowedThemeContextTags = 'div'>({
  theme = 'light',
  as,
  children,
  className,
  ...otherProps
}: TThemeProviderProps<T>): ReactElement => {
  const Tag = (as ?? 'div') as ElementType;

  return (
    <ThemeContext.Provider value={theme}>
      <Tag data-theme={theme} className={className} {...otherProps}>
        {children}
      </Tag>
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

export const ThemeOverride = <T extends TAllowedThemeContextTags = 'div'>({
  as,
  tokens = {},
  style,
  children,
  ...otherProps
}: TThemeContextProps<T>): ReactElement => {
  const Tag = (as ?? 'div') as ElementType;

  return (
    <Tag
      style={{
        display: 'contents',
        ...assignInlineVars(themeVars, tokens as never),
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};

ThemeOverride.displayName = 'ThemeOverride';
