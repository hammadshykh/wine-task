import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const navItems = [
 { name: "Home", link: "/" },
 { name: "SHOP NOW", link: "/shopNow" },
 { name: "Industry", link: "/industry" },
 { name: "OUR HISTORY", link: "our-history" },
 { name: "LOCATION", link: "home" },
];

export const Nav = ({dir,onrefChange}) => {
 return (
  <Box>
   <Tabs color="#C10B2B">
    <TabList borderBottom="none" flexDir={dir}>
     {navItems.map((item) => (
      <Tab onClick={onrefChange} fontSize="18px" textTransform="uppercase" fontWeight="bold">
       <Link to={item.link}>{item.name}</Link>
      </Tab>
     ))}
    </TabList>
   </Tabs>
  </Box>
 );
};
