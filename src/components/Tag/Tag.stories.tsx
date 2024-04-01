import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './index';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    variant: 'brand',
  },
};
