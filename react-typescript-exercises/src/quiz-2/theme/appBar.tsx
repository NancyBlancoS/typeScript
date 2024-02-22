import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export default function AppBarText() {
    return (
        <Box >
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography sx={(theme) => theme.typography.body1}>
                        MUI THEME QUIZ-02
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}