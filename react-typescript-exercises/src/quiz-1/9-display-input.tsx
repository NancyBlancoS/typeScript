import { Paper } from "@mui/material";

type Object = {
    id: number;
    name: string;
}
type InputType = {
    input: string | number | Object;
};


function DisplayInput({input}: InputType) {
    const value = () => {
        if (typeof input === 'string') {
            return <p>Input is a string: {input}</p>
        } else if (typeof input === 'number') {
            return <p>Input is a number: {input}</p>
        } else {
            return <p>Input is an object with id: {input.id}</p>
        }
        
    };
    
    return (
    <Paper>
        <h2>Display Input</h2>
        {value()}
    </Paper>
    );

}

export default DisplayInput; 