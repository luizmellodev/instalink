import React from "react";
import { Box, Typography } from "@mui/material";
import { info } from "../../info/Info";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    padding: 2,
    textAlign: "center",
  },
}));

  const hoverEffect = {
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.2)",
    },
};

function SocialLinks() {
  const classes = useStyles();

  return (
    <Box className={classes.container} flexDirection={"column"} sx={{
      marginTop: "100px"
      }}>
      <Typography
        variant="h5"
        sx={{ marginBottom: "50px" }}
      >
        Sobre mim
      </Typography>
      <Grid container spacing={1}>
        {info.social.map((social, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <SocialLinkComponent
              key={index}
              title={social.title}
              username={social.username}
              source={social.source}
              icon={social.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function SocialIcon(props) {
  const { link, icon } = props;
  return (
    <a target="_blank" aria-hidden="true" rel="noopener noreferrer" href={link}>
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

function SocialLinkComponent(props) {
  const { title, username, source, icon } = props;
  return (
    <Box sx={{cursor: "pointer"}}>
      <Box
        sx={{ ...hoverEffect,
          width: "20rem",
          height: "6rem",
          borderRadius: "15px",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <SocialIcon link={source} icon={"fa fa-instagram fa-3x"} />
        </Box>
      </Box>
      <Typography variant="h6" sx={{ ...hoverEffect, marginTop: "10px" }}>
        {title}
      </Typography>
      <Typography variant="h7" sx={{
        color: "#6b6480",
        fontWeight: "bold",
        "&:hover": {
          color: "#947edf",
        }
        }}>
        @luizmello.dev
      </Typography>
    </Box>
  );
}

export default SocialLinks;
