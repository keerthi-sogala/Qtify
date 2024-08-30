import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as LeftArrow} from '../../assets/LeftArrow.svg'
import styles from './Carousel.module.css'

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning,setISBeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setISBeginning(swiper.isBeginning);
        })
        // eslint-disable-next-line
    },[])

  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation