import { LegendsResponse, StarshipsResponse, PlanetsResponse } from "api/types";
import { StateProps } from "context/AppContext";

import {
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  GET_LEGENDS,
  GET_STARSHIPS,
  GET_PLANETS,
} from "./constants";

type Action<TPayload> = {
  type: string;
  payload: TPayload;
};

const addToFavorites = (state: StateProps, payload: { id: string }) => {
  const { favorites } = state;
  const { id } = payload;

  const data = {
    ...state,
    favorites: [...favorites, id],
  };

  localStorage.setItem("state", JSON.stringify(data));

  return data;
};

const deleteFromFavorites = (state: StateProps, payload: { id: string }) => {
  const { favorites } = state;
  const { id } = payload;

  const data = {
    ...state,
    favorites: favorites.filter((savedId) => savedId !== id),
  };

  localStorage.setItem("state", JSON.stringify(data));

  return data;
};

const getLegends = (state: StateProps, payload: LegendsResponse) => {
  const data = {
    ...state,
    legends: payload,
  };

  localStorage.setItem("state", JSON.stringify(data));

  return data;
};

const getStarships = (state: StateProps, payload: StarshipsResponse) => {
  const data = {
    ...state,
    starships: payload,
  };

  localStorage.setItem("state", JSON.stringify(data));

  return data;
};

const getPlanets = (state: StateProps, payload: PlanetsResponse) => {
  const data = {
    ...state,
    planets: payload,
  };

  localStorage.setItem("state", JSON.stringify(data));

  return data;
};

const reducer = (state: StateProps, action: Action<any>) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_TO_FAVORITES:
      return addToFavorites(state, payload);
    case DELETE_FROM_FAVORITES:
      return deleteFromFavorites(state, payload);
    case GET_LEGENDS:
      return getLegends(state, payload);
    case GET_STARSHIPS:
      return getStarships(state, payload);
    case GET_PLANETS:
      return getPlanets(state, payload);
    default:
      return state;
  }
};

export default reducer;
