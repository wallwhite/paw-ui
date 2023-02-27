import { FC, PropsWithChildren } from 'react';
import cx from 'clsx';
import { ModalPortal } from './ModalPortal';
import styles from './Modal.module.scss';
import { Button } from '../Button/Button';
import { CloseIcon } from '../Icons';

export interface ModalProps {
    title?: string;
    isOpen: boolean;
    customId?: string;
    className?: string;
    onClose: () => void;
}

const DEFAULT_MODAL_ID = 'notes-paw-modal-root';

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ onClose, customId, className, isOpen, children }) => {
    const classNames = cx(styles.modal, className);

    return (
        <ModalPortal id={customId || DEFAULT_MODAL_ID}>
            {isOpen && (
                <div className={styles.overlay}>
                    <div className={classNames}>
                        <div className={styles.header}>
                            <Button
                                scale="s"
                                color="secondary"
                                variant="icon"
                                className={styles.close}
                                onClick={onClose}
                            >
                                <CloseIcon />
                            </Button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </ModalPortal>
    );
};
