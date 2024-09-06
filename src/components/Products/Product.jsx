import React from 'react'
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// Importing images
import Img1 from '../../assets/ProductImages/bl.png';
import Img2 from '../../assets/ProductImages/gr.png';
import Img3 from '../../assets/ProductImages/teal.png';
import Img4 from '../../assets/ProductImages/ylgreen.png';
import Img5 from '../../assets/ProductImages/pink.png';
import Img6 from '../../assets/ProductImages/purp.png';
import Img7 from '../../assets/ProductImages/orange.png';
import Img8 from '../../assets/ProductImages/wttt.png';
const ProductsData = [
    {
        id:1,
        img: Img1,
        title: "Navy Edition",
        price:"3,870,000.00",
        aosDelay: "0",

    },
    {
      id:2,
      img: Img2,
      title: "Energy Green Edition",
      price:"3,870,000.00",
      aosDelay: "200",

     },
    {
      id:3,
      img: Img3,
      title: "Teal Edition",
      price:"3,870,000.00",
      aosDelay: "400",

    },
    {
      id:4,
      img: Img4,
      title: "Mystic Yellow Edition",
      price:"3,870,000.00",
      aosDelay: "600",

    },
];
const ProductsData2 = [
  {
    id:1,
    img: Img5,
    title: "Hot Pink Edition",
    price:"3,870,000.00",
    aosDelay: "0",

},
{
  id:2,
  img: Img6,
  title: "Purple Edition",
  price:"3,870,000.00",
  aosDelay: "200",

 },
{
  id:3,
  img: Img7,
  title: "Orange Fury Edition",
  price:"3,870,000.00",
  aosDelay: "400",

},
{
  id:5,
  img: Img8,
  title: "White Edition",
  price:"3,870,000.00",
  aosDelay: "400",

},

];
const Product = () => {
  return (
    <div>
        <div className='container'>
            {/* Header section */}
              <Heading title="Our Products" subtitle={"Explore Our Car's"}/>
            {/* body section */}
            <ProductCard data={ProductsData} />
            <ProductCard data={ProductsData2} />
        </div>
    </div>
  )
}

export default Product
