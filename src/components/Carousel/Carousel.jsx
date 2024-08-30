import React, { useEffect } from 'react'
import styles from './Carousel.module.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import CarouselLeftNavigation from './CarouselLeftNavigation'
import CarouselRightNavigation from './CarouselRightNavigation'
import {Navigation} from 'swiper/modules'
import 'swiper/css'

const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(()=>{
        swiper.slideTo(0,null)
        // eslint-disable-next-line
    },[data])
    return <></>
}

const Carousel = ({data,renComponent}) => {

  return (
    <div className={styles.wrapper}>
        <Swiper
        style={{padding : "0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove
        >
            <Controls/>
            <CarouselLeftNavigation/>
            <CarouselRightNavigation/>
            {
                data.map((ele)=>{
                    return(
                        <SwiperSlide>{renComponent(ele)}</SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}

export default Carousel