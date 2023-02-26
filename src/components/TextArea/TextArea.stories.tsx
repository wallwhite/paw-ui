import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from './TextArea';

export default {
    title: 'Components/Inputs/TextArea',
    component: TextArea,
    args: {
        placeholder: 'Enter text',
        label: 'Text Area',
    },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
