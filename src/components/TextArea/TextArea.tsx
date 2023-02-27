import { forwardRef, ReactNode, TextareaHTMLAttributes } from 'react';
import cx from 'clsx';
import { Label } from '../Label/Label';
import styles from './TextArea.module.scss';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: ReactNode;
    wide: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const { label, className, wide, ...restProps } = props;
    const classNames = cx(styles.textarea, className);

    return (
        <Label label={label} wide={wide}>
            <textarea ref={ref} className={classNames} {...restProps} />
        </Label>
    );
});

TextArea.displayName = 'TextArea';

TextArea.defaultProps = {
    label: null,
    wide: true,
};
