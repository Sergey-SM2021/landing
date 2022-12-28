import {Container} from "../../../Shared/Container/Container";
import {MSectionTitle} from "../../../Shared/SectionTitle/SectionTitle";
import bg from "assets/rec.png";
import {Recipe} from "./Recipe/Recipe";
import s from './Recipes.module.scss'

export enum type {
    "breakfast" = "breakfast",
    "lunch" = "lunch",
    "dinner" = "dinner",
    "sweets" = "sweets",
}

export interface IRecipes {
    comments: number,
    views: number,
    date: string,
    title: string,
    author: string,
    type: type,
    bg?: string,
    id: number
}

const index: Array<IRecipes> = [
    {
        author: "Sergey Kuznetsov",
        bg,
        date: "05 Jul 2016",
        type: type.breakfast,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        views: 275,
        comments: 21,
        id: Math.random()
    },
    {
        author: "Sergey Kuznetsov",
        bg,
        date: "05 Jul 2016",
        type: type.breakfast,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        views: 275,
        comments: 21,
        id: Math.random()
    },
    {
        author: "Sergey Kuznetsov",
        bg,
        date: "05 Jul 2016",
        type: type.breakfast,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        views: 275,
        comments: 21,
        id: Math.random()
    },
    {
        author: "Sergey Kuznetsov",
        date: "05 Jul 2016",
        type: type.breakfast,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        views: 275,
        comments: 21,
        id: Math.random()
    }
]

export const Recipes = () => {
    return <div className={s.recipes}>
        <Container>
            <MSectionTitle primary={'Recipes From Our Chefs'} secondary={"RECIPES"}/>
            <div className={s.recipes__container}>
                {index.map(rec => <Recipe key={Math.random()} {...rec}/>)}
            </div>
        </Container>
    </div>
}