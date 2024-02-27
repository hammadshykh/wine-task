import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../../Common/Logo";
import { Nav } from "./Nav";
import BuyButton from "../../Common/BuyButton";

export const Header = ({onrefChange}) => {
 return (
  <Box p="10px">
   <Flex alignItems="center" justifyContent="space-between">
    <Box>
     <Logo />
    </Box>
    <Box>
     <Nav onrefChange={onrefChange} />
    </Box>
    <Box>
     <BuyButton px="2.5rem" borderRadius="99px">Buy Now</BuyButton>
    </Box>
   </Flex>
  </Box>
 );
};
