import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import { Box, Typography, keyframes } from "@mui/material";
import {img1, img2, img3, img4, img5} from "@/images";
import { KeyboardDoubleArrowDownOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const FloatingArrow = keyframes`
0% {
    transform: translate(-50%, 0);
}
50% {
    transform: translate(-50%, -50%);
}
100% {
    transform: translate(-50%, 0);
}
`

const Intro = () => {

    const theme = useTheme();

    return (
        <Box sx={{position: 'relative', height: '100vh'}} component="section">
            <Typography 
                component="h1"
                variant="h1"
                sx={{
                    position: 'absolute',
                    width: '90vw',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    fontWeight: 800,
                    textAlign: 'center',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    textTransform: 'uppercase'
                }}>
                The best movies at one place
            </Typography>
            <Swiper
                slidesPerView={1}
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
            <KeyboardDoubleArrowDownOutlined fontSize="large" color='secondary'
                sx={{
                    position: 'absolute', 
                    left: '50%', 
                    bottom: '1.5em', 
                    display: 'block',
                    animation: `${FloatingArrow} infinite 2s ease`,
                    filter: 
                          `drop-shadow(-1px -1px 0px ${theme.palette.primary.main}) drop-shadow(2px -1px 0px ${theme.palette.primary.main}) drop-shadow(2px 2px 0px ${theme.palette.primary.main}) drop-shadow(-1px 2px 0px ${theme.palette.primary.main})`
                    }} />
        </Box>
      );
}

export default Intro;