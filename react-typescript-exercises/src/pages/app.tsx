import React from 'react';

import Paper from '@mui/material/Paper';

import { Tuple, Counter, OptionalMessage, DisplayInput, TypeScriptBasics, InterfaceProps, List ,EventHandlinh, Theme, ReadOnly } from '../quiz-1';
import { Grid } from '@mui/material';

function App() {
  const typeScriptBasics = [
    'Tipado estatico',
    'Functions',
    'Interfaces',
    'Clases',
    'Tipos',
    'Modulos',
  ];

  const userProps = {
    name: 'Nancy Blanco',
    age: 22,
    hobbies: ['Cooking', 'Reading', 'Drawing'],
  };

  const stringArray = ['One', 'Two', 'Three'];

  const items = [
    { id: 372810, name: 'Nancy Blanco' },
    { id: 416608, name: 'Sergio Gutierrez' },
    { id: 257702, name: 'Pao Gutierrez' },
  ];

  const input = { id: 1, name: 'Example Object' };

  return (
    <Paper sx={{padding:'20px', margin:'10px', bgcolor:'lightgray'}}>
      <Grid display='flex'> 
        <TypeScriptBasics basics={typeScriptBasics} />
        <InterfaceProps {...userProps} />
        <Counter />
        <EventHandlinh />
        <Grid>
          <OptionalMessage message='Hola, esto es un mensaje'/>
          <OptionalMessage />
        </Grid>
      </Grid>
      <Grid display='flex'>
        <Theme />
        <List items={stringArray} renderItem={(item) => <span>{item}</span>}/>
        <ReadOnly items={items}/>
        <DisplayInput input={input}/>
        <Tuple />
      </Grid>
    </Paper>
  );
}

export default App;
