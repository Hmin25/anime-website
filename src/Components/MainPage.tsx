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

export default function MainPage() {
  const [allAnimeData, setAllAnimeData] = useState<any>("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function getAllList() {
      await Axios.get(`https://api.jikan.moe/v3/search/anime?q=naruto`)
        .catch((err) => {
          console.log(err);
        })
        .then((res: any) => {
          setAllAnimeData(res.data.results);
        });
    }

    getAllList();
  }, []);

  useEffect(() => {
    async function getAllList() {
      await Axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${searchInput.toLowerCase()}`
      )
        .catch((err) => {
          console.log(err);
        })
        .then((res: any) => {
          setAllAnimeData(res.data.results);
          console.log(allAnimeData);
        });
    }

    getAllList();
  }, [searchInput]);

  const displayAnimeList = () => {
    if (allAnimeData && allAnimeData.length > 0) {
      return allAnimeData.map((anime: any, index: number) => (
        <Box
          as="button"
          borderRadius="4px"
          w="225px"
          h="360px"
          boxShadow="1px 1px 6px #D3D3D3"
          key={index}
          display="flex"
          flexDir="column"
          overflow="hidden"
          // onClick={() => {
          //   history.push(`/channel/${channel.title}-${channel.id}`);
          // }}
        >
          <Image w="100%" h="300px" src={anime.image_url} />
          <Text fontWeight="600">{anime.title}</Text>
        </Box>
      ));
    }
  };

  return (
    <>
      <Stack pt={7} align="center" overflowX='hidden'>
        <InputGroup borderRadius="15px" size="md" w="40vw">
          <Input
            color="white"
            id="searchBar"
            defaultValue="naruto"
            variant="filled"
            placeholder="Search Channels, TV Shows, Movies"
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
              //   onClickSearch();
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
          paddingTop="8%"
        >
          {allAnimeData && displayAnimeList()}
        </Grid>
      </Box>
    </>
  );
}
