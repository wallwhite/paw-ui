import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FC, PropsWithChildren } from 'react';
import { Card } from './Card';

const CardBodyDemo: FC<PropsWithChildren> = ({ children }) => (
    <div
        style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#CCC',
            padding: 32,
        }}
    >
        {children}
    </div>
);

export default {
    title: 'Components/Layout/Card',
    component: Card,
    args: {
        children: <CardBodyDemo>Card content</CardBodyDemo>,
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

export const CardSizes: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Card>
            <CardBodyDemo>Fit content card</CardBodyDemo>
        </Card>
        <Card wide>
            <CardBodyDemo>Wide card</CardBodyDemo>
        </Card>
    </div>
);
