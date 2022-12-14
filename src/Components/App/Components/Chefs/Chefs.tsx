import {Container} from "Components/Shared/Container/Container";
import {MSectionTitle} from "Components/Shared/SectionTitle/SectionTitle";
import chefsAva from "assets/Avatar.png";
import firstMedia from "assets/big img.png";
import secondMedia from "assets/img 2.png";
import lastMedia from "assets/img 3.png";
import {Chef} from "./Chef";
import {IChef} from "types/Chefs";
import s from "./Chefs.module.scss";

const chefs: Array<IChef> = [
    {
        avatar: chefsAva,
        describe: "Chef of the cold",
        fullName: "Gregory Flores",
        id: Math.random(),
        media: [firstMedia, secondMedia, lastMedia]
    },
    {
        id: Math.random(),
        avatar: chefsAva,
        describe: "Chef of the cold",
        fullName: "Gregory Flores",
        media: [firstMedia, secondMedia, lastMedia]
    },
    {
        id: Math.random(),
        avatar: chefsAva,
        describe: "Chef of the cold",
        fullName: "Gregory Flores",
        media: [firstMedia, secondMedia, lastMedia]
    }
]

export const Chefs = () => {
    return (<Container>
        <MSectionTitle primary={"This month's chefs"} secondary={"CHEFS"}/>
        <div className={s.chefs__group}>{chefs.map(chef => <Chef chef={chef}/>)}</div>
    </Container>)
}