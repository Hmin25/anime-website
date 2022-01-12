import React from "react";
import { Center, Text, HStack } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./Components/MainPage";
import AnimeFullDetails from "./Components/AnimeFullDetails";

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

      <Routes>
        <Route path="/anime/:name" element={<AnimeFullDetails/>} />
        {/* <Route path="/anime/:name" element={AnimeFullDetails} /> */}
        {/* <Route path="/detail" element={AnimeFullDetails} /> */}
      </Routes>
    </>
  );
}

export default App;
