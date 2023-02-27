import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';
import { Label } from '../Label/Label';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    scale?: 's' | 'm';
    type?: Exclude<InputHTMLAttributes<HTMLInputElement>['type'], 'checkbox' | 'radio'>;
    label?: ReactNode;
    elementRight?: ReactNode;
    wide?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { scale, label, elementRight, wide, className, ...restProps } = props;

    const classNames = cx(styles.inputWrapper, className, {
        [styles[`scale-${scale}`]]: scale,
        [styles.withElementRight]: !!elementRight,
    });

    return (
        <Label label={label} wide={wide}>
            <span className={classNames}>
                <input className={styles.input} ref={ref} {...restProps} />
                {elementRight && <span>{elementRight}</span>}
            </span>
        </Label>
    );
});

Input.displayName = 'Input';

Input.defaultProps = {
    scale: 'm',
    type: 'text',
    label: null,
    elementRight: null,
    wide: true,
};
