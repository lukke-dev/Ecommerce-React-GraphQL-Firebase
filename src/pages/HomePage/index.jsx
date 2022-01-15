import React from "react";
import { HomePageContainer } from "./styles";
import Directory from "../../components/Directory";

const HomePage = () => {
  return (
    <HomePageContainer className="homepage">
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
