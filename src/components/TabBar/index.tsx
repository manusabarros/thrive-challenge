import { Dispatch, FC, SetStateAction } from "react";
import { MapPin, Users } from "lucide-react";
import { Tab as TabType } from "@/types";
import { Container, Tab } from "./styles";

const TabBar: FC<{
  activeTab: TabType;
  setActiveTab: Dispatch<SetStateAction<TabType>>;
}> = ({ activeTab, setActiveTab }) => {
  return (
    <Container>
      <Tab
        $isActive={activeTab === "characters"}
        onClick={() => setActiveTab("characters")}
      >
        <Users size={16} />
        Characters
      </Tab>
      <Tab
        $isActive={activeTab === "locations"}
        onClick={() => setActiveTab("locations")}
      >
        <MapPin size={16} />
        Locations
      </Tab>
    </Container>
  );
};

export default TabBar;
