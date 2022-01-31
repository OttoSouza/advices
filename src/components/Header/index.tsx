import { Container, Typography, useTheme, Paper } from "@mui/material";


function Header() {
  const theme = useTheme()

  return (
    <Paper sx={{ backgroundColor: theme.palette.primary.light, width: "100%", padding: "1.4rem 0", borderRadius: 0}} elevation={3} >
      <Container>
        <Typography variant="h5" sx={{textAlign: "center", color: "white", fontWeight: "bold", letterSpacing: "0.5rem"}}>Advice management</Typography>
      </Container>
    </Paper>
  );
}
export default Header;
