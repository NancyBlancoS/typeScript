import React from 'react';

import Paper from '@mui/material/Paper';

import { Tuple, Counter, OptionalMessage, DisplayInput, TypeScriptBasics, InterfaceProps, EventHandlinh, Theme, ReadOnly } from '../quiz-1';

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

  const items = [
    { id: 372810, name: 'Nancy Blanco' },
    { id: 416608, name: 'Sergio Gutierrez' },
    { id: 257702, name: 'Pao Gutierrez' },
  ];

  const input = { id: 1, name: 'Example Object' };

  return (
    <Paper sx={{padding:'20px', margin:'10px', width:'500px'}}>
      <TypeScriptBasics basics={typeScriptBasics}/>
      <InterfaceProps {...userProps}/>
      <Counter />
      <EventHandlinh />
      <OptionalMessage message='Hola, esto es un mensaje'/>
      <OptionalMessage />
      <Theme />
      <ReadOnly items={items}/>
      <DisplayInput input={input}/>
      <Tuple />
    </Paper>
  );
}

export default App;
