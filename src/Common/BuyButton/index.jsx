import { Button } from "@chakra-ui/react";

const BuyButton = ({ children, ...props }) => {
 return (
  <Button
   _hover={{ backgroundColor: "pink" }}
   textTransform="uppercase"
   fontWeight="bold"
   variant="none"
   bg="#C10B2B"
   color="black"
   {...props}
  >
   {children}
  </Button>
 );
};

export default BuyButton;
