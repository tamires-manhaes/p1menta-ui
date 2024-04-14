import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    onClick: () => console.log('clicked!'),
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
    onClick: () => console.log('clicked!'),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'primary',
    onClick: () => console.log('clicked!'),
    disabled: true,
  },
};

export const Link: Story = {
  args: {
    label: 'Link',
    variant: 'link',
    onClick: () => console.log('clicked!'),
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger',
    variant: 'danger',
    onClick: () => console.log('clicked!'),
    disabled: false,
  },
};
