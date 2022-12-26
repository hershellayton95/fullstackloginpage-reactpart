import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, Container, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SigninControlled() {

    const [form, setForm] = useState({
        firstname: "Filippo",
        lastname: "Di Marco",
        email: "filidm5795@gmail.com",
        username: "filippo",
        password: "password1"
    });

    const hadlerChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        setForm(d =>({
            ...d,
            [name]: value
        }))
    }

    const hadleClick = () => {
        console.log(form);
    }


    return (
        <Container maxWidth="sm">
            <Box>
                <Typography variant='h3' component="div">Sign In</Typography>
            </Box>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1},
            }}
            noValidate
            autoComplete="off"
            >
                <FormGroup>
                <TextField label="Firstname" variant="standard" type={"text"} name={"firstname"} onChange={hadlerChange} value={form.firstname}/>
                <TextField label="Lastname" variant="standard" type={"text"}  name={"lastname"} onChange={hadlerChange} value={form.lastname}/>
                <TextField label="E-mail" variant="standard" type={"text"}  name={"email"} onChange={hadlerChange} value={form.email}/>
                </FormGroup>
                <FormGroup>
                <TextField label="Username" variant="standard" type={"text"} name={"username"} onChange={hadlerChange} value={form.username}/>
                <TextField label="Password" variant="standard" type={"password"}  name={"password"} onChange={hadlerChange} value={form.password}/>
                <FormControlLabel control={<Checkbox size='small' />} label="Resta Connesso" disabled sx={{m:0.1}}/>
                </FormGroup>
            </Box>
            <Box>
                <Button variant='contained' fullWidth size='large' type='button' onClick={hadleClick}>Sign in</Button>
                <FormHelperText>Sei già registrato? <Link to="/user/login">Login!</Link></FormHelperText>
            </Box>
        </Container>
    );
}
