import { FC, PropsWithChildren, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ModalPortalProps {
    id: string;
}

export const ModalPortal: FC<PropsWithChildren<ModalPortalProps>> = ({ id, children }) => {
    const [root, setRoot] = useState<HTMLElement | null>(null);
    const isCustomCreatedRef = useRef(false);

    const createRootElement = (): HTMLDivElement => {
        const rootElement = document.createElement('div');
        rootElement.setAttribute('id', id);
        document.body.appendChild(rootElement);
        isCustomCreatedRef.current = true;
        return rootElement;
    };

    useLayoutEffect(() => {
        const rootElement = document.getElementById(id) || createRootElement();

        setRoot(rootElement);

        return () => {
            if (isCustomCreatedRef.current && rootElement.parentNode) {
                document.body.removeChild(rootElement);
            }
        };
    }, [id]);

    if (!root) return null;

    return createPortal(children, root);
};
