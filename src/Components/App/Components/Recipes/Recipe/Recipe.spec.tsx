import {render, screen} from "@testing-library/react"
import {Recipe} from "./Recipe"
import {type} from "../index"
import "@testing-library/jest-dom/extend-expect"
import bg from "assets/rec.png"

describe("sRecipe", () => {
  it("Recipe should be rendered with specific props (with out background)", () => {
    const id = Math.random()
    render(
      <Recipe
        title={"Курочка bbq"}
        id={id}
        author={"Sergei Kuznetsov"}
        comments={9}
        date={"08.10.11"}
        type={type.sweets}
        views={10}
      />
    )
    expect(screen.getByText(/Курочка bbq/)).toBeInTheDocument()
    expect(screen.getByText(/Sergei Kuznetsov/)).toBeInTheDocument()
    expect(screen.getByText(/08.10.11/)).toBeInTheDocument()
    expect(screen.getByText(/9/)).toBeInTheDocument()
    expect(screen.getByText(type.sweets)).toBeInTheDocument()
    expect(screen.getByText(10)).toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })

  it("Recipe should be rendered with specific props (with background)", () => {
    const id = Math.random()
    render(
      <Recipe
        title={"Курочка bbq"}
        id={id}
        author={"Sergei Kuznetsov"}
        bg={bg}
        comments={9}
        date={"08.10.11"}
        type={type.sweets}
        views={10}
      />
    )
    expect(screen.getByText(/Курочка bbq/)).toBeInTheDocument()
    expect(screen.getByText(/Sergei Kuznetsov/)).toBeInTheDocument()
    expect(screen.getByText(/08.10.11/)).toBeInTheDocument()
    expect(screen.getByText(/9/)).toBeInTheDocument()
    expect(screen.getByText(type.sweets)).toBeInTheDocument()
    expect(screen.getByText(10)).toBeInTheDocument()
    expect(screen.getByRole("img")).toBeInTheDocument()
  })
})
