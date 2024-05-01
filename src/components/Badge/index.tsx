import { FunctionComponent } from 'react';
import { BadgeProps } from './types';
import { variantDict } from './utils';
import { cn } from '../../utils/cn';

export const Badge: FunctionComponent<BadgeProps> = ({
  label,
  variant = 'default',
  icon,
  showIcon,
}) => {
  const variantClasses = variantDict(variant);

  return (
    <div
      className={cn(
        variantClasses,
        'h-6 min-w-fit max-w-fit p-2 flex justify-center content-center flex-wrap rounded-full',
      )}
    >
      {showIcon && <span>{icon}</span>}
      <span className="text-neutral-0 font-medium">{label}</span>
    </div>
  );
};
