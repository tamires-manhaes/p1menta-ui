import { FunctionComponent } from 'react';
import { TagProps } from './types';
import { variantDict } from './utils';

export const Tag: FunctionComponent<TagProps> = ({ icon, label, variant }) => {
  const variantStyles = variantDict(variant);

  return (
    <div className={`py-1 px-3 rounded-full w-fit ${variantStyles.bg}`}>
      {icon && <span>{icon}</span>}
      <span className={`${variantStyles.label}`}>{label}</span>
    </div>
  );
};
