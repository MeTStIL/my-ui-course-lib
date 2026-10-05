import type { ComponentPropsWithRef } from 'react';

export type TButtonVariant = 'fill' | 'outline' | 'text';
export type TButtonSize = 'S' | 'M' | 'L';

export interface IButtonProps extends ComponentPropsWithRef<'button'> {
  title: string;
  variant?: TButtonVariant;
  size?: TButtonSize;
}
