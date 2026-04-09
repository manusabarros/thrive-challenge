import { FC } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Character } from "@/types";
import {
  Badge,
  Card,
  Container,
  ImageContainer,
  Info,
  Name,
  Species,
} from "@/styles/Characters";

const Characters: FC = () => {
  const { data: characters } = useQuery<Character[]>({
    queryKey: ["characters"],
    queryFn: () =>
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then(({ data }) => data.results),
    staleTime: Infinity,
  });

  if (!characters) return null;

  return (
    <Container>
      {characters.map((character) => (
        <Card>
          <ImageContainer>
            <Badge $status={character.status}>{character.status}</Badge>
            <Image src={character.image} alt={character.name} fill />
          </ImageContainer>
          <Info>
            <Name>{character.name}</Name>
            <Species>{character.species}</Species>
          </Info>
        </Card>
      ))}
    </Container>
  );
};

export default Characters;
