import ReactPaginate from "react-paginate";
import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Pagination({ animeList, itemsPerPage }: any) {
  const history = useNavigate();

  console.log("GET ANIME LIST:", animeList);

  const items = animeList;

  function Items({ currentItems }: any) {
    return (
      <>
        {currentItems &&
          currentItems.map((anime: any, index: number) => (
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
              onClick={() => {
                // setCurrentAnimeImage(anime.image_url);
                // setCurrentAnimeSynopsis(anime.synopsis);
                setTimeout(() => history(`/anime/${anime.title}`), 500);
              }}
            >
              <Image w="100%" h="300px" src={anime.image_url} />
              <Text fontWeight="600">{anime.title}</Text>
            </Box>
          ))}
      </>
    );
  }

//   const displayAnimeList = () => {
//     return <Items currentItems={currentItems} />;
//   };

//   useEffect(() => {
//     displayAnimeList();
//   }, []);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      {/* {animeList && displayAnimeList()} */}
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination-main"
        activeClassName="active"
        // renderOnZeroPageCount={null}
      />
    </>
  );
}
