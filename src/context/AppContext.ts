import { createContext, useContext } from "react";
import { LegendsResponse, StarshipsResponse, PlanetsResponse } from "api/types";

type Dispatch<A> = (value: A) => void;

export type StateProps = {
  favorites: string[];
  legends?: LegendsResponse;
  starships?: StarshipsResponse;
  planets?: PlanetsResponse;
};

interface AppContextType {
  state: StateProps;
  dispatch: Dispatch<any>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<AppContextType>(null!);

export const useAppContext = () => {
  return useContext(AppContext);
};
