import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
    title: 'Components/Inputs/Checkbox',
    component: Checkbox,
    args: {
        children: 'Checkbox',
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const CheckboxStatesWithoutLabel: React.FC = () => (
    <div style={{ display: 'flex', gap: 16 }}>
        <Checkbox />
        <Checkbox checked />
        <Checkbox disabled />
        <Checkbox checked disabled />
    </div>
);

export const CheckboxStates: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Checkbox>Checkbox</Checkbox>
        <Checkbox checked>Checkbox</Checkbox>
        <Checkbox disabled>Checkbox</Checkbox>
        <Checkbox checked disabled>
            Checkbox
        </Checkbox>
    </div>
);
