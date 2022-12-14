import {forwardRef} from "react";
import {motion} from "framer-motion";
import s from "./SectionTitle.module.scss";
import cn from "classnames";

interface IProps {
    primary: string
    secondary: string
    underlined?: boolean
}

const SectionTitleVariants = {
    initial: {
        opacity: 0,
        scale: 0
    },
    inView: {
        opacity: 1,
        scale: 1
    }
}

export const SectionTitle = forwardRef<HTMLDivElement, IProps>(({primary, secondary, underlined = true}, ref) => {
    return (
        <motion.div className={cn([s.sectionTitle, underlined ? s.underlined : ""])} variants={SectionTitleVariants}
                    initial={'initial'}
                    viewport={{once: true}} whileInView={'inView'} ref={ref}>
            <div className={s.sectionTitle__secondary}>{secondary}</div>
            <div className={s.sectionTitle__primary}>{primary}</div>
        </motion.div>)
})

export const MSectionTitle = motion(SectionTitle)