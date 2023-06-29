import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyNFTs from "./MyNFTs";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynfts" element={<MyNFTs />} />
      </Routes>
    </Layout>
  );
};

export default App;
