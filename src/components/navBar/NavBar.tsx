import {Box, List, ListItem, Typography} from '@mui/material';
import Logo from "../../components/logo";
import theme from '../../utils';

export default function NavBar() {
    const menuItem = {
        color: theme.palette.common.white,
        cursor: 'pointer',
        '&:hover': {
          color: theme.palette.text.secondary,
        },
    };

    const pages = [
            'Home',
            'About',
            'Services',
            'Portfolio',
            'Contact',
        ]

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
           <Box sx={{ flexGrow: 1 }}>
               <Logo />
           </Box>
           <List style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
               {
                   pages.map((page) => (
                       <ListItem key={page}>
                           <Typography
                               variant="h5"
                               sx={menuItem}
                           >{page}</Typography>
                       </ListItem>
                   ))
               }
           </List>
        </Box>
    )
}