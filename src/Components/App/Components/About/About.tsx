import {Container} from "Components/Shared/Container/Container";
import {MSectionTitle} from "Components/Shared/SectionTitle/SectionTitle";
import {Slider} from "./Components/Slider";
import {motion} from "framer-motion";
import slide1 from "assets/slide.png";
import slide2 from "assets/slide2.png";

const slides = [slide1, slide2]
export const About = () => {
    return (<section className={'bg-black'}>
        <Container className={'-mt-28'}>
            <div className={'bg-dark-gray flex flex-col pb-10 px-20'}>
                <MSectionTitle primary={'The Basics Of Healthy Food'} secondary={'ABOUT'}/>
                <div className={'flex justify-center'} style={{color: "#A6A6A6"}}>
                    <motion.p initial={{opacity:0,x:"-500px",}} whileInView={{x:0,opacity:1,transition:{duration:.5}}} viewport={{once:true}} className={"pb-10 max-w-xl text-center"}>
                        In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip
                        consectetur
                        voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
                    </motion.p>
                </div>
                <Slider slides={slides}/>
            </div>
        </Container>
    </section>)
}