import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Tab } from "@/types";
import { Container, Subtitle, Title } from "./index.styles";
import TabBar from "@/components/TabBar";
import Characters from "@/components/Characters";
import Locations from "@/components/Locations";

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("characters");

  return (
    <>
      <Head>
        <title>Thrive Challenge</title>
      </Head>
      <Container>
        <Title>Rick & Morty</Title>
        <Subtitle>Multiverse Explorer</Subtitle>
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "characters" ? <Characters /> : <Locations />}
      </Container>
    </>
  );
};

export default Home;
