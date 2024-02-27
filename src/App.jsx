import { AspectRatio, Box, Image } from "@chakra-ui/react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./Components/Layout";
import { Home, Industry, Location, OurHistory, ShopNow } from "./pages";
import { Container } from "./Components/Layout/Container";
import DrawerExample from "./Components/Drawer";

function App() {
 return (
  <Box bg="#1c1819" minH="100vh" h="100%" color="white">
   <Container>
    <Box display={["none", "none", "none", "block", "block"]}>
     <Header />
    </Box>
    <Box display={["block", "block", "block", "none", "none"]}>
     <DrawerExample />
    </Box>
    <Box pos="relative">
     <Box
      pos="fixed"
      left="25%"
      top="35%"
      w={["300px", "400px", "500px", "500px", "900px"]}
     >
      <Image src="/Botella.png" />
     </Box>
     <Home />
     <OurHistory />
     <Industry />
    </Box>
    <Footer />
   </Container>
  </Box>
 );
}

export default App;
