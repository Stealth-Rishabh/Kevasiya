import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./app/LandingPage/LandingPage";
import AnnouncementBar from "./app/LandingPage/AnnouncementBar";
const App = () => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <LandingPage />
      {/* <Footer /> */}
    </>
  );
};

export default App;
