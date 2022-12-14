import {motion} from 'framer-motion'
import {forwardRef} from "react";
import s from "./Description.module.scss";

interface IProps {
    title: string
    description: string
}

export const Description = forwardRef<HTMLDivElement, IProps>(({description, title}, ref) => {
    return <motion.div ref={ref} className={s.description}>
        <h5 className={s.description__title}>{title}</h5>
        <p className={s.description__description}>{description}</p>
    </motion.div>
})

export const MDescription = motion(Description)