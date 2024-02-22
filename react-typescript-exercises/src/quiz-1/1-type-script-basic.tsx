import React from 'react';

import { Paper } from '@mui/material';

interface TypeScriptBasicsProps {
    basics: string[];
}

//  function TypeScriptBasics ( basic : TypeScriptBasicsProps) {

//  }

const TypeScriptBasics: React.FC<TypeScriptBasicsProps> = ({ basics }) => {
    return (
        <Paper sx={{padding:'10px', margin:'10px', width:'300px'}}>
            <h2>TypeScript Basics</h2>
            <ul>
                {basics.map((basic, index) => (
                <li key={index}>{basic}</li>
                ))}
            </ul>
        </Paper>
    );
};

export default TypeScriptBasics;