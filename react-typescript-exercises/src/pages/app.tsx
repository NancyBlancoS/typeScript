import React from 'react';

import Paper from '@mui/material/Paper';

import { Counter, DisplayInput, EventHandlinh, InterfaceProps, List, OptionalMessage, ReadOnly, Tuple, TypeScriptBasics, Theme } from '../quiz-1';
import { AppBarText, Components } from '../quiz-2/theme';

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
        <EventHandlinh title= 'Event Handling' buttonName='Message' message='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'/>
        <Grid>
          <OptionalMessage message='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'/>
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
      <Grid>
        <Components date='04/02/2024' name='Nancy Blanco Suarez' career='Electronic Engineering' age='22'/>
      </Grid>
    </Paper>
  );
}

export default App;
