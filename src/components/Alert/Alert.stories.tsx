import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './index';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    description: 'Description here',
    variant: 'default',
    showDescription: true,
  },
};

export const Brand: Story = {
  args: {
    title: 'Title',
    description: 'Description here',
    variant: 'brand',
    showDescription: true,
  },
};

export const Danger: Story = {
  args: {
    title: 'Title',
    description: 'Description here',
    variant: 'danger',
    showDescription: true,
  },
};

export const Warning: Story = {
  args: {
    title: 'Title',
    description: 'Description here',
    variant: 'warning',
    showDescription: true,
  },
};

export const Success: Story = {
  args: {
    title: 'Title',
    description: 'Description here',
    variant: 'success',
    showDescription: true,
  },
};
