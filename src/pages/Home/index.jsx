import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Home = () => {
 return (
  <Box id="home">
   <Heading
    m="0 auto"
    w="fit-content"
    textTransform="uppercase"
    color="#bc0b29"
    fontSize={["100px","150px","300px","525px", "525px" ]}
   >
    WINE
   </Heading>
  </Box>
 );
};

export default Home;
