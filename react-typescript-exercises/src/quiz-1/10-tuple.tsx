import { Button, Paper } from '@mui/material';
import React from 'react'

type StateTuple = [boolean, string];

export default function Tuple() {
    const [state, setState] = React.useState<StateTuple>([false, 'Initial Value']);

    const toggleBoolean = () => {
        setState([!state[0], state[1]]);
    };

    const updateString = () => {
        setState([state[0], 'Updated Value']);
    };

    return (
        <Paper>
            <h2>Tuple</h2>
            <p>Boolean Value: {state[0].toString()}</p>
            <p>String Value: {state[1]}</p>
            <Button onClick={toggleBoolean}>Toggle Boolean</Button>
            <Button onClick={updateString}>Update String</Button>
        </Paper>
    );
}
