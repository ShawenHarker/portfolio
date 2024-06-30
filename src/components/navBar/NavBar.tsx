import {Box, List, ListItem, Typography} from '@mui/material';
import Logo from "../../components/logo";
import theme from '../../utils';
import {useState} from "react";

export default function NavBar() {
    const [value, setValue] = useState<number>();
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
        ];

    const handleClick = (index: number) => {
        setValue(index);
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
           <Box sx={{ flexGrow: 1 }}>
               <Logo />
           </Box>
           <List style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
               {
                   pages.map((page: string , index: number) => (
                       <ListItem key={index} onClick={() => handleClick(index)}>
                           <Typography
                               variant="h5"
                               sx={menuItem}
                           >
                               {page}
                           </Typography>
                       </ListItem>
                   ))
               }
           </List>
        </Box>
    )
}