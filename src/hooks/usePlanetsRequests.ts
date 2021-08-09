import { useEffect, useState, useCallback } from "react";
import { useApi } from "./useApi";
import { PlanetsResponse, PlanetResponse } from "api/types";
import { useAppContext } from "context/AppContext";
import { GET_PLANETS } from "store/constants";

export const usePlanets = (page: number): PlanetsResponse | null => {
  const { state, dispatch } = useAppContext();
  const [planets, setPlanets] = useState<PlanetsResponse | null>(
    state.planets || null
  );

  const api = useApi();

  const asyncFn = useCallback(async () => {
    try {
      const response = await api.getPlanets(page);

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

      setPlanets(data);

      dispatch({
        type: GET_PLANETS,
        payload: data,
      });
    } catch (err) {
      console.error(err);
    }
  }, [api, page, dispatch]);

  useEffect(() => {
    asyncFn();
    // eslint-disable-next-line
  }, [page]);

  return planets;
};

export const usePlanet = (id: string): PlanetResponse | null => {
  const [planet, setPlanet] = useState<PlanetResponse | null>(null);

  const api = useApi();

  const asyncFn = useCallback(async () => {
    try {
      const response = await api.getPlanet(id);

      const path: RegExpMatchArray | null = response.url.match(/(\d+)/g);

      const data = {
        ...response,
        id: `${response.name}-${path ? path[0] : ""}`,
        path: path ? path[0] : "",
      };

      setPlanet(data);
    } catch (err) {
      console.error(err);
    }
  }, [api, id]);

  useEffect(() => {
    asyncFn();
    // eslint-disable-next-line
  }, [id]);

  return planet;
};
