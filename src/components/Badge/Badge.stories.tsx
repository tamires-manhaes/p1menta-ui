import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './index';
import ChevronsRight from '../../assets/chevrons-right.svg';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story icon={ChevronsRight} />
      </div>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultWithIcon: Story = {
  args: {
    label: 'label',
    variant: 'default',
    icon: <ChevronsRight />,
  },
};

console.log(DefaultWithIcon);

export const Default: Story = {
  args: {
    label: 'label',
    variant: 'default',
  },
};

export const Brand: Story = {
  args: {
    label: 'label',
    variant: 'brand',
  },
};

export const Danger: Story = {
  args: {
    label: 'label',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    label: 'label',
    variant: 'warning',
  },
};

export const Success: Story = {
  args: {
    label: 'label',
    variant: 'success',
  },
};
