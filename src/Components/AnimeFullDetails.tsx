import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Button,
  Text,
  Center,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useNavigate, useParams, useLocation } from "react-router-dom";


export default function AnimeFullDetails({
  imageURL,
  synopsis,
  rating,
  score,
  members,
  episode,
}: any) {

  const history = useNavigate();

  let params = useParams();
  let location = useLocation();

  console.log(imageURL);

  return (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        paddingTop="5%"
        w="50vw"
        margin="auto"
      >
        <VStack>
          {imageURL && <Image w="225px" h="360px" src={imageURL} />}
          <Button onClick={() => history("/")}>
            <Text>&#171; back</Text>
          </Button>
        </VStack>

        <VStack>
          <Text fontSize="1.3rem" fontWeight="600">
            Synopsis
          </Text>
          <br />
          <Text textAlign="justify">{synopsis}</Text>
          <br />
          <HStack columnGap={5} paddingTop="18%">
            <VStack
              w="120px"
              h="80px"
              borderRadius="5px"
              borderColor="#7F00FF"
              borderWidth="1px"
              justifyContent="center"
            >
              <Text>{rating}</Text>
              <Text>Rating</Text>
            </VStack>

            <VStack
              w="120px"
              h="80px"
              borderRadius="5px"
              borderColor="#7F00FF"
              borderWidth="1px"
              justifyContent="center"
            >
              <Text>{score}</Text>
              <Text>Score</Text>
            </VStack>

            <VStack
              w="120px"
              h="80px"
              borderRadius="5px"
              borderColor="#7F00FF"
              borderWidth="1px"
              justifyContent="center"
            >
              <Text>{members}</Text>
              <Text>Members</Text>
            </VStack>

            <VStack
              w="120px"
              h="80px"
              borderRadius="5px"
              borderColor="#7F00FF"
              borderWidth="1px"
              justifyContent="center"
            >
              <Text>{episode}</Text>
              <Text>Episodes</Text>
            </VStack>
          </HStack>
        </VStack>
      </Grid>
    </>
  );
}
