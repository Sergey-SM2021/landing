import s from './Recipe.module.scss'
import {IRecipes} from "../index";
import cn from "classnames";
import messages from 'assets/3. Icons/ic_question_answer.svg'
import eye from 'assets/3. Icons/ic_remove_red_eye.svg'

interface IProps extends IRecipes {
}

export const Recipe = ({comments, views, type, date, author, title, bg}: IProps) => {
    return (<div className={s.recipe}>
        <img src={bg} className={s.recipe__media}/>
        <div className={s.recipe__content}>
            <div className={cn(s.primaryInfo,s.recipe__infoPrimary)}>
                <div className={s.primaryInfo__type}>{type}</div>
                <div className={s.primaryInfo__date}>{date}</div>
            </div>
            <div className={s.recipe__text}>
                {title}
            </div>
            <div className={s.recipe__author}>{author}</div>
            <div className={cn(s.secondaryInfo,s.recipe__infoSecondary)}>
                <div className={s.secondaryInfo__views}>
                    <span>{views}</span>
                    <img src={messages}/>
                </div>
                <div className={s.secondaryInfo__comments}>
                    <span>{comments}</span>
                    <img src={eye}/>
                </div>
            </div>
        </div>
    </div>)
}