import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import BuyButton from "../../Common/BuyButton";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";

export const Footer = () => {
 return (
  <Box color="white" pb="2rem" mt='1rem'>
   <Flex alignItems="center" flexWrap="wrap" justifyContent="space-between">
    <Box w={[,'','200px','400px',"400px"]}>
     <Text fontSize="20px" m="1rem">
      Lorem ipsum dolor sit amet consectetur. Tortor arcu arcu quam scelerisque
      arcu
     </Text>
    </Box>
    <Box>
     <BuyButton px="4rem" borderRadius="99px" py="1rem">
      BUY Now
     </BuyButton>
    </Box>
    <Box w={['','','400px',"400px"]}>
     <Flex justifyContent="end" gap="2rem">
      {[<SlSocialFacebook />, <SlSocialInstagram />, <TiSocialTwitter />].map(
       (icon) => (
        <Text
         key={icon}
         p="8px"
         borderRadius="99px"
         color="black"
         fontWeight="bold"
         bg="#bc0b29"
        >
         {icon}
        </Text>
       )
      )}
     </Flex>
    </Box>
   </Flex>
  </Box>
 );
};
