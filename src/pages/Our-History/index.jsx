import { AspectRatio, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import BuyButton from "../../Common/BuyButton";

const OurHistory = ({ ref }) => {
 return (
  <Box id="our-history" ref={ref} my="2rem">
   <Flex
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
     <Image borderRadius="40px" src="/ourHistory.jpg" alt="naruto" objectFit="cover" />
    </Box>
    <Box mt="1rem" pos={{md:"absolute"}} right="0" w={{ md: "600px" }}>
     <Heading
      textTransform="uppercase"
      lineHeight=".9"
      color="#9F0B2B"
      zIndex="2"
      fontSize={["50px", "80px", "100px", "150px", "180px"]}
      fontWeight="bold"
     >
      Since 1960 producing non-stop
     </Heading>
     <BuyButton px="2rem" borderRadius="99px" w="50%" mt="1rem">
      Read Our History
     </BuyButton>
    </Box>
   </Flex>
   <Box w={{lg:"800px"}} textAlign="center" m="0 auto" py={['5rem','5rem','5rem',"10rem","10rem"]}>
    <Text fontSize="22px">
     Lorem ipsum dolor sit amet consectetur. Viverra fringilla imperdiet ornare
     sagittis purus ultrices pellentesque. Malesuada quis quis turpis magna
     justo lorem pellentesque feugiat. Aliquet eget.
    </Text>
    <Box>
      <Image src="/" />
    </Box>
   </Box>
  </Box>
 );
};

export default OurHistory;
