import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Link,
  Divider,
} from "@mui/material";
import api from "../../api/axios";
import { generatePath } from "react-router-dom";

export default function LoginForm() {
  const [form, setForm] = useState({
    // username: "",
    // password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/signIn", form, { withCredentials: true });
      const user = res.data.data.userResponseDto;

      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "ADMIN") {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/profile";
      }

    } catch (err) {
      console.log("LOGIN ERROR => ", err);

      if (err.response?.data?.data) {
        // const validationErrors = err.response.data.data;
        // const firstError = Object.values(validationErrors)[0];
        setError(err.response.data.data);

      } else if (err.response?.data?.message) {
        setError({general:err.response.data.message});
      } else {
        setError({general:"Login failed! Please check credentials."});
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Divider sx={{ mb: 3 }} />

      <TextField
        label="Username"
        name="username"
        fullWidth
        margin="normal"
        onChange={handleChange}
      />

      <Box
        color="error.main"
        fontSize="0.75rem"
        mt={0.5}
        >
        {error.username}
      </Box>

      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        margin="normal"
        onChange={handleChange}
      />

      <Box
        color="error.main"
        fontSize="0.75rem"    
        mt={0.5}
       >
        {error.password}
       </Box>

      <Box textAlign="right" mt={1}>
        <Link underline="hover" fontSize="14px" href="#">
          Forgot password?
        </Link>
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3, py: 1.2, borderRadius: "8px" }}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Login"}
      </Button>

      <Box textAlign="center" mt={3}>
        <Typography variant="body2">
          Don't have an account?{" "}
          <Link href="/register" underline="hover">
            Register
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
