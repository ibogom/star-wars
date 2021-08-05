export type LegendResponse = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  id: string;
  path?: string;
};

export type LegendsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: LegendResponse[];
};

export type PlanetResponse = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string[];
  url: string;
  id: string;
  path?: string;
};

export type PlanetsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PlanetResponse[];
};

export type StarshipResponse = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  consumables: string;
  MGLT: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string[];
  url: string;
  id: string;
  path?: string;
};

export type StarshipsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarshipResponse[];
};
