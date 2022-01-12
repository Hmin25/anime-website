import React, { useState, useEffect, useRef } from "react";
import { Grid, Button, Text, Center, Image, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function AnimeFullDetails({ image, synopsis }: any) {
  const history = useNavigate();

  console.log("RECEIVED: ",synopsis)

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" paddingTop="5%" w="70vw" margin="auto">
        <VStack>
          <Image w="225px" h="360px" src={image} />
          <Button onClick={() => history("/")}>
            <Text>back</Text>
          </Button>
        </VStack>

        <VStack>
          <Text>Synopsis</Text>
          <Text>{synopsis}</Text>
        </VStack>
      </Grid>
    </>
  );
}
