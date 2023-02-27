import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './Icon';
import {
    SearchIcon,
    BuffaloIcon,
    CatIcon,
    ChickenIcon,
    CloseIcon,
    DuckIcon,
    FilterIcon,
    HorseIcon,
    PeacockIcon,
    PigIcon,
    LogoIcon,
} from '.';

export default {
    title: 'Components/Icons',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
    <>
        <div style={{ marginBottom: 32 }}>
            <LogoIcon />
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <SearchIcon {...args} />
            <FilterIcon {...args} />
            <CloseIcon {...args} />
            <BuffaloIcon {...args} />
            <CatIcon {...args} />
            <ChickenIcon {...args} />
            <DuckIcon {...args} />
            <HorseIcon {...args} />
            <PeacockIcon {...args} />
            <PigIcon {...args} />
        </div>
    </>
);

export const Default = Template.bind({});
