import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useFetch = <T>(queryKey: string[], path: string) =>
  useQuery<T>({
    queryKey,
    queryFn: () =>
      axios
        .get(`https://rickandmortyapi.com/api/${path}`)
        .then(({ data }) => data),
    staleTime: Infinity,
  });

export default useFetch;
