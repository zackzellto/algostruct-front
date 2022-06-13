import React from "react";
import { Container } from "reactstrap";
import SidebarNav from "./Sidebar/SidebarNav";
import "./Home.css";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";

const Home = () => {
  return (
    <>
      <SidebarNav />
      <Container id="main-content">
        <h1>
          <b className="left-bracket">[</b>AlgoStruct
          <b className="right-bracket">]</b>
        </h1>

        <u>
          <h5>a Data Structures & Algorithms visualization tool</h5>
        </u>

        <SortingVisualizer></SortingVisualizer>
      </Container>
    </>
  );
};

export default Home;
