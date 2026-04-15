import axios from "axios";
import { QueryKey, useQuery } from "@tanstack/react-query";

const useFetch = <T>(queryKey: QueryKey, path: string) =>
  useQuery<T>({
    queryKey,
    queryFn: () =>
      axios
        .get(`https://rickandmortyapi.com/api/${path}`)
        .then(({ data }) => data),
    staleTime: Infinity,
  });

export default useFetch;
