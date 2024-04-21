import type { Meta, StoryFn } from '@storybook/react';
import {ProgressBar} from './index';
import { ProgressBarProps } from './types';
import { useEffect, useState } from 'react';
import { Button } from '../Button';

const meta = {
  title: 'Components/Progess Bar',
  component: ProgressBar,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;

const Template: StoryFn<ProgressBarProps> = ({
  progress: argProgress,
  ...args
}) => {
  const [progress, setProgress] = useState(argProgress)

  useEffect(() => {
    setProgress(argProgress || 0)
  }, [argProgress])
  
  return (
    <div>
      <ProgressBar variant={args.variant} progress={progress} />
      <Button classNames='my-5' label="Toggle to progress" variant='primary' onClick={() => setProgress(prev => (prev ? 0 : 100))} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Brand = Template.bind({});
Brand.args = {
  variant: 'brand',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};