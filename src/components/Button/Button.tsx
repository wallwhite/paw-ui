import { forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import cx from 'clsx';
import styles from './Button.module.scss';
import { Text } from '../Text';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    color?: 'primary' | 'secondary';
    scale?: 's' | 'm';
    variant?: 'default' | 'icon';
    wide?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>((props, ref) => {
    const { color, scale, variant, wide, leftIcon, rightIcon, className, children, ...restProps } = props;
    const classNames = cx(className, styles.button, {
        [styles[`color-${color}`]]: color,
        [styles[`scale-${scale}`]]: scale,
        [styles[`variant-${variant}`]]: variant,
        [styles.wide]: wide,
    });

    const isShowLeftIcon = leftIcon && variant !== 'icon';
    const isShowRightIcon = rightIcon && variant !== 'icon';

    return (
        <button className={classNames} ref={ref} {...restProps}>
            {isShowLeftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
            <Text scale={scale} type="button">
                {children}
            </Text>
            {isShowRightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        </button>
    );
});

Button.displayName = 'Button';

Button.defaultProps = {
    type: 'button',
    scale: 'm',
    color: 'primary',
    variant: 'default',
    wide: false,
    disabled: false,
    leftIcon: null,
    rightIcon: null,
};
