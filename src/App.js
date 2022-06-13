import React from "react";
import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Authentication/Login";
import Logout from "./components/Authentication/Logout";
import Register from "./components/Authentication/Register";
import Algorithms from "./components/Algorithms/Algorithms";
import DataStructures from "./components/DataStructures/DataStructures";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="register" element={<Register />} />
        <Route path="algorithms" element={<Algorithms />} />
        <Route path="datastructures" element={<DataStructures />} />
        <Route path="sortingvisualizer" element={<SortingVisualizer />} />
      </Routes>
    </Layout>
  );
};

export default App;
