import { Box } from '@mui/material';
import theme from '../../utils';
import NavBar from "../../components/navBar";

export default function MainWrapper() {
    const container = {
        backgroundColor: theme.palette.background.paper,
        padding: '1rem 6rem',
        height: 'calc(100vh - 32px)',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    };

    return (
        <Box sx={container}>
            <NavBar />
        </Box>
    )
}