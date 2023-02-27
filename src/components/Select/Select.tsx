import { forwardRef, PropsWithChildren, ReactNode, SelectHTMLAttributes } from 'react';
import cx from 'clsx';
import { Label } from '../Label/Label';
import styles from './Select.module.scss';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: ReactNode;
    wide?: boolean;
    scale?: 's' | 'm';
    elementLeft?: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, PropsWithChildren<SelectProps>>((props, ref) => {
    const { children, wide, className, label, scale, elementLeft, ...restProps } = props;

    const classNames = cx(styles.select, className, {
        [styles.wide]: wide,
        [styles.withElementLeft]: elementLeft,
        [styles[`scale-${scale}`]]: scale,
    });

    return (
        <Label label={label} wide={wide}>
            <span className={classNames}>
                {elementLeft && <span className={styles.elementLeft}>{elementLeft}</span>}
                <select ref={ref} {...restProps}>
                    {children}
                </select>
            </span>
        </Label>
    );
});

Select.displayName = 'Select';

Select.defaultProps = {
    label: null,
    wide: true,
    scale: 'm',
    elementLeft: null,
};
