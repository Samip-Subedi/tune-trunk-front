import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Products/ProductCard";
import Header from "./Header";
import MetaData from "../../more/MetaData";
import Footer from "../../more/Footer";
import BottomTab from "../../more/BottomTab";
import { ToastContainer } from "react-toastify";

// Simple CSS spinner that doesn't require MUI
const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
    <p>Loading products...</p>
  </div>
);

const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // Limit to only 4 featured products
  const featuredProducts = products && products.slice(0, 4);

  return (
    <>
      <MetaData title="Upanetra - Premium Eyewear Collection" />
      <Header />
      
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* Hero Carousel */}
          <section className="hero-section">
            <Carousel 
              className="hero-carousel"
              indicators={true}
              navButtonsAlwaysVisible={true}
            >
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dt9l5u08d/image/upload/v1739898914/PHOTO-2025-02-10-17-15-55_lfmz7x.png"
                  alt="Sunglasses Collection"
                  className="carousel-image"
                />
                {/* <div className="carousel-content">
                  <h2>Premium Sunglasses</h2>
                  <p>Protect your eyes in style</p>
                  <a href="#featured-products">
                    <button className="shop-now-btn">Shop Sunglasses</button>
                  </a>
                </div> */}
              </div>
              
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dt9l5u08d/image/upload/v1739898937/Desktopwinter-edit_zo7nvm.png"
                  alt="Eyeglasses Collection"
                  className="carousel-image"
                />
                {/* <div className="carousel-content">
                  <h2>Stylish Eyewear</h2>
                  <p>Find your perfect frame</p>
                  <a href="#featured-products">
                    <button className="shop-now-btn">Explore Collection</button>
                  </a>
                </div> */}
              </div>
            </Carousel>
          </section>

          {/* Featured Products - Limited to 4 */}
          <section id="featured-products" className="featured-section">
            <div className="section-header">
              <h2>Featured Eyewear</h2>
              <p>Discover our most popular styles</p>
            </div>
            
            <div className="products-grid limited">
              {featuredProducts && featuredProducts.length > 0 ? (
                featuredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div className="no-products">
                  <p>No products found. Please check back later.</p>
                </div>
              )}
            </div>
          </section>
          
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Home;