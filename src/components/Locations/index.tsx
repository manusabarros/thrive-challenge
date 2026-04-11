import { FC } from "react";
import useFetch from "@/hooks/useFetch";
import { MapPin } from "lucide-react";
import { ListResponse, Location } from "@/types";
import { Card, Container, Icon, Info, Name, Type } from "./styles";

const Locations: FC = () => {
  const { data } = useFetch<ListResponse<Location>>(
    ["locations"],
    "location",
  );

  if (!data) return null;

  return (
    <Container>
      {data.results.map((location) => (
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
