import React from "react";
import Header from "../../components/header";
import WelcomeCase from "../../components/welcomecase";
import CasesCard from "../../components/casescard";

const NewPage = () => {
  return (
    <>
      <Header />
      <WelcomeCase />
      <CasesCard />
      <CasesCard />
      <CasesCard />
      <CasesCard />
      <CasesCard />
    </>
  );
};
export default NewPage;
