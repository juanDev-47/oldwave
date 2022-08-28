import { Box, Button, Container, Link, TextField } from "@mui/material";
import React from "react";
import bglogin from "../../assets/icons/bglogin.png";
import user from "../../assets/icons/login-icon.png";
import passicon from "../../assets/icons/passicon.png";
import ola1 from "../../assets/icons/ola1.png";
import ola2 from "../../assets/icons/ola2.png";
import oldwaveicon from "../../assets/logo/oldwave-logo-vertical.png";
import "./login.css";

const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      component="main"
      sx={{
        backgroundImage: { xs: `url(${bglogin})`, md: "none" },
        backgroundSize: { xs: "cover", md: "" },
        backgroundPosition: { xs: "center", md: "" },
        background: { xs: "" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
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
          marginTop: { md: "10%" },
          paddingTop: { xs: "25%", md: "20px" },
          paddingBottom: { xs: "0", md: "20px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%", md: "50%" },
          backgroundImage: { xs: "none", md: `url(${bglogin})` },
          backgroundSize: { xs: "cover", md: "" },
          backgroundPosition: { xs: "center", md: "" },
          borderRadius: { xs: "0", md: "10px" },
        }}
      >
        <Link href="/">
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
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
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
              name="password"
              label="Password"
              type="password"
              id="password"
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
        </Box>
      </Box>
      <Box sx={{width: '100%', display: "flex", justifyContent: 'end' }}>
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
