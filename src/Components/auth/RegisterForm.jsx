import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Link
} from "@mui/material";
import api from "../../api/axios";

export default function RegisterForm() {
  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    password: "",
    role: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    setError("");

    try {
      const res = await api.post("/signup", form, {
        withCredentials: true, // IMPORTANT
        headers: {
          "Content-Type": "application/json"
        }
      });

      alert("Registration successful!");
      window.location.href = "/login";
      
    } catch (err) {
      console.log("REGISTER ERROR:", err);
      setError("Registration failed. Please check your inputs.");
    }
  };

  return (
    <Box>
      <TextField
        label="Full Name"
        name="fullName"
        value={form.fullName}
        fullWidth
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        label="Username"
        name="userName"
        value={form.userName}
        fullWidth
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={form.password}
        fullWidth
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        select
        label="Select Role"
        name="role"
        value={form.role}
        fullWidth
        margin="normal"
        onChange={handleChange}
      >
        <MenuItem value="ADMIN">ADMIN</MenuItem>
        <MenuItem value="EDITOR">EDITOR</MenuItem>
      </TextField>

      {error && (
        <Typography color="error" variant="body2" mt={1}>
          {error}
        </Typography>
      )}

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleRegister}
      >
        Register
      </Button>

      <Box textAlign="center" mt={2}>
        <Typography variant="body2">
          Already have an account?{" "}
          <Link href="/login" underline="hover">
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

