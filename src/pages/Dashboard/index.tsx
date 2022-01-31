import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { verify } from "crypto";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";


interface Props {
  slip: {
    advice: string;
    id: number;
  };
}

function Dashboard() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSendAdvice = () => {
    api
      .get<Props>("/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
        setLoading(true);
        setOpen(true);
      })
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} md={12}>
          <Container>
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "2rem",
                padding: "0 1rem",
              }}
            >
              <div>
                <Typography sx={{ textAlign: "center" }} variant="h1">
                  How it works
                </Typography>
                <Typography variant="subtitle1">
                  If you need some advice to make your day better you're in the
                  right place;
                </Typography>
              </div>

              <Button
                variant="contained"
                color="secondary"
                onClick={handleSendAdvice}
              >
                Get your advice
              </Button>

              {loading ? (
                <TextField
                  disabled={true}
                  color="primary"
                  sx={{ width: "80%" }}
                  id="advice-id"
                  value={advice}
                  label="Your advice is..."
                  variant="outlined"
                />
              ) : (
                <Typography>
                  Click on the button above and get your advice...{" "}
                </Typography>
              )}
            </Paper>
          </Container>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          HEYYY! Now you can copy your advice. Enjoy it!!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Dashboard;
