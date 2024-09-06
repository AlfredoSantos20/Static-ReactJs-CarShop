import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import FixBanner from "./components/FixBanner/FixBanner";
import FixBanner2 from "./components/FixBanner/FixBanner2";
import Products from "./components/Products/Product";
import Event from "./components/Event/Event";
// import Images
import Gold from "./assets/bannerImages/gold.png";
import Chameleon from "./assets/bannerImages/chameleon.png";

const BannerData = 
  {
  discount: '30% OFF',
  title: "Limited Edition",
  date: 'Valid from Aug 10 to Aug 28, 2024',
  image:Gold,
  title2:"Honda Civic Type R",
  title3:"Summer Sale",
  description:"Be the one to drive the ultimate Honda Civic Type-R Gold Edition.",
  bgColor:"#F6C324",
  expirationDate: '2024-12-28T23:59:59',
};

const BannerData2 = 
  {
  discount: '30% OFF',
  title: "Limited Edition",
  date: 'Valid from Aug 10 to Aug 28, 2024',
  image:Chameleon,
  title2:"Honda Civic Type R",
  title3:"Summer Sale",
  description:"Be the one to drive the ultimate Honda Civic Type-R Chameleon Edition.",
  bgColor:"#A020F0",
  expirationDate: '2024-12-28T23:59:59', 
};

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
    {/* Fixbanner Section */}
    <FixBanner data={BannerData} />
    {/* Products Section */}
    <Products />

    <FixBanner2 data={BannerData2}/>

    <Event />
    </div>
  )
}

export default App
