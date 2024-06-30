import { Typography } from '@mui/material';
import theme from '../../utils';

export default function Logo() {
    const name = { color: theme.palette.text.primary };
    const dot = {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: theme.palette.text.primary,
            marginBottom: 6,
            marginLeft: 1,
        };

    return <Typography
        variant='h2'
        display='flex'
        alignItems='end'
        sx={name}
        >
        Shawen
        <div style={dot}/>
    </Typography>
}