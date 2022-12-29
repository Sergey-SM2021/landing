import s from "./Intro.module.scss"
import {MButton} from "Components/Shared/Button/Button"
import {Container} from "Components/Shared/Container/Container"
import {ReactComponent as Clock} from "assets/clock.svg"
import {ReactComponent as Call} from "assets/call.svg"
import {ReactComponent as Near_me} from "assets/near_me.svg"
import {MInfo} from "./Components/Info"
import {motion} from "framer-motion"
import {FC, memo} from "react"

const info = [
  {
    Icon: Clock,
    primary: "Today 10:00 am - 7:00 pm",
    secondary: "Working hours",
  },
  {Icon: Call, primary: "Velyka Vasylkivska 100", secondary: "Get Directions"},
  {Icon: Near_me, primary: "+38 (063)833 24 15", secondary: "Call Online"},
]

const InfoVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (custom + 1) * 0.2,
    },
  }),
}

const TitleVariants = {
  initial: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom,
    },
  }),
}

export const Intro: FC = memo(() => {
  return (
    <div className={s.intro}>
      <Container>
        <motion.h2
          animate={"visible"}
          initial={"initial"}
          variants={TitleVariants}
          custom={0.4}
          className={s.intro__title}>
          Your Favourite Food Delivered Hot & Fresh
        </motion.h2>
        <div className={s.intro__description}>
          HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping &
          marinating, so you can cook a fresh homemade dinner in just 15
          minutes.
        </div>
        <div className={s.intro__makeOrder}>
          <MButton
            initial={{scale: 0}}
            animate={{scale: 1, transition: {delay: 0.5}}}
            whileHover={{y: -10}}>
            Order Now
          </MButton>
        </div>
        <div className={s.intro__items}>
          {info.map((item, index) => (
            <MInfo
              initial={"initial"}
              animate={"visible"}
              custom={index}
              variants={InfoVariants}
              key={index}
              {...item}
            />
          ))}
        </div>
      </Container>
    </div>
  )
})
