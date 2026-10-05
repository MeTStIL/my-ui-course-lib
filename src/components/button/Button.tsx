import { memo, type ReactElement } from 'react';
import type { IButtonProps } from './interface';

const Component = ({ title, variant = 'fill', size = 'S', disabled, ...otherProps }: IButtonProps): ReactElement => {
  console.log(title, variant, size, disabled);

  return <button {...otherProps} />;
};

export const Button = memo(Component);

Button.displayName = 'Button';
