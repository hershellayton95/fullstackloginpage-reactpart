import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Outlet } from 'react-router';

export default function FormPage() {


    return (
        <Container maxWidth="md" sx={{display:"flex", alignItems:"center", height:"100vh"}}>
            <Box style={{display:"flex", alignItems:"center", borderRadius:"15px", overflow:"hidden", height:"80%", boxShadow:"5px 5px 28px 1px rgba(0,0,0,0.67)"}}>
                <Box sx={{flex: 1, background:"white", overflow:"hidden", height:"100%"}}>
                    <img src="../assets/istockphoto-1049109830-1024x1024.jpg" alt="immagine psicadelica" style={{width:"auto", height:"100%"}}/>
                </Box>
                <Box sx={{flex: 1, background:"white", display:"flex", alignItems:"center", height:"100%"}}>
                    <Outlet/>
                </Box>
            </Box>
        </Container>
    );
}
