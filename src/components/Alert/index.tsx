import { FunctionComponent } from "react";
import { AlertProps } from "./types";
import { variantDict } from "./utils";
import { cn } from "../../helpers/cn";

export const Alert: FunctionComponent<AlertProps> = ({ title, icon
, description, variant }) => {

  const variantStyles = variantDict(variant);
  return (
    <div id="jarvis-ui_alert" className={cn(`${variantStyles.bg, variantStyles.border} rounded-sm border-1`)}>
      {icon && <span>{icon}</span>}
      <div>
        <h3 className={cn(`${variantStyles.label} text-6`)}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}