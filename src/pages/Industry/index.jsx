import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import BuyButton from "../../Common/BuyButton";

const Industry = () => {
 return (
  <Box id="our-history" pb={{md:"20rem"}} my="2rem">
   <Flex
   pos="relative"
    flexDir={["column", "column", "row", "row", "row"]}
    alignItems="center"
    justifyContent={[
     "center",
     "center",
     "center",
     "space-between",
     "space-between",
    ]}
   >
    <Box>
     <Box mt="1rem" pos={{ md: "absolute" }} left="0" top="0" w={{ md: "600px" }}>
      <Heading
       textTransform="uppercase"
       lineHeight=".9"
       color="#9F0B2B"
       zIndex="2"
       fontSize={["50px", "80px", "100px", "110px", "110px"]}
       fontWeight="bold"
      >
       Leaving a mark in the industry
      </Heading>
      <BuyButton px="2rem" borderRadius="99px" w="50%" mt="2rem">
       Read Our History
      </BuyButton>
     </Box>
    </Box>
    <Box  w={{ md: "500px" }}>
     <Heading
      textTransform="uppercase"
      lineHeight=".9"
      zIndex="-2"
      fontSize={["50px", "80px", "100px", "130px", "130px"]}
      fontWeight="bold"
      py={['5rem','5rem','0',"0","0"]}
     >
      THE BEST TASTE
     </Heading>
    </Box>
   </Flex>
  </Box>
 );
};

export default Industry;
