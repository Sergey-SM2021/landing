import {Container} from "Components/Shared/Container/Container"
import {SectionTitle} from "Components/Shared/SectionTitle/SectionTitle"
import {MDescription} from "./Description"
import {memo} from "react"
import s from "./Work.module.scss"

const descriptions = [
  {
    title: "Pick meals",
    description:
      "Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.",
  },
  {
    title: "Choose how often",
    description:
      "Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!",
  },
  {
    title: "fast deliveries",
    description:
      "Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.",
  },
  {
    title: "tasty meals",
    description:
      "Gobble makes cooking fast, so you have more time to unwind and be with family.",
  },
]

export const Work = memo(() => {
  return (
    <Container className={s.work}>
      <SectionTitle secondary={"work"} primary={"how it works"} />
      <div className={s.work__items}>
        {descriptions.map((desc, i) => (
          <MDescription
            whileInView={{y: 0, transition: {delay: (i + 1) * 0.2}, opacity: 1}}
            viewport={{once: true}}
            initial={{opacity: 0, y: "-100px"}}
            {...desc}
          />
        ))}
      </div>
    </Container>
  )
})
