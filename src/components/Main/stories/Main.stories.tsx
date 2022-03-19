import { Main } from '../Main';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Main',
	component: Main,
} as ComponentMeta<typeof Main>;

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />;
