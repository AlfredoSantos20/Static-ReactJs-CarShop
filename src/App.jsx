import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import FixBanner from "./components/FixBanner/FixBanner";
const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
    {/* NavBar Section */}
     <Navbar />
    {/* Banner Section */}
     <Banner />
    {/* Category Section */}
     <Category />
    {/* Category2 Section */}
    <Category2 />
    {/* Service Section */}
     <Services />
    {/* Service Section */}
    <FixBanner />
    </div>
  )
}

export default App
