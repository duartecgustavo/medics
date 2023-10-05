import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Avatar, Box, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FixedContainer from "../components/shared/FixedContainer";

let patients = [
  {
    avatar: "G",
    name: "Gustavo",
    phone: "(11) 99999-9999"
  },
  {
    avatar: "L",
    name: "Leila",
    phone: "(11) 66666-6666"
  },
  {
    avatar: "C",
    name: "Claudemir",
    phone: "(11) 55555-5555"
  },
  {
    avatar: "V",
    name: "Vinicius",
    phone: "(11) 44444-4444"
  },
  {
    avatar: "R",
    name: "Renada",
    phone: "(11) 33333-3333"
  },
  {
    avatar: "O",
    name: "Otavio",
    phone: "(11) 22222-2222"
  },
  {
    avatar: "L",
    name: "Lucas",
    phone: "(11) 11111-1111"
  },
  {
    avatar: "G",
    name: "Gustavo",
    phone: "(11) 99999-9999"
  },
  {
    avatar: "L",
    name: "Leila",
    phone: "(11) 66666-6666"
  },
  {
    avatar: "C",
    name: "Claudemir",
    phone: "(11) 55555-5555"
  },
  {
    avatar: "V",
    name: "Vinicius",
    phone: "(11) 44444-4444"
  },
  {
    avatar: "R",
    name: "Renada",
    phone: "(11) 33333-3333"
  },
  {
    avatar: "O",
    name: "Otavio",
    phone: "(11) 22222-2222"
  },
  {
    avatar: "L",
    name: "Lucas",
    phone: "(11) 11111-1111"
  },
]

export default function PatientsPage() {
  return <>
    <FixedContainer bgColor="#F5F5F5">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '60px',
          width: "100%",
          maxWidth: '100%',
          background: "#F5F5F5",
          paddingY: "60px"
        }}
      >
        <h1>Pesquisa por pacientes</h1>
        <TextField id="filled-basic" label="Pesquisar por paciente" variant="filled" />
      </Box>
    </FixedContainer>
    <Divider sx={{ background: "black" }} />
    <FixedContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '20px',
          width: "100%",
          maxWidth: '100%',
          background: "#cfe8fc",
          paddingY: "40px"
        }}
      >

        <h1>Pacientes</h1>

        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            borderRadius: "20px",
            paddingBottom: "50px",
            maxHeight: "600px",
            overflowY: "scroll",
          }}>
          {patients.map((patient => {
            return <>
              <ListItem alignItems="center" sx={{ padding: "30px", gap: "10px" }}>
                <ListItemAvatar>
                  <Avatar alt={patient.avatar} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                  primary={patient.name}
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {patient.phone}
                    </Typography>
                  }
                />
                <Link to={"/patientProfile"}>
                  <IconButton aria-label="goPatient">
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Link>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          }))}
        </List>
        <Stack direction="row" alignItems={"center"} justifyContent={"flex-end"} gap={"10px"} paddingTop={"20px"} spacing={2}>
          <Link to={"/"}>
            <Button variant="outlined" startIcon={<ArrowBackIcon />}>
              Voltar
            </Button>
          </Link>
          <Link to={"/registerPatient"}>
            <Button variant="contained" style={{ width: "fit-content" }} endIcon={<HowToRegIcon />}>
              Cadastrar novo paciente
            </Button>
          </Link>
        </Stack>
      </Box>
    </FixedContainer>
    <Divider sx={{ background: "D3D3D3" }} />
  </>
}