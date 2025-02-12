import React from "react";
import Gympage from "./GymTop/page";
import DataPage from "./Data/page";
import AboutPage from "./About/page";
import ReviewsPage from "./GymReviews/page";
import FormPage from "./Form/page";
import Footer from "../components/Footer";
import Header from "../components/Header";
function Homepage() {
  return (
    <div>
        <Header/>
      <Gympage />
      <DataPage />
      <AboutPage />
      <ReviewsPage />
      <FormPage />
      <Footer/>

    </div>
  );
}

export default Homepage;
