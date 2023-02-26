import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './Heading';

export default {
    title: 'Components/Typography/Heading',
    component: Heading,
    argTypes: {
        variant: {
            name: 'variant',
            defaultValue: 'h1',
            type: { name: 'enum', required: false, value: ['h1', 'h2', 'h3'] },
        },
        visualVariant: {
            name: 'variant',
            defaultValue: 'h1',
            type: { name: 'enum', required: false, value: ['h1', 'h2', 'h3'] },
        },
    },
    args: {
        children: 'Heading',
    },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});

export const Variants: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Heading variant="h1">Heading h1</Heading>
        <Heading variant="h2">Heading h2</Heading>
        <Heading variant="h3">Heading h3</Heading>
    </div>
);

export const VisualVariants: React.FC = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Heading variant="h1" visualVariant="h3">
            Heading h1
        </Heading>
        <Heading variant="h2" visualVariant="h2">
            Heading h2
        </Heading>
        <Heading variant="h3" visualVariant="h1">
            Heading h3
        </Heading>
    </div>
);
