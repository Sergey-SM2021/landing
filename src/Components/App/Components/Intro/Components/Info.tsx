import {FC, forwardRef, SVGProps} from "react"
import s from "./Info.module.scss"
import {motion} from "framer-motion"

type TIcon = FC<SVGProps<SVGSVGElement> & {title?: string}>

interface IProps {
  Icon: TIcon
  primary: string
  secondary: string
}

export const Info: FC<IProps> = forwardRef<HTMLDivElement, IProps>(
  ({secondary, primary, Icon}, ref) => {
    return (
      <motion.div className={s.info} ref={ref}>
        <Icon className={s.info__svg} />
        <p className={s.info__primary}>{primary}</p>
        <p className={s.info__secondary}>{secondary}</p>
      </motion.div>
    )
  }
)

export const MInfo = motion(Info)
