import {ComponentProps, PropsWithChildren} from "react";

export const Container = ({children, ...rest}: PropsWithChildren & ComponentProps<'div'>) => {
    return <div {...rest} className={"max-w-7xl mx-auto"}>{children}</div>
}