import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Box,
  Text,
  Center,
  Image,
  InputRightAddon,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import Axios from "axios";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import AnimeFullDetails from "./AnimeFullDetails";

export default function MainPage({
  setImageURL,
  setSynopsis,
  setRating,
  setScore,
  setMembers,
  setEpisode,
}: any) {
  const [allAnimeData, setAllAnimeData] = useState<any>("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function getAnimeData() {
      if (searchInput !== "") {
        await Axios.get(
          `https://api.jikan.moe/v3/search/anime?q=${searchInput.toLowerCase()}`
        )
          .catch((err) => {
            console.log(err);
          })
          .then((res: any) => {
            if (res && res.data) {
              setAllAnimeData(res.data.results);
            }
          });
      }
    }

    getAnimeData();
  }, [searchInput]);

  const displayAnimeList = () => {
    return (
      <Pagination
        animeList={allAnimeData}
        itemsPerPage={8}
        setImageURL={setImageURL}
        setSynopsis={setSynopsis}
        setRating={setRating}
        setScore={setScore}
        setMembers={setMembers}
        setEpisode={setEpisode}
      />
    );
  };

  useEffect(() => {
    displayAnimeList();
  }, [searchInput, allAnimeData]);

  return (
    <>
      <Stack pt={7} align="center" overflowX="hidden">
        <InputGroup borderRadius="15px" size="md" w="40vw">
          <Input
            color="white"
            id="searchBar"
            // type="search"
            variant="filled"
            placeholder="Search Anime with name"
            name="searchKeyword"
            onChange={(e: any) => {
              setTimeout(() => {
                setSearchInput(e.target.value);
              }, 500);
            }}
          />
          <InputRightAddon
            borderColor="transparent"
            bgColor="#7F00FF"
            cursor="pointer"
            onClick={() => {
              displayAnimeList();
            }}
          >
            <Search2Icon color="white" />
          </InputRightAddon>
        </InputGroup>
      </Stack>

      <Box w="70vw" h="100vh" pos="absolute" paddingLeft="25%">
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={5}
          rowGap={5}
          paddingTop="4%"
        >
          {allAnimeData && displayAnimeList()}
        </Grid>
      </Box>
    </>
  );
}
