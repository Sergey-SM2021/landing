import {Header} from "./Components/Header/Header";
import {Footer} from "Components/App/Components/Footer/Footer";
import {Intro} from "./Components/Intro/Intro";
import {About} from "./Components/About/About";

export const App = () => {
    return <div className={"flex flex-col min-h-screen bg-black"}>
        <Header/>
        <Intro/>
        <About/>
        <Footer/>
    </div>
}