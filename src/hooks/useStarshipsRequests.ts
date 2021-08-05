import { useEffect, useState, useCallback } from "react";
import { useApi } from "./useApi";
import { StarshipsResponse, StarshipResponse } from "api/types";
import { useAppContext } from "context/AppContext";
import { GET_STARSHIPS } from "store/constants";

export const useStarships = (page: number): StarshipsResponse | null => {
  const { state, dispatch } = useAppContext();
  const [starships, setStarships] = useState<StarshipsResponse | null>(
    state.starships || null
  );

  const api = useApi();

  const asyncFn = useCallback(async () => {
    const response = await api.getStarships(page);

    const data = {
      ...response,
      results: response.results.map((item, idx) => {
        const path: RegExpMatchArray | null = item.url.match(/(\d+)/g);

        return {
          ...item,
          id: `${item.name}-${path ? path[0] : ""}`,
          path: path ? path[0] : "",
          idx,
        };
      }),
    };

    setStarships(data);

    dispatch({
      type: GET_STARSHIPS,
      payload: data,
    });
  }, [api, page, dispatch]);

  useEffect(() => {
    asyncFn();
    // eslint-disable-next-line
  }, [page]);

  return starships;
};

export const useStarship = (id: string): StarshipResponse | null => {
  const [starship, setStarship] = useState<StarshipResponse | null>(null);

  const api = useApi();

  const asyncFn = useCallback(async () => {
    const response = await api.getStarship(id);

    const path: RegExpMatchArray | null = response.url.match(/(\d+)/g);

    const data = {
      ...response,
      id: `${response.name}-${path ? path[0] : ""}`,
      path: path ? path[0] : "",
    };

    setStarship(data);
  }, [api, id]);

  useEffect(() => {
    asyncFn();
    // eslint-disable-next-line
  }, [id]);

  return starship;
};
