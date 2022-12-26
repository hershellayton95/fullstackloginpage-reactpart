import {
  Box,
  Button,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  FormHelperText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Profile() {

  const form = {
    firstname: "Filippo",
    lastname: "Di Marco",
    email: "filidm5795@gmail.com",
    username: "filippo",
    password: "password1",
  };

  const navigate = useNavigate();

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const hadleClick = () => {
    navigate("/user")
  }

  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box
        style={{
          width: "100%",
          height: "25%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
        <Avatar
          {...stringAvatar(`${form.firstname + form.lastname}`)}
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <Box>
        <Typography variant="h3" component="div">
          {form.firstname + form.lastname}
        </Typography>
      </Box>
      <Box
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemText primary="Filippo" secondary="First Name" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Di Marco" secondary="Last Name" />
          </ListItem>
          <ListItem>
            <ListItemText primary="filidm5795@gmail.com" secondary="Email" />
          </ListItem>
        </List>
      </Box>

      <Box style={{width: "50%"}}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          type="button"
          color="error"
          onClick={hadleClick}>
          Login
        </Button>
        <FormHelperText>
          <Link to="/user/">Elimina Account</Link>
        </FormHelperText>
      </Box>
    </Box>
  );
}

export default Profile;
