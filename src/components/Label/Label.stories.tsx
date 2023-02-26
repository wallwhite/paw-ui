import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Label } from './Label';

export default {
    title: 'Components/Inputs/Label',
    component: Label,
    args: {
        label: 'Label',
    },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
    <Label {...args}>
        <input type="text" placeholder="Enter text" />
    </Label>
);

export const Default = Template.bind({});
