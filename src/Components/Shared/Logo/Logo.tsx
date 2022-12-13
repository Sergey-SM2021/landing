import logo from 'assets/Logo.svg'
import {motion} from "framer-motion";
import {forwardRef} from "react";

export const Logo = forwardRef<HTMLDivElement>(({}, ref) => {
    return <motion.div ref={ref} className={'relative pl-12 text-primary font-bold'}>
        <img className={"h-9 absolute bottom-0 left-0"} src={logo}/>
        <h1>HEALTHY SWITCHER</h1>
    </motion.div>
})

export const MLogo = motion(Logo)