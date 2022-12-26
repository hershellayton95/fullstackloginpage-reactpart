import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function Users() {

    const navigate = useNavigate();

    return (
        <Box style={{width: "100%", height: "25%", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
            <Box>
                <Typography variant='h3' component="div">Accedi o Registrati!</Typography>
            </Box>
            <Box style={{width: "100%", display:"flex", justifyContent:"center", alignItems:"center", gap:"30px"}}>
                <Button variant='contained' size='large' type='button' color="success" style={{width: "40%"}} onClick={()=>{navigate("/user/login")}}>Login</Button>
                <Button variant='contained' size='large' type='button' color="success" style={{width: "40%"}} onClick={()=>{navigate("/user/signin")}}>Sign In</Button>
            </Box>
        </Box>
    );
}

export default Users;
