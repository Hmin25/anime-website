import React, { useState, useEffect, useRef } from "react";
import {
  Spacer,
  Box,
  Text,
  VStack,
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
      return allAnimeData.map((anime:any, index:number) => (
        <Box
          as="button"
          borderRadius="4px"
          w="225px"
          h="400px"
          boxShadow="1px 1px 6px #D3D3D3"
          key={index}
          // onClick={() => {
          //   history.push(`/channel/${channel.title}-${channel.id}`);
          // }}
        >
          <Image src={anime.image_url}/>
          <Text>{anime.title}</Text>
        </Box>
      )
      )}
  };

  return (
    <>
      <Stack pt={5} align="center">
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

      <Stack w="100vw" h="60vh">
        {allAnimeData && displayAnimeList()}

      </Stack>
    </>
  );
}
