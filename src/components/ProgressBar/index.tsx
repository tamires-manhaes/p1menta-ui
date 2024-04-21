import { FunctionComponent } from 'react';
import * as Progress from '@radix-ui/react-progress';
import { ProgressBarProps } from './types';
import { getVariantStyles } from './utils';
import { cn } from '@/utils/cn';

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({ progress, variant }) => {
  const variantStyle = getVariantStyles(variant);

  return (
    <Progress.Root
      className={cn(variantStyle.bg,"relative overflow-hidden rounded-full w-[100%] h-[12px]")}
      style={{
        transform: 'translateZ(0)',
      }}
      value={progress}
    >
      <Progress.Indicator
        className={cn(variantStyle.bar, "w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]")}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};
