import {Container} from "Components/Shared/Container/Container"
import {MLogo} from "Components/Shared/Logo/Logo"
import {Nav} from "./Components/Nav/Nav"
import {memo} from "react"

export const Header = memo(() => {
  return (
    <div
      className={
        "absolute top-0 left-0 w-full border-b-secondary border-solid border border-opacity-25"
      }>
      <Container>
        <div className={"flex h-24 items-center"}>
          <MLogo initial={{y: -100}} animate={{y: 0}} />
          <Nav />
        </div>
      </Container>
    </div>
  )
})
