import React from 'react'

import { Button, Paper } from '@mui/material'

export default function EventHandlinh() {
    const [isMessageVisible, setMessageVisibility] = React.useState<boolean>(false);

    const handleClick = () => {
        setMessageVisibility(!isMessageVisible);
    };

    return (
        <Paper sx={{padding:'10px', margin:'10px', width:'300px'}} >
            <h2>Event Handling</h2>
            <Button variant="contained" onClick={handleClick}>Message</Button>
            {isMessageVisible && <p>Neque porro quisquam est qui dolorem 
                                    ipsum quia dolor sit amet, consectetur, adipisci velit...</p>}
        </Paper>
    )
}
