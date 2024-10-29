import React from "react";
import Gympage from "./GymTop/page";
import DataPage from "./Data/page";
import AboutPage from "./About/page";
import ReviewsPage from "./GymReviews/page";
import FormPage from "./Form/page";
function Homepage() {
  return (
    <div>
      <Gympage />
      <DataPage />
      <AboutPage />
      <ReviewsPage />
      <FormPage />
    </div>
  );
}

export default Homepage;
