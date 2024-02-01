import React from 'react'

import { Paper } from '@mui/material';

interface MessageProps {
    message?: string;
}

export default function OptionalMessage({message} : MessageProps) {
    return (
        <Paper>
            <h2>Optional Message</h2>
            {message ? ( <p>{message}</p>) : (<p>No hay mensaje</p>)}
        </Paper>
    )
}
