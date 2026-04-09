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
  name: string;
  status: Status;
  species: string;
  image: string;
}

export interface Location {
  name: string;
  type: string;
}
