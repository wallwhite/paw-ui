import { forwardRef, InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import cx from 'clsx';
import { Label } from '../Label/Label';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: ReactNode;
    wide?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>((props, ref) => {
    const { label, className, children, wide, ...restProps } = props;

    const classNames = cx(styles.checkbox, className);

    return (
        <Label label={label} wide={wide}>
            <span className={classNames}>
                <input type="checkbox" ref={ref} {...restProps} />
                <span className={styles.marker} />
                {children && <span className={styles.content}>{children}</span>}
            </span>
        </Label>
    );
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
    label: null,
    wide: false,
};
