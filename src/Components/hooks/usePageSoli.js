import { useState } from "react";

export const usePagePrimSoli = (data) => {
  const [currentPage, setCurrentPage] = useState(0);

  const filterData = () => {
    return data.slice(currentPage, currentPage + 2);
  };

  const nextPage = () => {
    if (currentPage >= data.length) return;
    setCurrentPage(currentPage + 2);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 2);
    }
  };

  const ActionsPagePrim = {
    filterData,
    nextPage,
    prevPage,
  };

  return {
    ActionsPagePrim,
  };
};

export const usePageSecSoli = (data) => {
  const [currentPage, setCurrentPage] = useState(0);

  const filterData = () => {
    return data.slice(currentPage, currentPage + 2);
  };

  const nextPage = () => {
    if (currentPage >= data.length) return;
    setCurrentPage(currentPage + 2);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 2);
    }
  };

  const ActionsPageSec = {
    filterData,
    nextPage,
    prevPage,
  };

  return {
    ActionsPageSec,
  };
};
