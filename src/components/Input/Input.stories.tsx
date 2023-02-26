import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../Button/Button';
import { Input } from './Input';

export default {
    title: 'Components/Inputs/Input',
    component: Input,
    args: {
        label: 'Input',
        placeholder: 'Enter text',
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const InputSizes: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Input label="Input" placeholder="Enter text" scale="s" />
        <Input label="Input" placeholder="Enter text" scale="m" />
    </div>
);

export const InputWithRightElement: React.FC = () => (
    <Input label="Input" placeholder="Enter text" scale="m" elementRight={<Button scale="s">Apply</Button>} />
);
