import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, Container, Icon, Info, Name, Type } from "@/styles/Locations";
import { MapPin } from "lucide-react";

interface Location {
  name: string;
  type: string;
}

const Locations: FC = () => {
  const { data: locations } = useQuery<Location[]>({
    queryKey: ["locations"],
    queryFn: () =>
      axios
        .get("https://rickandmortyapi.com/api/location")
        .then(({ data }) => data.results),
    staleTime: Infinity,
  });

  if (!locations) return null;

  return (
    <Container>
      {locations.map((location) => (
        <Card>
          <Icon>
            <MapPin />
          </Icon>
          <Info>
            <Name>{location.name}</Name>
            <Type>{location.type}</Type>
          </Info>
        </Card>
      ))}
    </Container>
  );
};

export default Locations;
