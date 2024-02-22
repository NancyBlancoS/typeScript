import type { Meta, StoryObj } from '@storybook/react';

import {InterfaceProps} from '../../quiz-1';

export default {
    title: 'InterfaceProps',
    component: InterfaceProps,
} as Meta <typeof InterfaceProps>;

export const Primary: StoryObj<typeof InterfaceProps> ={
    args:{
        name: 'Nancy Blanco',
        age: 22,
        hobbies: ['Cooking', 'Reading', 'Drawing'],
    }
};