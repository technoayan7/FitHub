import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    console.log(bodyPart)
    return (
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop: bodyPart === item ? "4px solid #6366f1" : "",
          // background: '#111827',
          backgroundImage:
            "linear-gradient(to right top, #0b0537, #1a1362, #36198f, #581bbd, #8012eb)",
          borderBottomLeftRadius: "20px",
          width: { lg: "270px", xs: "100px" },
          height: { lg: "280px", xs: "140px" },
          cursor: "pointer",
          gap: { lg: "47px", xs: "30px" },
        }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: "1800", left: 100, behavior: "smooth" });
        }}
      >
        <img
          src={Icon}
          alt="dumbell"
          style={{
            width: "45px",
            height: "45px",
          }}
        />
        <Typography
          sx={{ fontSize: { lg: "25px", xs: "20px" } }}
          fontWeight="bold"
          color="#FFF"
          textTransform="capitalize"
          textAlign="center"
        >
          {item}
        </Typography>
      </Stack>
    );
}

export default BodyPart