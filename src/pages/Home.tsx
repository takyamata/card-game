import React from 'react';
import styles from './home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const Home = () => {
    return (
        <div className={styles.root}>
            <Swiper 
				effect={'cards'} 
				grabCursor={true} 
				modules={[EffectCards]} 
				className={styles.swiper}
			>
                <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>Slide 5</SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>Slide 6</SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>Slide 7</SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>Slide 8</SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;
