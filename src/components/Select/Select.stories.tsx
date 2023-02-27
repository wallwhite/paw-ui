import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'Components/Inputs/Select',
    component: Select,
    args: {
        label: 'Select',
        placeholder: 'Select an option',
        children: [
            <option key={1}>Select some value</option>,
            <option key={2} value="option1">
                Option 1
            </option>,
            <option key={3} value="option2">
                Option 2
            </option>,
            <option key={4} value="option3">
                Option 3
            </option>,
        ],
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

export const SelectSizes: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Select label="Select" placeholder="Select an option" scale="s">
            <option>Select some value</option>
        </Select>
        <Select label="Select" placeholder="Select an option" scale="m">
            <option>Select some value</option>
        </Select>
    </div>
);

export const SelectWithLeftElement: React.FC = () => (
    <Select
        label="Select"
        placeholder="Select an option"
        scale="m"
        elementLeft={<span style={{ background: 'red' }}>Left</span>}
    >
        <option>Select some value</option>
    </Select>
);
