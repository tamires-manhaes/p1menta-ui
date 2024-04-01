import { FunctionComponent } from 'react';
import { ButtonProps } from './types';
import { cn } from '../../helpers/cn';
import { variantDict } from './utils';

export const Button: FunctionComponent<ButtonProps> = ({
  startIcon,
  endIcon,
  disabled,
  variant: variantProp = 'primary',
  label,
  onClick,
  fullWidth,
  classNames,
}) => {
  const variantStyles = variantDict(variantProp);

  return (
    <button
      id="jarvis_button"
      onClick={onClick}
      className={cn(
        classNames,
        `${variantStyles.bg} ${variantStyles.border} ${disabled ? variantStyles.disabled + 'pointer-events-none cursor-default hover:none bg-neutral-500' : ''} ${fullWidth ? 'w-auto' : ''} hover:opacity-hover active:bg-brand-700 px-4 py-2 rounded-default transition-all`,
      )}
    >
      {startIcon && (
        <span
          className="jarvis-button__icon jarvis-button__startIcon"
          data-testid="startIcon"
        >
          {startIcon}
        </span>
      )}
      <span className={cn(classNames, `text-4 ${variantStyles.label}`)}>
        {label}
      </span>
      {endIcon && (
        <span
          className="jarvis-button__icon jarvis-button__endIcon"
          data-testid="endIcon"
        >
          {endIcon}
        </span>
      )}
    </button>
  );
};
