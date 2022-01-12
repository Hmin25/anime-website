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

export default function MainPage() {
  const history = useNavigate();
  const [allAnimeData, setAllAnimeData] = useState<any>("");
  const [searchInput, setSearchInput] = useState("");
  const [currentAnimeImage, setCurrentAnimeImage] = useState();
  const [currentAnimeSynopsis, setCurrentAnimeSynopsis] = useState("");


  useEffect(() => {
    async function getAnimeData() {
      await Axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${searchInput.toLowerCase()}`
      )
        .catch((err) => {
          console.log(err);
        })
        .then((res: any) => {
          setAllAnimeData(res.data.results);
          console.log("FIRST GET ANIME LIST: ",allAnimeData);
        });
    }

    getAnimeData();
  }, [searchInput]);

  // const displayAnimeList = () => {
  //   if (allAnimeData && allAnimeData.length > 0) {
  //     return allAnimeData.map((anime: any, index: number) => (
  //       <Box
  //         as="button"
  //         borderRadius="4px"
  //         w="225px"
  //         h="360px"
  //         boxShadow="1px 1px 6px #D3D3D3"
  //         key={index}
  //         display="flex"
  //         flexDir="column"
  //         overflow="hidden"
  //         onClick={() => {
  //           setCurrentAnimeImage(anime.image_url);
  //           setCurrentAnimeSynopsis(anime.synopsis);
  //           setTimeout(() => history(`/anime/${anime.title}`), 500);
  //         }}
  //       >
  //         <Image w="100%" h="300px" src={anime.image_url} />
  //         <Text fontWeight="600">{anime.title}</Text>
  //       </Box>
  //     ));
  //   }
  // };

  console.log("PARENT:", currentAnimeSynopsis);

  const displayAnimeList = () => {
    return <Pagination animeList={allAnimeData} itemsPerPage={8} />;
  };

  useEffect(() => {
    displayAnimeList();
  }, [allAnimeData])


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
            onBlur={(e: any) => {
              setSearchInput(e.target.value);
            }}
          />
          <InputRightAddon
            borderColor="transparent"
            bgColor="#7F00FF"
            cursor="pointer"
            onClick={() => {
              // var a = document.querySelector(
              //   "input[name=searchKeyword]"
              // ).value;
              // setTimeout(() => {
              //   getSearchAnimeList();
              // }, 0);
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
          {/* {allAnimeData && displayAnimeList()} */}
          {allAnimeData && displayAnimeList()}
        </Grid>
      </Box>

      <Stack display="none">
        <AnimeFullDetails
          image={currentAnimeImage}
          synopsis={currentAnimeSynopsis}
        />
      </Stack>

    </>
  );
}

