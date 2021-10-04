import React from "react";
import Product from "../../Pages/ProductCase/Product";
import Header from "../../components/header";
import cblogo from "../../assets/images/cblogoo.png";
import proimage from "../../assets/images/logo-klienta-9.png";
import imagebel from "../../assets/images/logo-klienta-18.png";
import backgrounds from "../../assets/images/399.jpg";
import Footer from "../../components/footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import db from "../../firebase.config";

function Products() {
  const [services, setServices] = useState([]);

  const fetchBlogs = async () => {
    // console.log("im here");
    const response = db.collection("maincases");
    const data = await response.get();
    const arr = [];
    data.forEach((item) => {
      // setServices((ser) => [...ser, item.data()]);
      arr.push(item.data());
    });
    setServices([...arr]);
    console.log("i am from products");
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div className="product">
        <img
          src={backgrounds}
          style = {{marginBottom: "9rem"}}
          alt="Product Back"
          className="productcase__background"
          data-aos="fade-up"
        />

        {services.length > 0 &&
          services.map((product) => {
            return (
              <Product
                logos={product.url}
                proname={product.name}
                descshort={product.description1}
                imagepro={product.image1}
                imagebelow={product.image2}
                desclong={product.description2}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
}

export default Products;
