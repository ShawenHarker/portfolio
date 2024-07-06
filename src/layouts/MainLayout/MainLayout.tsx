import { Box } from '@mui/material';
import theme from '../../utils';
import NavBar from "../../components/navBar";
import DisplayLayout from "../DisplayLayout";

export default function MainLayout() {
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
            <DisplayLayout />
        </Box>
    )
}