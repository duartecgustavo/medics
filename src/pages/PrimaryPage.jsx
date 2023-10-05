import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import medicoImage from "../assets/imagem1.png";
import imgCard1 from "../assets/imagemCard1.png";
import imgCard2 from "../assets/imagemCard2.png";
import imgCard3 from "../assets/imagemCard3.png";
import imgDoutora from "../assets/doutora.png";
import imgConsulta from "../assets/consulta.png";
import imgIdosa from "../assets/idosa.png";
import FixedContainer from "../components/shared/FixedContainer";
import Navbar from "../components/shared/Navbar";
import Card from "../components/shared/Card";
import Divider from "@mui/material/Divider";

export default function PrimaryPage() {
  return (
    <>
      <Navbar />
      <FixedContainer>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            display={"flex"}
            gap={"20px"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h3" gutterBottom>
              Bem Vindo!
            </Typography>
            <Typography variant="h5" gutterBottom>
              Essa área foi idealizada para que você posso gerenciar sua
              clínica, acessar a lista de médicos, consultas e pacientes.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div>
              {" "}
              <img
                style={{ width: "100%" }}
                src={medicoImage}
                alt="medico"
                loading="lazy"
              />
            </div>
          </Grid>
        </Grid>
      </FixedContainer>
      <Divider sx={{ background: "black" }} />
      <FixedContainer>
        <Grid container spacing={2}>
          <Grid item display={"flex"} justifyContent={"center"} xs={4}>
            <Card title="Ultimas noticias Covid19" imgSrc={imgCard1} />
          </Grid>
          <Grid item display={"flex"} justifyContent={"center"} xs={4}>
            <Card title="Vacine-se" imgSrc={imgCard2} />
          </Grid>
          <Grid item display={"flex"} justifyContent={"center"} xs={4}>
            <Card title="Aniversariante SUS" imgSrc={imgCard3} />
          </Grid>
        </Grid>
      </FixedContainer>
      <Divider sx={{ background: "black" }} />
      <FixedContainer>
        <Grid container spacing={2}>
          <Grid item display={"flex"} justifyContent={"center"} xs={4}>
            <Card title="Médicos" imgSrc={imgDoutora} />
          </Grid>
          <Grid item display={"flex"} justifyContent={"center"} xs={4}>
            <Card title="Consulta" imgSrc={imgConsulta} />
          </Grid>
          <Grid item display={"flex"} justifyContent={"center"} xs={4}>
            <Card title="Pacientes" imgSrc={imgIdosa} />
          </Grid>
        </Grid>
      </FixedContainer>
    </>
  );
}
