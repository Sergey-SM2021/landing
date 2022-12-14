import s from "./dishCard.module.scss"
import {MButton} from "../../../../Shared/Button/Button";
import star from "assets/ic_star.svg";

interface IProps {
    title: string,
    subtitle: string,
    description: string,
    rating: number,
    reviewsCount: number,
    media: Array<string>
}

export const DishCard = ({rating, description, reviewsCount, media, subtitle, title}: IProps) => {
    return (<div className={s.dishCard}>
        <img src={media[0]} className={s.dishCard__media}/>
        <div className={s.dishCard__content}>
            <div>
                <h3 className={s.dishCard__title}>{title}</h3>
                <p className={s.dishCard__subtitle}>{subtitle}</p>
            </div>
            <p className={s.dishCard__description}>{description}</p>
            <div className={s.dishCard__actions}>
                <div className={s.dishCard__rating}>{new Array(rating).fill("").map(() => <img src={star}
                                                                                               alt="star"/>)}</div>
                <MButton whileHover={{y: -10}} initial={{y: 0}}>ORDER</MButton>
            </div>
        </div>
    </div>)
}