import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, InputLabel, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, SnackbarContent, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import FixedContainer from "../components/shared/FixedContainer";

export default function PatientsProfilePage() {
  const today = new Date().toISOString().slice(0, 10);

  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');
  const [healthInsurence, setHealthInsurence] = useState('');
  const [openIndentify, setOpenIndentify] = useState(true);
  const [openInsurence, setOpenInsurence] = useState(true);
  const [openAdress, setOpenAdress] = useState(true);

  const handleCPFChange = (e) => {
    const inputCPF = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedCPF = '';

    if (inputCPF.length <= 11) {
      formattedCPF = inputCPF
        .replace(/(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})/, function (_, p1, p2, p3, p4) {
          let result = p1;
          if (p2) result += '.' + p2;
          if (p3) result += '.' + p3;
          if (p4) result += '-' + p4;
          return result;
        });
    }

    setCPF(formattedCPF);
  };


  function formatRG(rg) {
    const cleanedRG = rg.replace(/\D/g, '');

    const limitedRG = cleanedRG.slice(0, 9);

    const formattedRG = limitedRG.replace(
      /^(\d{2})(\d{0,3})(\d{0,3})(\d{0,1})$/,
      function (_, p1, p2, p3, p4) {
        let result = p1;
        if (p2) result += '.' + p2;
        if (p3) result += '.' + p3;
        if (p4) result += '-' + p4;
        return result;
      }
    );

    return formattedRG;
  }
  const handleRGChange = (e) => {
    const inputRG = e.target.value;
    const formattedRG = formatRG(inputRG);
    setRG(formattedRG);
  };

  const handleChange = (event) => {
    setHealthInsurence(event.target.value);
  };

  return <>
    <FixedContainer bgColor="#F5F5F5">
      <Box
        sx={{
          display: 'flex',
          flexDirection: "column",
          width: "100%",
          gap: "20px",
          background: "#F5F5F5",
          paddingY: "25px"
        }}
      >
        <h1>Perfil de paciente</h1>
        <ListItem alignItems="center" sx={{ padding: "30px", gap: "10px", background: "#CFE8FC", borderRadius: "10px" }}>
          <ListItemAvatar>
            <Avatar alt="Gustavo" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
            primary="Gustavo Castanho"
            secondary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                (11) 99999-9999
              </Typography>
            }
          />
        </ListItem>
      </Box>
    </FixedContainer>
    <FixedContainer>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <form noValidate autoComplete="off" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Accordion style={{ borderRadius: "10px" }} expanded={openIndentify} onClick={() => setOpenIndentify(!openIndentify)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              IDENTIFICAÇÃO
            </AccordionSummary>
            <AccordionDetails sx={{ width: "100%", display: 'flex', flexDirection: "column", gap: "20px" }}>


              <TextField id="name" label="Nome" variant="outlined" />
              <TextField
                id="date"
                label="Data"
                type="date"
                variant="outlined"
                defaultValue={today}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
              />
              <TextField
                id="phone"
                label="Telefone"
                type="tel"
                variant="outlined"
              />
              <TextField id="sex" label="Sexo" variant="outlined" />
              <TextField
                id="cpf"
                label="CPF"
                type="text"
                variant="outlined"
                fullWidth
                value={cpf}
                onChange={handleCPFChange}
                inputProps={{
                  maxLength: 14,
                }}
              />
              <TextField
                id="rg"
                label="RG"
                type="text"
                variant="outlined"
                fullWidth
                value={rg}
                onChange={handleRGChange}
                inputProps={{
                  maxLength: 12,
                }}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderRadius: "10px" }} expanded={openInsurence} onClick={() => setOpenInsurence(!openInsurence)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              CONVÊNIO
            </AccordionSummary>
            <AccordionDetails sx={{ width: "100%", display: 'flex', flexDirection: "column", gap: "20px" }}>
              <SnackbarContent message="CONVÊNIO" style={{ background: "#D3D3D3", color: "black", fontWeight: "bold" }} />
              <InputLabel id="health_insurence">Selecione o modelo de convênio</InputLabel>
              <Select
                labelId="health_insurence"
                id="health_insurence_select"
                value={healthInsurence}
                label="Convênio"
                onChange={handleChange}
              >
                <MenuItem value={10}>Particular</MenuItem>
                <MenuItem value={20}>Público</MenuItem>
                <MenuItem value={30}>Híbrido</MenuItem>
              </Select>
              <TextField id="plane" label="Plano" variant="outlined" />
              <TextField id="walletPlane" label="Carteirinha" variant="outlined" />
              <TextField
                id="validateDate"
                label="Validade"
                type="date"
                variant="outlined"
                defaultValue={today}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ borderRadius: "10px" }} expanded={openAdress} onClick={() => setOpenAdress(!openAdress)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              ENDEREÇO
            </AccordionSummary>
            <AccordionDetails sx={{ width: "100%", display: 'flex', flexDirection: "column", gap: "20px" }}>
              <TextField id="addres" label="Endereço" variant="outlined" />
              <TextField id="complement" label="Complemento" variant="outlined" />
              <TextField id="cep" label="CEP" variant="outlined" />
              <TextField id="bairro" label="Bairro" variant="outlined" />
              <TextField id="cidade" label="Cidade" variant="outlined" />
              <TextField id="estado" label="Estado" variant="outlined" />
            </AccordionDetails>
          </Accordion>
        </form>
        <Stack direction="row" alignItems={"center"} justifyContent={"flex-end"} gap={"10px"} paddingTop={"20px"} spacing={2}>
          <Link to={"/patients"}>
            <Button variant="outlined" startIcon={<ArrowBackIcon />}>
              Voltar
            </Button>
          </Link>
          <Button variant="contained" endIcon={<DownloadDoneIcon />}>
            Salvar
          </Button>
        </Stack>
      </Box>
    </FixedContainer >
  </>
}