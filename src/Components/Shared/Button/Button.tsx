import {ComponentProps, forwardRef, PropsWithChildren} from "react";
import {motion} from "framer-motion";

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren & ComponentProps<'button'>>(({
                                                                                                       children,
                                                                                                       ...rest
                                                                                                   }, ref) => {
    return (<motion.button className={'bg-primary rounded-3xl py-4 px-10'} ref={ref}>
        {children}
    </motion.button>)
})

export const MButton = motion(Button)