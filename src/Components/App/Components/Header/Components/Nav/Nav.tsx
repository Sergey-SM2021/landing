import {MLink} from "./Components/Link";

export const Nav = () => {
    return <ul className={'flex gap-5 flex-grow h-full items-center text-secondary justify-end'}>
        <MLink initial={{opacity:0}}>Menu</MLink>
        <MLink>Recipes</MLink>
        <MLink>Chefs</MLink>
        <MLink>Contacts</MLink>
    </ul>
}