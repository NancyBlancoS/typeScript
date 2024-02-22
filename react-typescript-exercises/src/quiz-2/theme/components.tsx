import AppBarText from './appBar';
import theme from './theme';
import { Button, Chip, Grid, Paper } from "@mui/material";


interface persona{
    date?: string;
    name: string;
    career: string;
    age?: string;
}

export default function Components({name, date, career, age}:persona) {

    return (
        <Paper sx={{ width:'400px', padding:'10px'}}>
            <AppBarText />
            <Grid paddingTop='10px'><Chip label={date}/></Grid> 
            
            <div style={{color: theme.palette.primary.main}}>
                <h2>{name}</h2>
            </div>

            <div style={{color: theme.palette.secondary.main}}>
                <h2>{career}</h2>
            </div>

            <div style={{color: theme.palette.error.main}}>
                <h2>{age}</h2>
            </div>

            <Button color='error'>Button</Button>
        </Paper>
    )
}