import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { db } from "../Firebase/firebase";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

function Home() {
  const [products, setProducts] = useState([]);
  let product = [];
  let trs = "";
  useEffect(() => {
    db.collection("categories")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((docs) => {
          product.push(docs.data().products);
        });

        setProducts(product);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <Swiper navigation={true} className="mySwiper">
          <SwiperSlide>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="home_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/51r+YpWo9rL._SX1500_.jpg"
              alt="home_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/51r+YpWo9rL._SX1500_.jpg"
              alt="home_img"
            />
          </SwiperSlide>
        </Swiper>

        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
          {products.slice(0, 4).map((ele, index) => (
            <Product
              key={ele.product_id}
              id={ele.product_id}
              title="iPhone 13 Pro Max"
              price={ele.product_price}
              description={ele.product_description}
              category="Technologies"
              image="https://m.media-amazon.com/images/I/714im+KNaqL._SL1500_.jpg"
              rating={2}
            />
          ))}

          <img
            className="md:col-span-full"
            src="https://links.papareact.com/dyz"
            alt=""
          />

          <div className="md:col-span-2">
            {products.slice(4, 5).map((ele, index) => (
              <Product
                key={ele.product_id}
                id={ele.product_id}
                title="food"
                price={ele.product_price}
                description={ele.product_description}
                category="food"
                image="https://m.media-amazon.com/images/I/714im+KNaqL._SL1500_.jpg"
                rating={2}
              />
            ))}
          </div>

          {products.slice(5, products.length).map((ele, index) => (
            <Product
              key={ele.product_id}
              id={ele.product_id}
              title="iPhone 13 Pro Max"
              price={ele.product_price}
              description={ele.product_description}
              category="Technologies"
              image="https://m.media-amazon.com/images/I/714im+KNaqL._SL1500_.jpg"
              rating={2}
            />
          ))}
        </div>

        {/* <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
        {products?.map((ele, index) => (
            <Product
              key={index}
              id={ele.product_id}
              title={ele.product_description}
              image="https://m.media-amazon.com/images/I/714im+KNaqL._SL1500_.jpg"
              price={ele.product_price}
              rating={2}
            />
            ))}
            </div> */}

        {/* <Product
          id="10111"
          title="Lorem Quos, ab mollitia facilis dolor accusamus illo at exercitationem! Quasi, id vitae!"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          price={20}
          rating={2}
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Lorem Quos, ab mollitia facilis dolor accusamus illo at exercitationem! Quasi, id vitae!"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          price={20}
          rating={2}
        /> */}
        {/* <Product
          id="101"
          title="Lorem Quos, ab mollitia facilis dolor accusamus illo at exercitationem! Quasi, id vitae!"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          price={20}
          rating={2}
        />
        <Product
          id="5"
          title="Lorem Quos, ab mollitia facilis dolor accusamus illo at exercitationem! Quasi, id vitae!"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          price={20}
          rating={2}
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, ab mollitia eos voluptatibus sint dolor fuga. Facere reprehenderit cumque voluptatem nemo facilis dolor accusamus illo at exercitationem! Quasi, id vitae!"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          price={20}
          rating={2}
        /> */}
      </div>
    </div>
  );
}

export default Home;
