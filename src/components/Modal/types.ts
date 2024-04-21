import { MouseEventHandler, ReactNode } from "react"
import { ButtonProps } from "../Button/types"

export interface ModalProps {
  title: string
  descripton?: string
  open?: boolean
  onClose: MouseEventHandler<HTMLButtonElement>
  primaryActionProps?: Partial<ButtonProps>
  secondaryActionProps?: Partial<ButtonProps>
  negativeActionProps?: Partial<ButtonProps>
  primaryAction?: MouseEventHandler<HTMLButtonElement>
  secondaryAction?: MouseEventHandler<HTMLButtonElement>
  negativeAction?: MouseEventHandler<HTMLButtonElement>
  primaryActionLabel?: string
  secondaryActionLabel?: string
  negativeActionLabel?: string
  isMobile?: boolean
  children?: ReactNode
}