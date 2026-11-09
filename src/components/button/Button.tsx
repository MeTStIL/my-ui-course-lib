import clsx from 'clsx';
import type { ElementType, ReactElement } from 'react';
import type { TAllowedButtonTags, TButtonProps, TButtonVariant } from './interface';
import * as styles from './Button.css';

const BUTTON_VARIANT_MAP: Record<TButtonVariant, string> = {
  fill: styles.fill,
  outline: styles.outline,
  text: styles.text,
};

export const Button = <T extends TAllowedButtonTags = 'button'>({
  as,
  variant = 'outline',
  size = 'M',
  className,
  disabled,
  icon,
  children,
  ...otherProps
}: TButtonProps<T>): ReactElement => {
  const Tag = (as ?? 'button') as ElementType;

  return (
    <Tag
      className={clsx(
        styles.root,
        styles.sizes[size],
        BUTTON_VARIANT_MAP[variant],
        Boolean(icon) && styles.hasIcon,
        className,
      )}
      disabled={disabled}
      aria-disabled={disabled}
      {...otherProps}
    >
      {icon ? <span className={styles.iconWrapper}>{icon}</span> : null}
      {children}
    </Tag>
  );
};

Button.displayName = 'Button';
