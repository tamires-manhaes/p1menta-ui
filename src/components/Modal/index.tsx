import { forwardRef, FunctionComponent, HTMLAttributes, useMemo } from "react"
import { ModalProps } from "./types"
import useWidth from "./utils"
import { isBool, cn } from "@/utils"
import { Cross1Icon } from '@radix-ui/react-icons'
import { Button } from "../Button"

const CardPrimitive = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-neutral-0 text-card-foreground shadow-sm p-6",
      className
    )}
    {...props}
  />
))
CardPrimitive.displayName = "Card"

const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row justify-between space-y-1.5 py-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-semibold text-[32px] leading-none tracking-tight text-brand-500",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("py-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center py-6", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter";

export const Modal: FunctionComponent<ModalProps> = ({
  title,
  descripton,
  children,
  isMobile: isMobileProp,
  open,
  onClose, 
  primaryAction,
  primaryActionLabel: primaryActionLabelProp = 'Concluir',
  primaryActionProps,
  secondaryAction,
  secondaryActionLabel: secondaryActionLabelProp = 'Desfazer',
  secondaryActionProps,
  negativeAction,
  negativeActionProps,
  negativeActionLabel: negativeActionLabelProp = 'Cancelar',

})=> {
  const width = useWidth();

  const isMobile = useMemo(() => {
    if (isBool(isMobileProp)) return isMobileProp
    return width <= 639
  }, [isMobileProp, width])

  return (
    <div id="pepper-ui_modal_root" className={cn(open === true ? `flex` : `hidden`, "overflow-hidden absolute top-[50%] left-[50%] h-[100%] w-[100%] translate-x-[-50%] translate-y-[-50%] z-1 content-center justify-center flex-wrap")}>
      <button id="pepper-ui_modal-backdrop" className={cn("z-10 absolute left-0 top-0 w-[100%] h-[100%] pointer-events-hidden bg-neutral-950 opacity-disabled border-hidden")}></button>
      <CardPrimitive className="block z-20 bg-neutral-0 w-[60vw] min-h-[60vh]" id="pepper-ui_modal-primitive">
        <CardHeader id="pepper-ui_modal-header" className="h-[10vh]">
          <div>
            <CardTitle id="pepper-ui_modal-title">{title}</CardTitle>
            <CardDescription id="pepper-ui_modal-description">{descripton}</CardDescription>
          </div>
          <div>
            <button onClick={onClose}><Cross1Icon height={24} width={24}/></button>
          </div>
        </CardHeader>
        <CardContent id="pepper-ui_modal-content" className="h-[35vh] overflow-y-auto">{children}</CardContent>
        <CardFooter id="pepper-ui_modal-footer" className="h-[10vh]">
        {isMobile ? (
            <>
              {primaryAction && (
                <Button onClick={primaryAction} {...primaryActionProps} variant="primary" label={primaryActionLabelProp} />
              )}
              {secondaryAction && (
                <Button onClick={secondaryAction} {...secondaryActionProps} variant="secondary" label={secondaryActionLabelProp} />
              )}
              {negativeAction && (
                <Button onClick={negativeAction} variant="link" {...negativeActionProps} label={negativeActionLabelProp} />
              )}
            </>
          ) : (
            <>
              {secondaryAction && (
                <Button onClick={secondaryAction} {...secondaryActionProps} variant="secondary" label={secondaryActionLabelProp} />
              )}
              <div className="ml-auto">
                {negativeAction && (
                  <Button onClick={negativeAction} variant="link" {...negativeActionProps} label={negativeActionLabelProp} />
                )}
                {primaryAction && (
                  <Button onClick={primaryAction} {...primaryActionProps} variant="primary" label={primaryActionLabelProp} />
                )}
              </div>
            </>
          )}
        </CardFooter>
      </CardPrimitive>
    </div>
  )
}

export { CardPrimitive, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
