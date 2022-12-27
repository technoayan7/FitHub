import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/logo.png'


const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "40px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className="logo-img"
          style={{ width: "220px", height: "60px" }}
        />
      </Link>
      <Stack
        direction="row"
        alignItems="flex-end"
        sx={{ gap: { xs: "30px", md: "40px" } }}
        className="nav-items"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#e5e7eb",
            borderBottom: "3px solid #6366f1",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#e5e7eb" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar