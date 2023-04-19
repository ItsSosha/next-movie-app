import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import { Container, Box, Typography } from "@mui/material";
import {img1, img2, img3, img4, img5} from "@/images";
const Intro = () => {

    

    return (
        <Box sx={{position: 'relative', height: '100vh'}} component="section">
            <Typography 
                component="h1"
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    fontWeight: 800,
                    fontSize: '5rem',
                    textAlign: 'center',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    textTransform: 'uppercase'
                }}>
                The best movies at one place
            </Typography>
            <Swiper
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}   
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 5000
                }}
                style={{height: '100vh'}}
            >
                <SwiperSlide>
                    <Image 
                        fill={true} 
                        src={img1}
                        style={{objectFit: 'cover', objectPosition: 'center'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        fill={true} 
                        src={img2}
                        style={{objectFit: 'cover', objectPosition: 'center'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        fill={true} 
                        src={img3}
                        style={{objectFit: 'cover', objectPosition: 'center'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        fill={true} 
                        src={img4}
                        style={{objectFit: 'cover', objectPosition: 'center'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        fill={true} 
                        src={img5}
                        style={{objectFit: 'cover', objectPosition: 'center'}}/>
                </SwiperSlide>
            </Swiper>
        </Box>
      );
}

export default Intro;