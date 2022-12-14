import s from './Intro.module.scss'
import {MButton} from "Components/Shared/Button/Button";
import {ReactComponent as Clock} from "assets/clock.svg";
import {ReactComponent as Call} from "assets/call.svg";
import {ReactComponent as Near_me} from "assets/near_me.svg";
import {MInfo} from "./Components/Info";
import {motion} from "framer-motion";

const info = [
    {Icon: Clock, primary: "Today 10:00 am - 7:00 pm", secondary: "Working hours"},
    {Icon: Call, primary: "Velyka Vasylkivska 100", secondary: "Get Directions"},
    {Icon: Near_me, primary: "+38 (063)833 24 15", secondary: "Call Online"},
]

const InfoVariants = {
    initial: {
        opacity: 0,
        y: -100
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: (custom + 1) * .2
        }
    })
}

const TitleVariants = {
    initial: {
        opacity: 0
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: {
            delay: custom
        }
    })
}

export const Intro = () => {
    return <div className={'bg-intro h-screen bg-right bg-cover bg-top bg-no-repeat pt-24'}>
        <div className={'flex items-center flex-col text-secondary text-7xl pt-20'}>
            <motion.h2 animate={'visible'} variants={TitleVariants} custom={.2} initial={'initial'}
                       className={'leading-snug tracking-widest'}>Your Favourite Food
            </motion.h2>
            <motion.h2 animate={'visible'} initial={'initial'} variants={TitleVariants} custom={.4}
                       className={'leading-snug tracking-widest'}>Delivered Hot & Fresh
            </motion.h2>
        </div>
        <div className={'flex justify-center'}>
            <p style={{width: "570px"}} className={'text-secondary leading-7'}>
                HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a
                fresh
                homemade dinner in just 15 minutes.
            </p>
        </div>
        <div className={'flex justify-center pt-16'}>
            <MButton initial={{scale:0}} animate={{scale:1,transition:{delay:.5}}} whileHover={{y:-10}}>Order Now</MButton>
        </div>
        <div className={'flex gap-28 justify-center pt-16'}>
            {info.map((item, index) => <MInfo initial={'initial'} animate={'visible'} custom={index}
                                              variants={InfoVariants} key={index} {...item}/>)}
        </div>
    </div>
}