import { Box, List, ListItem, Typography } from '@mui/material';
import Logo from "../../components/logo";
import theme from '../../utils';
import { useDispatch } from 'react-redux';
import { setValue } from '../../store/reducer';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const dispatch = useDispatch();
    const [active, setActive] = useState<number>(0);

    const menuItem = {
        color: theme.palette.common.white,
        cursor: 'pointer',
        position: 'relative',
        transition: 'color 500ms ease-in, box-shadow 500ms ease-in',
        '&:hover': {
            color: theme.palette.text.secondary,
        },
        '&:active': {
            color: theme.palette.text.secondary,
            background: 'transparent',
            textShadow: '2px 2px 6px #92d3fa',
        }
    };

    const activeMenuItem = {
        ...menuItem,
        color: theme.palette.text.secondary,
        textShadow: '2px 2px 6px #92d3fa',
    };

    const pages = [
        'Home',
        'About',
        'Portfolio',
        'Services',
    ];

    useEffect(() => {
        setActive(0);
    }, []);

    const handleClick = (index: number) => {
        setActive(index);
        dispatch(setValue(index));
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Logo />
            </Box>
            <List sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                {pages.map((page: string, index: number) => (
                    <ListItem
                        key={index}
                        onClick={() => handleClick(index)}
                    >
                        <Typography
                            variant="h5"
                            sx={active === index ? activeMenuItem : menuItem}
                        >
                            {page}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default NavBar;
