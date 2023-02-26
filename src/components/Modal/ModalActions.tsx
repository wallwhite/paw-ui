import { FC, PropsWithChildren } from 'react';
import cx from 'clsx';
import styles from './ModalActions.module.scss';

export interface ModalActions {
    className?: string;
    align?: 'left' | 'center' | 'right' | 'spaced';
}

export const ModalActions: FC<PropsWithChildren<ModalActions>> = ({ className, children, align = 'right' }) => {
    const classNames = cx(styles.actions, className, {
        [styles[`align-${align}`]]: align,
    });

    return <div className={classNames}>{children}</div>;
};
