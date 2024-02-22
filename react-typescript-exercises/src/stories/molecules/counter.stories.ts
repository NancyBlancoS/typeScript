import type { Meta, StoryObj } from '@storybook/react';

import {Counter} from '../../quiz-1'

export default {
    title: 'Counter',
    component: Counter,
} as Meta <typeof Counter>;

export const Primary: StoryObj<typeof Counter> ={
};