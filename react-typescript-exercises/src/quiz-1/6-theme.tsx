import { Paper } from '@mui/material';
import React from 'react'
import { createContext } from 'vm';

export default function Theme() {
    return (
        <Paper sx={{padding:'10px', margin:'10px', width:'300px'}} >
            <h2>Theme</h2>    
        </Paper>
    )
}
