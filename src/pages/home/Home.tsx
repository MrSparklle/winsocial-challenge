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
  const [testimony, setTestimony] = useState([] as Testimony[]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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

  return isLoaded ? (
    <>
      <Navbar />
      <Cta offers={offers} />
      <VirtualVisit />
      <Statistics />
      <Offers offers={offers} />
      <Testyimony testimonies={testimony} />
      <Newsletter />
      <Footer />
    </>
  ) : (
    // in a real scenario this needs to be replaced with a proper Loading Component
    <h1>Loading...</h1>
  );
};

export default Home;
