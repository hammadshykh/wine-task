import { Box } from "@chakra-ui/react";
import React from "react";

export const Container = ({ children }) => {
 return (
  <Box w="95%" m="0 auto">
   {children}
  </Box>
 );
};
