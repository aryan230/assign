import logo from "./logo.svg";
import "./App.css";
import Table from "./Components/Table";
import Hero from "./Components/Hero";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Hero />

      <Table />
      <Footer />
    </div>
  );
}

export default App;
