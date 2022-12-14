import {SectionTitle} from "Components/Shared/SectionTitle/SectionTitle";
import {DishCard} from "./DishCard";
import dish from "assets/dishes.png";
import {Container} from "../../../Shared/Container/Container";
import s from "./Dishes.module.scss";

const dishes = [
    {
        title: "Featured Meal",
        subtitle: "Served with french fries + drink",
        description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        rating: 5,
        reviewsCount: 12,
        media: [dish]
    },
    {
        title: "Featured Meal",
        subtitle: "Served with french fries + drink",
        description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        rating: 4,
        reviewsCount: 12,
        media: [dish]
    },
    {
        title: "Featured Meal",
        subtitle: "Served with french fries + drink",
        description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        rating: 4,
        reviewsCount: 12,
        media: [dish]
    },

    {
        title: "Featured Meal",
        subtitle: "Served with french fries + drink",
        description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        rating: 3,
        reviewsCount: 12,
        media: [dish]
    },
    {
        title: "Featured Meal",
        subtitle: "Served with french fries + drink",
        description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        rating: 5,
        reviewsCount: 12,
        media: [dish]
    },
    {
        title: "Featured Meal",
        subtitle: "Served with french fries + drink",
        description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        rating: 4,
        reviewsCount: 12,
        media: [dish]
    },
]

export const Dishes = () => {
    return <>
        <SectionTitle primary={'Dish Of The Day'} secondary={'Dishes'}/>
        <Container className={s.dishes}>{dishes.map(dish => <DishCard {...dish}/>)}</Container>
    </>
}