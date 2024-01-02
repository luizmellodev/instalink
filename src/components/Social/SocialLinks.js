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

function SocialLinks() {
  const classes = useStyles();

  return (
    <Box className={classes.container} flexDirection={"column"}>
      <Typography variant="h5" sx={{ marginTop: "240px", marginBottom: "50px" }}>
        Sobre mim
      </Typography>
      <Grid container spacing={3}>
        {info.social.map((social, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} display={"flex"} justifyContent={"center"}>
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
    <Box
      sx={{
        cursor: "pointer",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
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
          <SocialIcon link={source} icon={"fa fa-instagram fa-3x"} />
        </Box>
      </Box>
      <Typography variant="h4" sx={{ marginTop: "10px" }}>
        {title}
      </Typography>
      <Typography variant="h6" sx={{ color: "gray" }}>
        @luizmello.dev
      </Typography>
    </Box>
  );
}

export default SocialLinks;
