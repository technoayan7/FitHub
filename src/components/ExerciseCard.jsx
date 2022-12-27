import React from 'react'
import { Link } from 'react-router-dom'
import { Stack,Button,Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
    const handleScroll = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="exercise-card"
      onClick={handleScroll}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            // background: "#ff6459",
            backgroundImage:
              "linear-gradient(to right top, #9c0329, #b10c28, #c51824, #d9251e, #eb3412)",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            // background: "#16a34a",
            backgroundImage:
              "linear-gradient(to right top, #299c03, #21b03c, #16c463, #0bd788, #12ebac)",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#e2e4e9"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard