import React, { useState } from "react";
import { Center, Text, HStack } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import AnimeFullDetails from "./Components/AnimeFullDetails";

function App() {
  const [imageURL, setImageURL] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [rating, setRating] = useState("");
  const [score, setScore] = useState("");
  const [members, setMembers] = useState("");
  const [episode, setEpisode] = useState("");

  return (
    <>
      <HStack w="100vw" h="7vh" overflowX="hidden" bgColor="#7F00FF">
        <Center w="100%">
          <Text fontWeight="600">Anime Search App</Text>
        </Center>
      </HStack>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              setImageURL={setImageURL}
              setSynopsis={setSynopsis}
              setRating={setRating}
              setScore={setScore}
              setMembers={setMembers}
              setEpisode={setEpisode}
            />
          }
        />

        <Route
          path="/anime/:title"
          element={
            <AnimeFullDetails
              imageURL={imageURL}
              synopsis={synopsis}
              rating={rating}
              score={score}
              members={members}
              episode={episode}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
