import { ComponentStory } from '@storybook/react';
import { Text } from './Text';

export default {
    title: 'Components/Typography/Text',
    component: Text,
    argTypes: {
        scale: {
            type: 'union',
            defaultValue: 'm',
            options: ['s', 'm', 'l'],
        },
        type: {
            type: 'union',
            defaultValue: 'body',
            options: ['button', 'body'],
        },
        weight: {
            type: 'union',
            defaultValue: 'regular',
            options: ['regular', 'bold'],
        },
    },
    args: {
        children: 'Demo text',
    },
};

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

export const ButtonTexts: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Text scale="s" type="button">
            Button text
        </Text>
        <Text scale="m" type="button">
            Button text
        </Text>
        <Text scale="l" type="button">
            Button text
        </Text>
    </div>
);

export const BodyTexts: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Text scale="s" type="body">
            Button text
        </Text>
        <Text scale="s" type="body" weight="bold">
            Button text
        </Text>
        <Text scale="m" type="body">
            Button text
        </Text>
        <Text scale="m" type="body" weight="bold">
            Button text
        </Text>
        <Text scale="l" type="body">
            Button text
        </Text>
        <Text scale="l" type="body" weight="bold">
            Button text
        </Text>
    </div>
);
