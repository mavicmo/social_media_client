import Form from "./Form";
import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
function LoginPage() {
  const theme = useTheme();
  const isNonMobilecreens = useMediaQuery("(min-width: 100px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor="{theme.palette.background.alt}"
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>
      <Box
        width={isNonMobilecreens ? "50" : "93"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem" }}
        ></Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;
