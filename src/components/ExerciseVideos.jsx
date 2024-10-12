import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos || !exerciseVideos.length) {
    return (
      <Typography
        sx={{ fontSize: { lg: "24px", xs: "18px" }, textAlign: "center", mt: 4 }}
        color="error"
      >
        No videos available for {name}. Please try again later.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, color: "#e2e4e9" }}
        fontWeight={700}
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#4864da", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        className="mycard"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "90px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos.slice(0, 9).map((item, i) => (
          <div key={i} className="card">
            <a
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderRadius: "15px" }}
                src={item.video.thumbnails[0]?.url}
                alt={item.video.title}
              />
              <Box className="exercise-video-bottom" mt={1}>
                <Typography
                  sx={{ fontSize: { lg: "23px", xs: "16px" } }}
                  fontWeight={600}
                  color="#e2e4e9"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#e2e4e9">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
