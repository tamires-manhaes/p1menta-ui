import { FunctionComponent } from 'react';
import { AlertProps } from './types';
import { variantDict } from './utils';
import { cn } from '../../utils/cn';

export const Alert: FunctionComponent<AlertProps> = ({
  title,
  icon,
  description,
  variant,
  showDescription,
}) => {
  const variantStyles = variantDict(variant);

  console.log(variantStyles);

  return (
    <div
      id="jarvis-ui_alert"
      className={cn(
        `${(variantStyles.bg, variantStyles.border)} rounded-sm border-1 max-w-[400px]`,
      )}
    >
      {icon && <span>{icon}</span>}
      <div className="p-3">
        <h3 className={`${variantStyles.label} font-semibold text-4`}>
          {title}
        </h3>
        {showDescription && (
          <p className="text-regular text-3">{description}</p>
        )}
      </div>
    </div>
  );
};
