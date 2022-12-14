import {ComponentProps, PropsWithChildren} from "react";

export const Container = ({children, ...rest}: PropsWithChildren & ComponentProps<'div'>) => {
    return <div className={`${rest.className} w-full max-w-7xl mx-auto`}>{children}</div>
}