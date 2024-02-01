import React from 'react'

import { Button, Paper } from '@mui/material'

export default function EventHandlinh() {
    const [isMessageVisible, setMessageVisibility] = React.useState<boolean>(false);

    const handleClick = () => {
        setMessageVisibility(!isMessageVisible);
    };

    return (
        <Paper>
            <h2>Event Handling</h2>
            {isMessageVisible && <p>Event Handling</p>}
            <Button onClick={handleClick}>Message</Button>
        </Paper>
    )
}
