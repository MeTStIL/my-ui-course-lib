import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { ElementType, ReactElement } from 'react';
import type { TAllowedThemeContextTags, TThemeContextProps } from './interface';
import { themeVars } from './theme.css';

export const ThemeContext = <T extends TAllowedThemeContextTags = 'div'>({
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

ThemeContext.displayName = 'ThemeContext';
