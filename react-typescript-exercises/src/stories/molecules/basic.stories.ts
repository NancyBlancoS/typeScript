import React from 'react';

import type { Meta, StoryObj, } from '@storybook/react';
import { TypeScriptBasics } from '../../quiz-1';

export default {
    title: 'TypeScriptBasics',
    component: TypeScriptBasics,
} as Meta <typeof TypeScriptBasics>;

export const Primary: StoryObj<typeof TypeScriptBasics> ={
    args:{
        basics: [
            'Tipado estatico',
            'Functions',
            'Interfaces',
            'Clases',
            'Tipos',
            'Modulos',
        ]
    }
}

