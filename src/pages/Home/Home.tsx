import {Box, Typography} from "@mui/material";
import theme from '../../utils';

export default function Home() {
    const styles = {
        title: {
            color: theme.palette.text.primary,
        },
        subtitle: {
            color: theme.palette.text.secondary,
        },
        hire: {

        }
    }

    return (
        <>
            <Typography variant='h1' sx={styles.title}>
                Hi, I'm Shawen Harker
            </Typography>
            <Typography variant='h2' style={styles.subtitle}>A Digital Craftsman (Full-stack developer)</Typography>
            <Typography variant='subtitle2' color='primary'>
                Building my version of the digital world, while specializing in crafting custom software solutions for clients. With a strong foundation in both front-end and back-end technologies, I thrive on turning ideas into functional and elegant applications. I approach every project with agility, constantly learning and evolving to meet the ever-changing demands of the tech industry.
            </Typography>
            <div>
                <Box sx={styles.hire}>
                    hire me
                </Box>
            </div>
        </>
    );
}