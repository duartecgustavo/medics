import { Box, Divider } from "@mui/material";
import Container from "@mui/material/Container";


export default function Footer() {
  return <>
    <Divider sx={{ background: "black", width: "100%" }} />
    <Box sx={{ height: "auto", display: "flex", flexDirection: "column", background: "#F5F5F5", alignItems: "center" }}>
      <Container sx={{ bgcolor: "#F5F5F5", justifyContent: "center", display: "flex", gap: "100px", padding: "100px" }}>
        <h3 style={{ cursor: "pointer" }}>Sobre nós</h3>
        <h3 style={{ cursor: "pointer" }}>Contato</h3>
        <h3 style={{ cursor: "pointer" }}>Newsletter</h3>
        <h3 style={{ cursor: "pointer" }}>Mapa</h3>
      </Container>
      <Divider sx={{ background: "rgba(0, 0, 0, 0)", width: "80%" }} />
      <Container sx={{ bgcolor: "#F5F5F5", justifyContent: "center", display: "flex", gap: "100px", padding: "100px" }}>
        <p style={{ cursor: "pointer" }}>Politica de Privacidade</p>
        <p style={{ cursor: "pointer" }}>Termos de Utilização</p>
        <p style={{ cursor: "pointer" }}>Politica de cookies</p>
        <p style={{ cursor: "pointer" }}>Declaração de Acessibilidade</p>
      </Container>
    </Box>

  </>
}