import {forwardRef} from "react";
import {motion} from "framer-motion";

interface IProps {
    primary: string
    secondary: string
}

export const SectionTitle = forwardRef<HTMLDivElement, IProps>(({primary, secondary}, ref) => {
    return (<motion.div className={'w-full'} initial={{opacity:0,scale:0}} viewport={{once:true}} whileInView={{opacity:1,scale:1}} ref={ref}>
        <div className={'w-full flex justify-center relative'}>
            <div className={'font-black text-7xl tracking-widest'} style={{color: "#303030"}}>{secondary}</div>
            <div style={{top: "50%", transform: "translateY(-50%)"}}
                 className={'text-secondary tracking-widest w-full flex justify-center absolute'}>{primary}</div>
        </div>
    </motion.div>)
})

export const MSectionTitle = motion(SectionTitle)