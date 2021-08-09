import { useEffect, useState, useCallback } from "react";
import { useApi } from "./useApi";
import { LegendsResponse, LegendResponse } from "api/types";
import { useAppContext } from "context/AppContext";
import { GET_LEGENDS } from "store/constants";

export const useLegends = (page: number): LegendsResponse | null => {
  const { state, dispatch } = useAppContext();
  const [legends, setLegends] = useState<LegendsResponse | null>(
    state.legends || null
  );

  const api = useApi();

  const asyncFn = useCallback(async () => {
    try {
      const response = await api.getLegends(page);

      const data = {
        ...response,
        results: response.results.map((item, idx: number) => {
          const path: RegExpMatchArray | null = item.url.match(/(\d+)/g);
          return {
            ...item,
            id: `${item.name}-${path ? path[0] : ""}`,
            path: path ? path[0] : "",
            idx,
          };
        }),
      };

      setLegends(data);

      dispatch({
        type: GET_LEGENDS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }, [api, page, dispatch]);

  useEffect(() => {
    asyncFn();
    // eslint-disable-next-line
  }, [page]);

  return legends;
};

export const useLegend = (id: string): LegendResponse | null => {
  const [legend, setLegend] = useState<LegendResponse | null>(null);

  const api = useApi();

  const asyncFn = useCallback(async () => {
    try {
      const response = await api.getLegend(id);

      const path: RegExpMatchArray | null = response.url.match(/(\d+)/g);

      const data = {
        ...response,
        id: `${response.name}-${path ? path[0] : ""}`,
        path: path ? path[0] : "",
      };

      setLegend(data);
    } catch (err) {
      console.error(err);
    }
  }, [api, id]);

  useEffect(() => {
    asyncFn();
    // eslint-disable-next-line
  }, [id]);

  return legend;
};
