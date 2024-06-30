import { Box } from '@mui/material';
import theme from '../../utils'
import NavBar from "../../components/navBar";

export default function Home() {
    return (
        <Box sx={{
            backgroundColor: theme.palette.background.paper,
            minHeight: '100vh',
            padding: '1rem 6rem',
        }}>
            <NavBar />
        </Box>
    )
}