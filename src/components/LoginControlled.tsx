import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, Container, FormControlLabel, FormGroup, Typography } from '@mui/material';

export default function LoginControlled() {

    const [form, setForm] = useState({
        username: "Filippo",
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

    return (
        <Container maxWidth="sm">
            <Box>
                <Typography variant='h3' component="div">Login</Typography>
            </Box>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            >
                <FormGroup>
                <TextField label="Username" variant="standard" type={"text"} name={"username"} onChange={hadlerChange} value={form.username}/>
                <TextField label="Password" variant="standard" type={"password"}  name={"password"} onChange={hadlerChange} value={form.password}/>
                <FormControlLabel control={<Checkbox size='small' />} label="Resta Connesso" disabled sx={{m:0.1}}/>
                </FormGroup>
            </Box>
            <Box>
                <Button variant='contained' fullWidth size='large' type='button'>Login</Button>
            </Box>
        </Container>
    );
}
