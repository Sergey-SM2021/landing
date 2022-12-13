import {ComponentProps, forwardRef, PropsWithChildren} from "react";
import {motion} from "framer-motion";

export const Link = forwardRef<HTMLLIElement, PropsWithChildren & ComponentProps<'li'>>(({children}, ref) => {
    return (<motion.li ref={ref}
                       className={'hover:text-primary hover:cursor-pointer transition duration-300'}>{children}</motion.li>)
})

export const MLink = motion(Link)