import {ComponentProps, forwardRef, PropsWithChildren} from "react"
import {motion} from "framer-motion"
import cn from "classnames"

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren & ComponentProps<typeof motion.button>
>(({children, ...rest}, ref) => {
  return (
    <motion.button
      {...rest}
      className={cn(
        rest.className,
        "bg-primary font-bold rounded-3xl py-4 px-10"
      )}
      ref={ref}>
      {children}
    </motion.button>
  )
})

export const MButton = motion(Button)
