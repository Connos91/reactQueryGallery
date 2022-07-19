/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";

import { useQuery, useInfiniteQuery } from "react-query";
import * as C from "../reactQuery/gallery/constants";
import * as Q from "../reactQuery/gallery/queries";

const usePhotos = (page, limit) => {
  const fetchPhotos = async () => {
    const response = await Q.getPhotos(page, limit);
    return { response, nextPage: page + 1, totalPages: 100 };
  };

  const paging = useInfiniteQuery("photos", fetchPhotos, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });

  return paging;
};
export default usePhotos;

/* const fetchPhotos = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${pageParam}&limit=10`
  );
  const results = await response.json();
  return { results, nextPage: pageParam + 1, totalPages: 100 };
};
 */

/*  useInfiniteQuery("photos", fetchPhotos, {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }); */
