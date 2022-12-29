import {motion} from "framer-motion"
import {forwardRef} from "react"
import s from "./Description.module.scss"

interface IProps {
  title: string
  description: string
}

const variants = {
  initCard: {
    background: "hsl(0, 0%, 15%)",
  },
  animateCard: {
    background: "hsl(135, 59%, 49%)",
  },
}

const titleAnimate = {
  animateCard: {
    color: "#000",
  },
  initCard: {
    color: "#fff",
  },
}

const textAnimate = {
  animateCard: {
    color: "#000",
  },
  initCard: {
    color: "#737373",
  },
}

const lineAnimate = {
  animateCard: {
    width: "75%",
    background: "#000",
  },
  initCard: {
    background: "#34C759",
  },
}

export const Description = forwardRef<HTMLDivElement, IProps>(
  ({description, title}, ref) => {
    return (
      <motion.div
        transition={{duration: 0.5}}
        ref={ref}
        className={s.description}
        variants={variants}
        whileHover={"animateCard"}
        initial={"initCard"}>
        <motion.h5 variants={titleAnimate} className={s.description__title}>
          {title}
        </motion.h5>
        <motion.div
          variants={lineAnimate}
          className={s.description__line}></motion.div>
        <motion.p variants={textAnimate} className={s.description__description}>
          {description}
        </motion.p>
      </motion.div>
    )
  }
)

export const MDescription = motion(Description)
