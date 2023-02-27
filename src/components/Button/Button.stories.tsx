import { ComponentStory } from '@storybook/react';
import { FC } from 'react';
import { Button } from './Button';

export default {
    title: 'Components/Actions/Button',
    component: Button,
    args: {
        children: 'Button',
    },
    argTypes: {
        color: {
            type: 'union',
            options: ['primary', 'secondary'],
        },
        scale: {
            type: 'union',
            options: ['s', 'm'],
        },
        variant: {
            type: 'union',
            options: ['default', 'icon'],
        },
        wide: {
            type: 'boolean',
            defaultValue: false,
        },
        disabled: {
            type: 'boolean',
            defaultValue: false,
        },
        onClick: {
            action: 'onClick',
        },
    },
};

const Icon: FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            fill="currentColor"
        />
        <path
            d="M11 7C11 6.45 11.45 6 12 6C12.55 6 13 6.45 13 7V11H17C17.55 11 18 11.45 18 12C18 12.55 17.55 13 17 13H13V17C13 17.55 12.55 18 12 18C11.45 18 11 17.55 11 17V13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11H11V7Z"
            fill="currentColor"
        />
    </svg>
);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const SizesAndColors: React.FC = () => (
    <>
        <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
            <Button scale="s">Primary S</Button>
            <Button scale="m">Primary M</Button>
        </div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
            <Button color="secondary" scale="s">
                Secondary S
            </Button>
            <Button color="secondary" scale="m">
                Secondary M
            </Button>
        </div>
        <div style={{ display: 'flex', gap: 16, background: '#ccc', padding: 16 }}>
            <Button scale="s" disabled>
                Secondary S
            </Button>
            <Button scale="m" disabled>
                Secondary M
            </Button>
        </div>
    </>
);

export const Variants: React.FC = () => (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            <Button scale="s" variant="default">
                Default S
            </Button>
            <Button scale="m" variant="default">
                Default M
            </Button>
            <Button scale="s" variant="icon">
                <Icon />
            </Button>
            <Button scale="m" variant="icon">
                <Icon />
            </Button>
        </div>
    </>
);

export const Wide: React.FC = () => (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            <Button scale="s" wide>
                Wide S
            </Button>
            <Button scale="m" wide>
                Wide M
            </Button>
        </div>
    </>
);

export const WithIcon: React.FC = () => (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            <Button scale="s" leftIcon={<Icon />}>
                Icon Left S
            </Button>
            <Button scale="m" leftIcon={<Icon />}>
                Icon Left M
            </Button>
            <Button scale="s" rightIcon={<Icon />}>
                Icon Right S
            </Button>
            <Button scale="m" rightIcon={<Icon />}>
                Icon Right M
            </Button>
        </div>
    </>
);
