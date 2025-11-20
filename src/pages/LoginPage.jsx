import { Box, Card, CardContent, Typography } from "@mui/material";
import LoginForm from "../Components/auth/LoginForm";
import logo from "../public/assets/logo.png";

export default function LoginPage() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#f4f8fb",
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: 380, md: 400 },
          p: 4,
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Box textAlign="center" mb={2}>
            <img
              src={logo}
              alt="SmartBiz Logo"
              style={{
                width: "130px",
                marginBottom: "10px",
              }}
            />
          </Box>

          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="700"
            mb={1}
            color="#033b5c"
          >
            Welcome Back
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            mb={3}
            color="text.secondary"
          >
            Sign in to continue to SmartBiz
          </Typography>

          <LoginForm />
        </CardContent>
      </Card>
    </Box>
  );
}
