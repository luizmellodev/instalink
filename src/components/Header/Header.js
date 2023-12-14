import React from "react";
import { Box, Typography } from "@mui/material";
import Style from "./Header.module.scss";

function Header() {
  const commonContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const gradientStyles = {
    background: "-webkit-linear-gradient(135deg, rgb(0,255,164), rgb(166,104,255))",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  };

  return (
    <Box sx={{ ...commonContainerStyles }}>
      <Box
        sx={{
          ...commonContainerStyles,
          ...gradientStyles,
          marginTop: "3rem",
        }}
        component="img"
        src="https://avatars.githubusercontent.com/u/49352785?v=4"
        alt="image of developer"
        className={Style.avatar}
        width={{ xs: "10vh", md: "14vh" }}
        height={{ xs: "10vh", md: "14vh" }}
        borderRadius="50%"
        p="0.2rem"
      />
      <Typography variant="h4" sx={{ marginTop: "20px", fontWeight: "600" }}>Luiz Mello </Typography>
      <Typography
        sx={{
          ...commonContainerStyles,
          color: "white",
          "& h1, & span": {
            fontSize: "2rem",
            margin: 0,
          },
          "& span": {
            fontSize: "1rem",
          },
        }}
      >
        <span>@luizmello.dev</span>
      </Typography>
    </Box>
  );
}

export default Header;
