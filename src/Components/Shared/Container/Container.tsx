import {ComponentProps, PropsWithChildren} from "react"
import cn from "classnames"
import s from "./Container.module.scss"

export const Container = ({
  children,
  ...rest
}: PropsWithChildren & ComponentProps<"div">) => {
  return <div className={cn(rest.className, s.container)}>{children}</div>
}
