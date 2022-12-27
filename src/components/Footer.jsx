import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/logo.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box mt="80px">
      <Stack
        gap="5px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="28px"
      >
        <img src={Logo} alt="logo" style={{ width: "220px", height: "65px" }} />
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          mt="10px"
          textAlign="center"
          pb="12px"
          color="#e5e7eb"
        >
          Made with 💪 by Ayan Ahmad
        </Typography>
        <Typography
          gap="20px"
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
            paddingBottom: "30px",
            fontSize: "20px",
          }}
        >
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/technoayan/"
          >
            <FaLinkedin color="#0b66c3" />
          </a>
          <a className="footer-link" href="https://twitter.com/technoayan7">
            <FaTwitter color="#1d9bf0" />
          </a>
          <a
            className="footer-link"
            href="https://www.instagram.com/iamayan.official/"
          >
            <FaInstagram color="#ea4a65" />
          </a>
          <a className="footer-link" href="https://github.com/technoayan7">
            <FaGithub color="#0c0c0c" />
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
