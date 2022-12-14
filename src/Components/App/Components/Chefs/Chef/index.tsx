import {IChef} from "types/Chefs";
import s from "./chef.module.scss";
import {forwardRef} from "react";
import {motion} from "framer-motion";

interface IProps {
    chef: IChef
}

export const Chef = forwardRef<HTMLDivElement, IProps>(({chef}, ref) => {
    return <motion.div className={s.chef} ref={ref}>
        <div className={s.chef__ava}>
            <img src={chef.avatar}/>
        </div>
        <div className={s.chef__about}>
            <div className={s.chef__fullName}>{chef.fullName}</div>
            <div className={s.chef__description}>{chef.describe}</div>
        </div>
        <div className={s.chef__wideMedia}>
            <img src={chef.media[0]}/>
        </div>
        <div className={s.chef__media}>
            <img src={chef.media[1]}/>
        </div>
        <div className={s.chef__media}>
            <img src={chef.media[2]}/>
        </div>
    </motion.div>
})

export const MChef = motion(Chef)