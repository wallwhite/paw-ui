import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'clsx';
import styles from './Heading.module.scss';

export type HeadingVariant = 'h1' | 'h2' | 'h3';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    variant?: HeadingVariant;
    visualVariant?: HeadingVariant;
}

export const Heading = forwardRef<HTMLHeadingElement, PropsWithChildren<HeadingProps>>((props, ref) => {
    const { variant: Element = 'h1', visualVariant, children, className, ...restProps } = props;

    const currentVariant = visualVariant || Element;
    const classNames = cx(className, styles.heading, {
        [styles[`variant-${currentVariant}`]]: currentVariant,
    });

    return (
        <Element ref={ref} className={classNames} {...restProps}>
            {children}
        </Element>
    );
});

Heading.displayName = 'Heading';

Heading.defaultProps = {
    variant: 'h1',
    visualVariant: undefined,
    className: '',
};
