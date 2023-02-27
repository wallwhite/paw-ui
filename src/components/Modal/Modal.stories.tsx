import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FC, useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from './Modal';
import { ModalActions } from './ModalActions';
import { ModalBody } from './ModalBody';

export default {
    title: 'Components/Overlays/Modal',
    component: Modal,
    args: {
        children: <div>Modal content</div>,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const [isOpen, setIsOpen] = useState(Boolean(args?.isOpen));

    const openModal = (): void => setIsOpen(true);

    const closeModal = (): void => setIsOpen(false);

    return (
        <>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} onClose={closeModal} />
        </>
    );
};

export const Default = Template.bind({});

export const ModalWithBodyAndActions: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (): void => setIsOpen(true);

    const closeModal = (): void => setIsOpen(false);

    return (
        <>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalBody>
                    <p style={{ width: '500px' }}>Modal content</p>
                </ModalBody>
                <ModalActions>
                    <Button onClick={closeModal} color="secondary">
                        Close
                    </Button>
                    <Button onClick={closeModal}>Save</Button>
                </ModalActions>
            </Modal>
        </>
    );
};
