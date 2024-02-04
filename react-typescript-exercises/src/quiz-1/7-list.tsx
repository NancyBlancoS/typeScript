import React from 'react'

import { Paper } from '@mui/material';
interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export default function List<T>({ items, renderItem }: ListProps<T>) {
    return (
    <Paper sx={{padding:'10px', margin:'10px', width:'300px'}} >
        <ul>
            <h2>Generic List Component</h2>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
                ))}
        </ul>
    </Paper>
    );
}