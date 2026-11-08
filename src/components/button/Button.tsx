import clsx from 'clsx';
import type { ElementType, ReactElement } from 'react';
import type { TAllowedButtonTags, TButtonProps, TButtonSize, TButtonVariant } from './interface';
import * as styles from './Button.css';

const BUTTON_SIZE_MAP: Record<TButtonSize, string> = {
  S: styles.sizeS,
  M: styles.sizeM,
  L: styles.sizeL,
};

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
        BUTTON_SIZE_MAP[size],
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
