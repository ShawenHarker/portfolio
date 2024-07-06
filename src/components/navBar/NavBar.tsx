import { Box, List, ListItem, Typography } from '@mui/material';
import Logo from "../../components/logo";
import theme from '../../utils';
import { useDispatch } from 'react-redux';
import { setValue } from '../../store/reducer';

const NavBar = () => {
    const dispatch = useDispatch();

    const menuItem = {
        color: theme.palette.common.white,
        cursor: 'pointer',
        '&:active': {
            color: theme.palette.text.secondary,
        },
        '&:hover': {
            color: theme.palette.text.secondary,
        },
    };

    const pages = [
        'Home',
        'About',
        'Services',
        'Portfolio',
    ];

    const handleClick = (index: number) => {
        dispatch(setValue(index));
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Logo />
            </Box>
            <List sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                {
                    pages.map((page: string, index: number) => (
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
    );
};

export default NavBar;
