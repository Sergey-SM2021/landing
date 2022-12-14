import {Swiper, SwiperSlide} from "swiper/react";
import right from "assets/right.svg";
import left from "assets/left.svg";
import {Navigation, Autoplay} from "swiper";
import {motion} from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

interface IProps {
    slides: Array<string>
}

export const Slider = ({slides}: IProps) => {
    return (<div className={'flex gap-10 items-center justify-between'}>
        <div style={{borderColor: "#303030"}}
             className="prev rounded-full border-black border w-16 h-16 flex justify-center items-center">
            <img src={left} alt="left-button"/>
        </div>
        <Swiper autoplay={{delay: 2500, disableOnInteraction: false}}
                slidesPerView={2}
                spaceBetween={0}
                loop={true}
                navigation={{prevEl: '.prev', nextEl: '.next'}}
                modules={[Navigation, Autoplay]}
                className={'h-72 w-full'}>
            {slides.map(slide => <SwiperSlide>
                <motion.div className={"flex justify-center gap-24"}>
                    <img src={slide} alt="slide1"/>
                </motion.div>
            </SwiperSlide>)}
        </Swiper>
        <div style={{borderColor: "#303030"}}
             className="next rounded-full border-black border w-16 h-16 flex justify-center items-center">
            <img src={right} alt="right-button"/>
        </div>
    </div>)
}