import { forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import cx from 'clsx';
import styles from './Label.module.scss';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
    label?: ReactNode;
    className?: string;
    labelClassName?: string;
    htmlFor?: string;
    wide?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, PropsWithChildren<LabelProps>>((props, ref) => {
    const { label, className, labelClassName, htmlFor, children, wide, ...restProps } = props;
    const classNames = cx(styles.label, className, {
        [styles.wide]: wide,
    });
    const labelTextClassNames = cx(styles.labelText, labelClassName);

    return (
        <label htmlFor={htmlFor} className={classNames} ref={ref} {...restProps}>
            {label && <span className={labelTextClassNames}>{label}</span>}
            <span className={styles.labelContent}>{children}</span>
        </label>
    );
});

Label.displayName = 'Label';

Label.defaultProps = {
    label: null,
    className: '',
    labelClassName: '',
    htmlFor: undefined,
    wide: true,
};
