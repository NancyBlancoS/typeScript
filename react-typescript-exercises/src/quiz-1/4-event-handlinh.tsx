import React from 'react'

import { Button, Paper } from '@mui/material'

interface MessageProps {
    message?: string;
    title?: string;
    buttonName: string;
}

export default function EventHandlinh( {message, title, buttonName} : MessageProps) {
    const [isMessageVisible, setMessageVisibility] = React.useState<boolean>(false);

    const handleClick = () => {
        setMessageVisibility(!isMessageVisible);
    };

    return (
        <Paper sx={{padding:'10px', margin:'10px', width:'300px'}} >
            <h2>{title}</h2>
            <Button variant="contained" onClick={handleClick}>{buttonName}</Button>
            {isMessageVisible && <p> {message} </p>}
        </Paper>
    )
}
