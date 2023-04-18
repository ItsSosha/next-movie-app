// import { 
//     AppBar,
//     ToolBar,
//     Typography,
//     IconButton,
// } from "@mui/material";

// import { MenuBook } from "@mui/icons-material";

// const Header = () => {
//     <AppBar>
//         <ToolBar>
//             <IconButton>
//                 <MenuBook />
//             </IconButton>
//         </ToolBar>
//     </AppBar>
// }

import { LocalMovies, Menu } from "@mui/icons-material";
import { 
    AppBar, 
    IconButton, 
    Toolbar, 
    Container, 
    Typography,
    Box
} from "@mui/material";
import Link from "next/link";

const Header = () => {
    return (
        <AppBar position="fixed">
            <Container 
                maxWidth='xl'>
                <Toolbar>
                    <IconButton 
                        color="secondary"
                        sx={{mr: '16px'}}>
                        <Menu />
                    </IconButton>
                    <Box 
                        component={Link} 
                        href='/'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                        <LocalMovies />
                        <Typography
                            variant="h5"
                            component="span">
                            Based Movies
                        </Typography>
                    </Box>
                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;