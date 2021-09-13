import React from "react";
import Header from "../../components/header";
import Background from "../../components/background";
import Table from "../../components/table";
import Cases from "../../components/cases";
import CaseOnMain from "../../components/caseonmain";

const Home = () => {
  return (
    <div>
      <Header />
      <Background />
      <Table />
      <CaseOnMain />
      <Cases />
    </div>
  );
};

export default Home;
