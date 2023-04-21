import { motion } from "framer-motion";
import { Box, Container, Typography, Button, Divider } from "@mui/material";
import Image from "next/image";
import { exploreImg } from "@/images";
import { useTheme } from "@emotion/react";
import Link from "next/link";


const HomeExplore = () => {

    const theme = useTheme();

    return (
        <section>
            <Container maxWidth='xl'
                sx={{
                    minHeight: '80vh',
                    width: '100%', 
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    justifyItems: 'center',
                    alignContent: 'center',
                    alignItems: 'center' }}>
                <Image 
                    src={exploreImg} 
                    style={{objectFit: 'cover', objectPosition: 'center'}}/>
                <Box
                    component={motion.div}
                    initial={{ transform: 'translateX(50%)', opacity: 0 }}
                    whileInView={{ transform: 'translateX(0)', opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{
                        duration: 0.75    
                    }}>
                    <Typography
                        component='h3'
                        variant='h4'
                        sx={{
                            fontWeight: 'bold',
                            textAlign: 'start',
                            marginBottom: '2em'
                        }}>
                        Explore our movie database
                    </Typography>
                    <Typography
                        component='p'
                        variant='h5'
                        sx={{
                            textAlign: 'start',
                        }}>
                        Looking for a movie? Our website has it all! With thousands of films to choose from and easy-to-use search tools, finding your next favorite flick is a breeze. So why wait? Start exploring now and discover the perfect movie for your next night in!
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        component={Link}
                        href="/search"
                        sx={{
                            mt: '1em',
                            px: 3
                        }}>
                        Explore
                    </Button>
                </Box>
            </Container>
            <Divider 
                sx={{
                boxShadow: `0px 0px 53px 6px ${theme.palette.secondary.main}`}}/>
        </section>
    )
}

export default HomeExplore;