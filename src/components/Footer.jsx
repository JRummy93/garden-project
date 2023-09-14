import { Grid, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer className="footer">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={3}>
            <Link
              component="button"
              underline="hover"
              color="primary.dark"
              href="#"
            >
              (888) 777 - 7878
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="p" color={"primary.dark"}>
              © 2023 Garden Project
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link
              component="button"
              underline="hover"
              color="primary.dark"
              href="#"
            >
              growise@email.com
            </Link>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
