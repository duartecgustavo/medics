/* eslint-disable react/prop-types */
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function FixedContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ padding: "0px !important" }}>
        <Box py={4} sx={{ bgcolor: "#cfe8fc", height: "auto", width: "100vw" }}>
          {props.children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
