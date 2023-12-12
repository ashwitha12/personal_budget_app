import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <Hero />
      <Container component="main" sx={{ flexGrow: 1, textAlign: "center", height: "50vh" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5">Track your Expenses</Typography>
              <Typography variant="body1">
                Not sure where are you overspending your money? Try this app to track your Expenses.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5">Personalized Alerts</Typography>
              <Typography variant="body1">
                You can set Alerts for various Categories in this Application. And you can get this for free.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
