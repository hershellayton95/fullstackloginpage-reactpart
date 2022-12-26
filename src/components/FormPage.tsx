import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Outlet, useLocation } from 'react-router';

export default function FormPage() {

  const location = useLocation();
  const classNameApp = (pathSting: typeof location): string => {
    const path = pathSting.pathname.split("/").pop() as string;
    return path;
  }

    return (
        <Container maxWidth="md" sx={{display:"flex", alignItems:"center", height:"100vh"}}>
            <Box style={{display:"flex", alignItems:"center", borderRadius:"15px", overflow:"hidden", width:"100%", height:"80%", boxShadow:"5px 5px 28px 1px rgba(0,0,0,0.67)"}}>
                <Box sx={{flex: 1, background:"white", overflow:"hidden", height:"100%"}}>
                    {classNameApp(location) === "login" ? <img src="../assets/istockphoto-1049109830-1024x1024.jpg" alt="immagine psicadelica" style={{width:"auto", height:"100%"}}/> : classNameApp(location) === "signin" ? <img src="../assets/istockphoto-1371441366-1024x1024.jpg" alt="immagine psicadelica" style={{width:"auto", height:"100%", marginLeft:"-50%"}}/> : <img src="../assets/istockphoto-1226476839-1024x1024.jpg" alt="immagine psicadelica" style={{width:"auto", height:"100%", marginLeft:"-100%"}}/>}
                </Box>
                <Box sx={{flex: 2, width:"100%", background:"white", display:"flex", alignItems:"center", height:"100%"}}>
                    <Outlet/>
                </Box>
            </Box>
        </Container>
    );
}
