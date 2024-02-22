import React from 'react';

import type { Meta, StoryObj, } from '@storybook/react';
import { ReadOnly } from '../../quiz-1';

const meta = {
    title: 'ReadOnly',
    component : ReadOnly
} satisfies Meta<typeof ReadOnly>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items : [
            { id: 372810, name: 'Nancy Blanco' },
            { id: 416608, name: 'Sergio Gutierrez' },
            { id: 257702, name: 'Pao Gutierrez' },
        ]
    }
};

