import { Box, Card, CardContent } from "@mui/material";
import RegisterForm from "../Components/auth/RegisterForm";
import logo from  "../public/assets/logo.png";

export default function RegisterPage() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: "linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC)",
      }}
    >
      <Card
        sx={{
          width: 420,
          padding: 3,
          borderRadius: "20px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent>
        
          <Box textAlign="center" mb={3}>
            <img
              src={logo}
              alt="SmartBiz Logo"
              style={{ width: "160px", marginBottom: "8px" }}
            />
           
          </Box>

          <RegisterForm />
        </CardContent>
      </Card>
    </Box>
  );
}
