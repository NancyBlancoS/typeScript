import type { Meta, StoryObj, } from '@storybook/react';

import { DisplayInput } from '../../quiz-1';

const meta = {
    title: 'DisplayInput',
    component : DisplayInput
} satisfies Meta<typeof DisplayInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        input : { id: 1, name: 'Example Object' }
    }
};
