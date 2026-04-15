export interface ListResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: T[];
}

export type Tab = "characters" | "locations";

export type Status = "Alive" | "Dead" | "unknown";

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  image: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
}
