import { Paper } from '@mui/material';
import React from 'react'

type Item = {
    id: number;
    name: string;
};

type ReadonlyArrayComponentProps = {
    items: readonly Item[];
};

export default function ReadOnly({items} : ReadonlyArrayComponentProps) {
    return (
        <Paper sx={{padding:'10px', margin:'10px', width:'300px'}} >
            <h2>Readonly Array Component</h2>
            <ul>
                {items.map((item) => (
                <li key={item.id}>{item.id}: {item.name}</li>
                ))}
            </ul>
        </Paper>

    )
}
