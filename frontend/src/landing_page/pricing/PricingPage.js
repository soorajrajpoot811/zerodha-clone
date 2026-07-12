// import React from "react";
// import Hero from "../home/Hero";
// import Brokerage from "./brokerage";
// // import Navbar from "../../Navbar";
// // import Footer from "../../Footer";
// import OpenAccount from '../../OpenAccount';

// function PricingPage() {
//   return (
//     <>
//       <Hero />
//       <OpenAccount />
//       <Brokerage />
//     </>
//   );
// }

// export default PricingPage;

import React from "react";
import Hero from "./Hero"; // Galti Sudhar Di: Ab pricing folder ka apna Hero chalega
import Brokerage from "./brokerage";
import OpenAccount from '../../OpenAccount';

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </>
  );
}

export default PricingPage;