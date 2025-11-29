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
    username: "",
    password: "",
    role: ""
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/signUp", form);
      alert("Registration successful!");
      window.location.href = "/login";

    } catch (err) {
      if (err.response?.data?.data) {
        const validationErrors = err.response.data.data;
        // const firstError = Object.values(validationErrors)[0];
        setError(validationErrors);
        console.log("Validation Errors: ", validationErrors);
      } else {
        setError({ general: "Registration failed!" });
      }
    }
    finally {
      setLoading(false);
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
      <Box
        color="error.main"
        fontSize="0.75rem"
        mt={0.5}
      >
        {error.fullName}
      </Box>

      <TextField
        label="Username"
        name="username"
        value={form.username}
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
        value={form.password}
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
      <Box
        color="error.main"
        fontSize="0.75rem"
        mt={0.5}
      >
        {error.role}
      </Box>

      {/* {error && (
        <Typography color="error" variant="body2" mt={1}>
          {error}
        </Typography>
      )} */}

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

