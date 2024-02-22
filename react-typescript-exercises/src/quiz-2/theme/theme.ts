import { createTheme } from "@mui/material";
import { darken } from "@mui/material";

const theme = createTheme({         //toma un {objeto}
    palette: {
        primary: {
            main: "#00796b"         // (Teal)
        },    
        secondary: {
            main: "#ffab00"         // (Amber)
        },  
        error: {
            main: "#d32f2f"         // (Red)
        }, 
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    background:'#00796b',       // (Teal) 
                    color: '#ffffff',
                    '&:hover': {background: darken('#00796B', 0.15)}, 
                }
            }
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    background:'#004d40',
                    color: '#ffffff',
                }
            }
        },
        MuiChip:{
            styleOverrides:{
                root:{
                    background: '#00796b',          // (Teal)
                    color: ' #ffffff',
                    border: '2px solid #ffab00', 
                    '&.MuiChip-outlined': {
                        borderColor: '#FFAB00',
                        color: '#FFAB00',
                    },
                }
            }
        }
        
    },
    typography: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: 16,
        fontWeightBold: 500
    },
})

export default theme;