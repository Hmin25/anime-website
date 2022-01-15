import ReactPaginate from "react-paginate";
import "../App.css";
import React, { useState, useEffect } from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AnimeFullDetails from "./AnimeFullDetails";

export default function Pagination({
  animeList,
  itemsPerPage,
  setImageURL,
  setSynopsis,
  setRating,
  setScore,
  setMembers,
  setEpisode,
}: any) {

  const history = useNavigate();

  const animeData = animeList;
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
                setImageURL(anime.image_url);
                setSynopsis(anime.synopsis);
                setRating(anime.rated);
                setScore(anime.score);
                setMembers(anime.members);
                setEpisode(anime.episodes);
                history("/anime/" + anime.title);
              }}
            >
              <Image w="100%" h="300px" src={anime.image_url} />
              <Text fontWeight="600">{anime.title}</Text>
            </Box>
          ))}
      </>
    );
  }

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(animeData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(animeData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, animeData]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % animeData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* Here are the 8 pages to click */}
      <Items currentItems={currentItems} />

      {/* Here are the number to click and flip pages */}
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
