import React from "react";
import { Center, ChakraProvider, HStack } from "@chakra-ui/react";
import "./App.css";
import {
  Spacer,
  Box,
  Text,
  VStack,
  Flex,
  InputRightAddon,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <>
      <HStack w="100vw" h="7vh" overflowX="hidden" bgColor="#7F00FF">
        <Center w="100%">
          <Text fontWeight="600">Anime Search App</Text>
        </Center>
      </HStack>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
