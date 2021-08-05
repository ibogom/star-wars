import {
  LegendsResponse,
  LegendResponse,
  PlanetsResponse,
  PlanetResponse,
  StarshipsResponse,
  StarshipResponse,
} from "./types";

export function createApi({ baseUrl }: { baseUrl: string }) {
  return {
    getLegends: async (page: number): Promise<LegendsResponse> => {
      const response = await fetch(`${baseUrl}/api/people/?page=${page}`);
      return await response.json();
    },
    getLegend: async (id: string): Promise<LegendResponse> => {
      const response = await fetch(`${baseUrl}/api/people/${id}`);
      return await response.json();
    },
    getPlanets: async (page: number): Promise<PlanetsResponse> => {
      const response = await fetch(`${baseUrl}/api/planets/?page=${page}`);
      return await response.json();
    },
    getPlanet: async (id: string): Promise<PlanetResponse> => {
      const response = await fetch(`${baseUrl}/api/planets/${id}`);
      return await response.json();
    },
    getStarships: async (page: number): Promise<StarshipsResponse> => {
      const response = await fetch(`${baseUrl}/api/starships/?page=${page}`);
      return await response.json();
    },
    getStarship: async (id: string): Promise<StarshipResponse> => {
      const response = await fetch(`${baseUrl}/api/starships/${id}`);
      return await response.json();
    },
  };
}
