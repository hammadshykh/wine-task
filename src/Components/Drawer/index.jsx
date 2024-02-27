import {
 Box,
 Button,
 Drawer,
 DrawerBody,
 DrawerCloseButton,
 DrawerContent,
 DrawerFooter,
 DrawerOverlay,
 Flex,
 MenuIcon,
 useDisclosure,
} from "@chakra-ui/react";
import BuyButton from "../../Common/BuyButton";
import Logo from "../../Common/Logo";
import { Nav } from "../Layout";
import React from "react";
import {AiOutlineMenu} from "react-icons/ai"

function DrawerExample() {
 const { isOpen, onOpen, onClose } = useDisclosure();
 const btnRef = React.useRef();

 return (
  <>
   <Button ref={btnRef} colorScheme="none" onClick={onOpen} pos="fixed" left="0" zIndex="9997">
    <AiOutlineMenu fontSize="30px"/>
   </Button>
   <Drawer
    isOpen={isOpen}
    placement="left"
    onClose={onClose}
    finalFocusRef={btnRef}
   >
    <DrawerOverlay />
    <DrawerContent>
     <DrawerCloseButton />
     <DrawerBody bg="#1c1819">
      <Box p="10px">
       <Flex
        alignItems="center"
        flexDir="column"
        justifyContent="space-between"
       >
        <Box>
         <Logo />
        </Box>
        <Box>
         <Nav dir="column" />
        </Box>
        <Box>
         <BuyButton px="2.5rem" borderRadius="99px">
          Buy Now
         </BuyButton>
        </Box>
       </Flex>
      </Box>
     </DrawerBody>
     <DrawerFooter bg="#1c1819">
      <Button variant="outline" mr={3} onClick={onClose}>
       Cancel
      </Button>
      <Button colorScheme="blue">Save</Button>
     </DrawerFooter>
    </DrawerContent>
   </Drawer>
  </>
 );
}

export default DrawerExample;
