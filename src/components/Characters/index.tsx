import { FC } from "react";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import { Character, ListResponse } from "@/types";
import {
  Badge,
  Card,
  Container,
  ImageContainer,
  Info,
  Name,
  Species,
} from "./styles";

const Characters: FC = () => {
  const { data } = useFetch<ListResponse<Character>>(
    ["characters"],
    "character",
  );

  if (!data) return null;

  return (
    <Container>
      {data.results.map((character) => (
        <Card key={character.id}>
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
