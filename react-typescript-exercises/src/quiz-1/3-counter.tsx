import React from 'react'

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function Counter() {

    const [counterState, setCounterState] = React.useState<number>(0);

    const incrementCount = () => {
        setCounterState(counterState + 1);
    };

    const decrementCount = () => {
        setCounterState(counterState - 1);
    };

    return (
        <Paper sx={{padding:'10px', margin:'10px', width:'300px'}} >
            <h2>Counter</h2>
            <p>Count: {counterState}</p>
            <Button variant="contained" onClick={incrementCount} sx={{marginRight:'25px'}}>Increment</Button>
            <Button variant="outlined" onClick={decrementCount} >Decrement</Button>
        </Paper>
    );

}
