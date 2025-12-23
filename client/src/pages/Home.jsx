 import { Outlet, useLocation } from "react-router-dom";

import Banner from "../components/home/Banner";
import CallToAction from "../components/home/CallToAction";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith("/app");

  return (
    <>
      {/* Landing page only */}
      {!isAppRoute && (
        <>
          <Banner />
          <Hero />
          <Features />
          <Testimonial />
          <CallToAction />
          <Footer />
        </>
      )}

      {/* App routes render here */}
      <Outlet />
    </>
  );
};

export default Home;
