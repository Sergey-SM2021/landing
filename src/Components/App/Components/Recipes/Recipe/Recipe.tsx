import s from "./Recipe.module.scss"
import {IRecipes} from "../index"
import cn from "classnames"
import {ReactComponent as Messages} from "assets/3. Icons/ic_question_answer.svg"
import {ReactComponent as Eye} from "assets/3. Icons/ic_remove_red_eye.svg"
import {FC} from "react"

interface IProps extends IRecipes {}

export const Recipe: FC<IProps> = ({
  comments,
  views,
  type,
  date,
  author,
  title,
  bg,
}) => {
  return (
    <div className={s.recipe}>
      {bg && <img src={bg} className={s.recipe__media} />}
      <div className={s.recipe__content}>
        <div className={cn(s.primaryInfo, s.recipe__infoPrimary)}>
          <div className={s.primaryInfo__type}>{type}</div>
          <div className={s.primaryInfo__date}>{date}</div>
        </div>
        <div className={s.recipe__text}>{title}</div>
        <div className={s.recipe__author}>{author}</div>
        <div className={cn(s.secondaryInfo, s.recipe__infoSecondary)}>
          <div className={s.secondaryInfo__views}>
            <span>{views}</span>
            <Eye className={s.secondaryInfo__mediaViews} />
          </div>
          <div className={s.secondaryInfo__comments}>
            <span>{comments}</span>
            <Messages className={s.secondaryInfo__mediaComments} />
          </div>
        </div>
      </div>
    </div>
  )
}
