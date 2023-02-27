import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'clsx';
import styles from './Card.module.scss';

export type CardElement = HTMLElement & HTMLDivElement & HTMLSpanElement & HTMLLIElement;

export interface CardProps extends HTMLAttributes<CardElement> {
    wide?: boolean;
    flexDirection?: 'row' | 'column';
    as?: 'div' | 'span' | 'li' | 'section' | 'article' | 'main' | 'aside';
}

export const Card = forwardRef<CardElement, PropsWithChildren<CardProps>>((props, ref) => {
    const { as: Element = 'div', wide, flexDirection, className, children, ...restProps } = props;

    const classNames = cx(className, styles.card, {
        [styles.wide]: wide,
        [styles[`direction-${flexDirection}`]]: flexDirection,
    });

    return (
        <Element ref={ref} className={classNames} {...restProps}>
            {children}
        </Element>
    );
});

Card.displayName = 'Card';

Card.defaultProps = {
    wide: false,
    flexDirection: 'row',
    as: 'div',
};
