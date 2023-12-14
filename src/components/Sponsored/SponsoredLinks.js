// SponsoredLinks.js
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { info } from "../../info/Info";

function SponsoredLinks() {
  const commonContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <Box sx={{ ...commonContainerStyles }} style={{ marginTop: "20px" }}>
      <Typography variant="h5" sx={{ marginTop: "100px" }}>Links patrocinados</Typography>
      <Stack container spacing={4}>
        {info.sponsors.map((sponsor, index) => (
          <PortfolioBlock
            key={index}
            source={sponsor.source}
            title={sponsor.title}
            isNew={sponsor.isNew}
          />
        ))}
      </Stack>
    </Box>
  );
}

function IconLink(props) {
  const { link, title } = props;
  return (
    <a href={link} target={"_blank"} rel="noopener noreferrer">
      <i /> {title}
    </a>
  );
}

function PortfolioBlock(props) {
  const { source, title, isNew} = props;
  return (
    <Box sx={{
      cursor: "pointer",
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          zIndex: "1",
          padding: ".5rem 1rem",
          opacity: isNew ? "1" : "0"
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            color: "#6C3BED",
            background: "white",
            borderRadius: ".5rem",
            fontWeight: "400",
            padding: ".1rem 1rem",
          }}
        >
          Novo!
        </Typography>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "96px",
          borderRadius: "15px",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <IconLink link={source} title={title} />
        </Box>
      </Box>
    </Box>
  );
}

export default SponsoredLinks;
