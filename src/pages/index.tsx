import { useState } from "react";
import { NextPage } from "next";
import { Container, Subtitle, Title } from "@/styles/Home";
import TabBar from "@/components/TabBar";
import Characters from "@/components/Characters";
import Locations from "@/components/Locations";

export type Tab = "characters" | "locations";

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("characters");

  return (
    <Container>
      <Title>Rick & Morty</Title>
      <Subtitle>Multiverse Explorer</Subtitle>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "characters" ? <Characters /> : <Locations />}
    </Container>
  );
};

export default Home;
