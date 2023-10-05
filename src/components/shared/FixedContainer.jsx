/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function FixedContainer(props) {
  return (
    <>
      <Box py={4} sx={{ background: props.bgColor || "#cfe8fc", height: "auto", display: "flex", justifyContent: "center" }}>
        <Container sx={{ padding: "0px !important", width: "100%", bgcolor: "#cfe8fc", justifyContent: "center", display: "flex" }}>
          {props.children}
        </Container>
      </Box>
    </>
  );
}
