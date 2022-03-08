import {
  Cta,
  Statistics,
  Footer,
  Navbar,
  Newsletter,
  Offers,
  Testyimony,
  VirtualVisit,
} from "components";
import { Address, Testimony } from "models";
import React, { useEffect, useState } from "react";
import { AddressService } from "services/Address.service";
import { TestimonyService } from "services/Testimony.service";

const Home = () => {
  // all offers
  const [offers, setOffers] = useState([] as Address[]);
  // all testimonies
  const [testimony, setTestimony] = useState([] as Testimony[]);
  // controls if application data has been loaded
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // fetching necessary data to display home page
    async function fetchHome() {
      try {
        // get all offers from the backend to display his data
        const offersData: Address[] = await AddressService.findAllAddress();
        setOffers(offersData);

        // get all testimonies data
        const testimoniesData: Testimony[] =
          await TestimonyService.findAllTestimonies();
        setTestimony(testimoniesData);
      } catch (error) {
        console.error("Error loading home data: ", error);
      } finally {
        setIsLoaded(true);
      }
    }
    fetchHome();
  }, []);

  // if all data has been loaded, display the home page
  return isLoaded ? (
    <>
      {/* main navigation bar */}
      <Navbar />
      {/* call to action section */}
      <Cta offers={offers} />
      {/* virtual visit section */}
      <VirtualVisit />
      {/* statistics section */}
      <Statistics />
      {/* offers section whith top 6 offers */}
      <Offers offers={offers} />
      {/* testimony sector, display top 3 testimonies */}
      <Testyimony testimonies={testimony} />
      {/* newsletter section. receive emails subscriptions */}
      <Newsletter />
      {/* footer section. sitem map and social network links */}
      <Footer />
    </>
  ) : (
    // in a real scenario this needs to be replaced with a proper Loading Component
    <h1>Loading...</h1>
  );
};

export default Home;
