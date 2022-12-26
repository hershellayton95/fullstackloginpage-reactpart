import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

function Home() {

    const navigate = useNavigate()



    return (
        <Container maxWidth="md">
            <Box sx={{width:"100%", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Typography onClick={()=>navigate("/user")} variant="h1" style={{textAlign:"center", border: "5px solid white", outline: "5px solid black", cursor:"pointer", userSelect: "none"}}>  CLICCA E SCOPRI CHI SEI</Typography>
            </Box>
        </Container>
    );
}

export default Home;
