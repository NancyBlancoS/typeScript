import React from 'react';

import type { Meta, StoryObj, } from '@storybook/react';

import { OptionalMessage } from '../../quiz-1';

const meta = {
    title: 'OptionalMessage',
    component : OptionalMessage
} satisfies Meta<typeof OptionalMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Message: Story = {
    args: {
        message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    }
};

export const NoMessage: Story = {
    args: {
        
    }
};
