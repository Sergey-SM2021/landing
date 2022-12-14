import {MLink} from "./Components/Link";

const links = ["Menu", "Recipes", "Chefs", "Contacts"]

export const Nav = () => {
    return <ul className={'flex gap-5 flex-grow h-full items-center text-secondary justify-end'}>
        {links.map(li => <MLink>{li}</MLink>)}
    </ul>
}