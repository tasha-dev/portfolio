// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import {Swiper, SwiperSlide} from 'swiper/react';
import Comment from '@/component/comment';
import 'swiper/css';

// Creating and exporting fourth section of home page as default
export default function FourthSection():ReactNode {
    // Returning JSX
    return (
        <section id={'testimonials'} className={'bg-richBlack'}>
            <Container>
                <h2 className={'lg:text-[48px] text-[36px] text-center -tracking-[2px] text-white font-bold mb-[50px]'}>
                    Kind words from  <span className={'text-purple-500'}>satisfied clients</span>
                </h2>
                <Swiper
                    className={'h-[300px]'}
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide><Comment name={'Morteza.f'}>Their work is excellent and they are at the level of Senior Developer. Accuracy in delivery and quality of codes and output are excellent. In general, their work was excellent in terms of scientific speed and output quality and codes, and I hope to have more cooperation with them in the future.</Comment></SwiperSlide>
                    <SwiperSlide><Comment name={'Parham.r'}>In the webimode project, we had very good working experience with each other and i recommend him to anyone</Comment></SwiperSlide>
                </Swiper>
            </Container>
        </section>
    );
}
