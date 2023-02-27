import { FC, PropsWithChildren } from 'react';
import cx from 'clsx';
import styles from './ModalBody.module.scss';
import { Card } from '../Card/Card';

export interface ModalBody {
    className?: string;
    flexDirection?: 'row' | 'column';
}

export const ModalBody: FC<PropsWithChildren<ModalBody>> = ({ children, className, flexDirection }) => {
    const classNames = cx(styles.body, styles.indentation, className);

    return (
        <Card wide className={classNames} flexDirection={flexDirection}>
            {children}
        </Card>
    );
};
