import React from "react";

import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <h2>Student Profile</h2>
        <ProfileCard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
