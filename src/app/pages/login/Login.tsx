import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
// @ts-ignore
import bglogin from "../../assets/icons/bglogin.png";
// @ts-ignore
import user from "../../assets/icons/login-icon.png";
// @ts-ignore
import passicon from "../../assets/icons/passicon.png";
// @ts-ignore
import ola1 from "../../assets/icons/ola1.png";
// @ts-ignore
import ola2 from "../../assets/icons/ola2.png";
// @ts-ignore
import oldwaveicon from "../../assets/logo/oldwave-logo-vertical.png";
import "./login.css";
// @ts-ignore
import { loginToSend } from "./services/loginServices.ts";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
// @ts-ignore
import { useContextProvider } from "../../context/contextProvider.tsx";

const Login = () => {
  const navigate = useNavigate();
  const { setSession, session } = useContextProvider();
  const [email, setEmail] = React.useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const DTO = {
      userName: data.get("email"),
      password: data.get("password"),
    };
    const dataLogin = loginToSend(DTO);
    dataLogin.then((res) => {
      setSession(res);
      if (res.message === "Ok") {
        swal(`Bienvenido `, "Has iniciado sesión correctamente", "success");
        navigate("/home");
      } else {
        swal("Error", "Usuario o contraseña incorrectos", "error");
        navigate("/login");
      }
    });
  };

  return (
    <Container
      component="main"
      sx={{
        backgroundColor: { sm: "#000000", md: "#FFFFFF" },
        backgroundImage: { xs: `url(${bglogin})`, md: "none" },
        backgroundSize: { xs: "cover", md: "" },
        backgroundPosition: { xs: "center", md: "" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* wave1 photo */}
      <Box
        component="img"
        sx={{
          position: "absolute",
          left: "0",
          height: { xs: "150px", md: "300px" },
          width: { xs: "200px", md: "350px" },
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        src={ola2}
        alt="ola2"
      />
      <Box
        component="div"
        sx={{
          marginTop: { md: "5%" },
          paddingTop: { xs: "25%", md: "20px" },
          paddingBottom: { xs: "0", md: "20px" },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "center",
          width: { xs: "100%", md: "50%" },
          backgroundImage: { xs: "none", md: `url(${bglogin})` },
          backgroundSize: { xs: "cover", md: "" },
          backgroundPosition: { xs: "center", md: "" },
          borderRadius: { xs: "0", md: "10px" },
          backgroundColor: { md: "white" },
        }}
      >
        <Link to={"/"}>
          <Box
            component="img"
            sx={{
              height: 100,
              width: 150,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            src={oldwaveicon}
            alt="OldWave"
          />
        </Link>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              sx={{
                marginTop: "8px",
                backgroundColor: "#FFFFFF",
                padding: "10px",
                height: "45px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
              src={user}
              alt="user"
            />

            <TextField
              type="email"
              margin="normal"
              required
              onChange={(e) => setEmail({ ...email, username: e.target.value })}
              fullWidth
              id="email"
              name="email"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Box
              component="img"
              sx={{
                backgroundColor: "#FFFFFF",
                paddingX: "12px",
                marginBottom: "8px",
                height: "45px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
              src={passicon}
              alt="passicon"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => setEmail({ ...email, password: e.target.value })}
              name="password"
              type="password"
              id="password"
            />
          </Box>
          {email.username && email.password ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
          ) : null}
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          alignItems: "end",
          display: "flex",
          justifyContent: "end",
        }}
      >
        {/* wave2 photo */}
        <Box
          component="img"
          sx={{
            height: { xs: "150px" },
            width: { xs: "200px" },
          }}
          src={ola1}
          alt="ola1"
        />
      </Box>
    </Container>
  );
};

export default Login;
