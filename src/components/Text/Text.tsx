import { ElementType, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'clsx';
import styles from './Text.module.scss';

interface TextBasicProps extends HTMLAttributes<HTMLElement> {
    type?: 'button' | 'body';
    scale?: 's' | 'm' | 'l';
    wide?: boolean;
    as?: keyof HTMLElementTagNameMap | ElementType;
}

interface TextBodyProps extends TextBasicProps {
    type?: 'body';
    weight?: 'regular' | 'bold';
}

interface TextButtonProps extends TextBasicProps {
    type?: 'button';
    weight?: never;
}

type TextProps = TextBodyProps | TextButtonProps;

export const Text = forwardRef<HTMLElement, PropsWithChildren<TextProps>>((props, ref) => {
    const { type, scale, wide, weight, as: TextElement = 'span', className, children, ...restProps } = props;
    const classNames = cx(className, styles.text, {
        [styles[`type-${type}`]]: type,
        [styles[`scale-${scale}`]]: scale,
        [styles[`weight-${weight}`]]: weight,
        [styles.wide]: wide,
    });

    return (
        <TextElement ref={ref} className={classNames} {...restProps}>
            {children}
        </TextElement>
    );
});

Text.displayName = 'Text';

Text.defaultProps = {
    type: 'body',
    scale: 's',
    wide: false,
    as: 'span',
    weight: 'regular',
};
