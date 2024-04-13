import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './index';

const meta = {
  title: 'Component/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    description: 'Description here',
    variant: 'default'
  },
};
