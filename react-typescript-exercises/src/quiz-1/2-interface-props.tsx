import React from 'react'

import Paper from '@mui/material/Paper';


interface UserProfileProps {
    name: string;
    age: number;
    hobbies: string[];
}

export default function InterfaceProps(user : UserProfileProps) {
    return (
        <Paper sx={{padding:'10px', margin:'10px', width:'300px'}} >
            <h2>User Profile</h2>
            <p>
                <strong>Name:</strong> {user.name}
            </p>
            <p>
                <strong>Age:</strong> {user.age}
            </p>
            <p>
                <strong>Hobbies:</strong>
            </p>
            <ul>
                {user.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
                ))}
            </ul>
        </Paper >
    )
}
