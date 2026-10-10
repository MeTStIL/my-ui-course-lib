import type { ComponentPropsWithRef } from 'react';

export type TAllowedButtonTags = 'a' | 'button';

export type TButtonVariant = 'fill' | 'outline' | 'text';
export type TButtonSize = 'S' | 'M' | 'L';

export type TButtonProps<T extends TAllowedButtonTags = 'button'> = ComponentPropsWithRef<T> & {
  /**
   * HTML тег или компонент для полиморфного рендеринга.
   * @default button
   */
  as?: T;

  /**
   * Вариант визуального отображения кнопки.
   * @default outline
   */
  variant?: TButtonVariant;

  /**
   * Размер кнопки.
   * @default M
   */
  size?: TButtonSize;

  /**
   * Состояние отключения кнопки.
   */
  disabled?: boolean;
};
