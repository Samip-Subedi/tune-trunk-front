import React from "react";
import { useSelector } from "react-redux";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/MetaData";
import "./About.css";
import Footer from "../../more/Footer";

const About = () => {
  const { loading } = useSelector((state) => state.profile);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* Introduction Section */}
                <div className="row flex">
                  <div className="col__2">
                    <img src="https://res.cloudinary.com/dt9l5u08d/image/upload/v1737376775/avatar/ko9nyfn1cxyvlsycgfxf.jpg" alt="Eyewear Shop" />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Welcome to Visionary Optics
                      </span>
                      <p>
                        At Visionary Optics, we believe that eyewear is more than just a necessity—it’s an expression of who you are. Our curated collection includes glasses for every occasion, mood, and personality. Whether you're looking for stylish frames to complement your outfit, functional lenses for your outdoor adventures, or comfortable glasses for daily wear, we have you covered.
                      </p>
                      <p>
                        Our mission is to help you see the world clearly while looking your best. With a wide range of styles and options, we cater to everyone—because every pair of eyes deserves the best care and attention.
                      </p>
                    </div>
                  </div>
                
              
                
                </div>
                {/* New Section: Our Growing Story */}
<div className="about__page">
  <div className="row flex">
    <div className="col__2">
      <div className="meta">
        <span
          style={{
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "1.2",
          }}
        >
          Our Growing Story
        </span>
        <p>
          Since 2024, Visionary Optics has actively committed to satisfying the needs of numerous individuals by providing affordable, high-quality eyewear. Over time, we have expanded our product range to include over 1000 distinctive eyewear styles and designs.
        </p>
        <p>
          Between 2024 and 2025, we primarily conducted our business online and witnessed a significant upsurge in demand for our eyewear. Recognizing the potential for further expansion, we strategically decided to establish a physical presence in vibrant locations to offer a tangible shopping experience. By 2024, our journey included launching our flagship store.
        </p>
        <p>
          Visionary Optics continues to expand its reach, opening additional stores across key locations and delivering exceptional value to our customers both online and offline. We remain dedicated to blending innovation with customer-centricity to redefine eyewear shopping experiences.
        </p>
      </div>
    </div>
    <div className="col__2">
      <img
        src="https://res.cloudinary.com/dt9l5u08d/image/upload/v1737376718/avatar/qsc48eaddqyw0gguqtag.jpg"
        alt="Our Growing Story"
      />
    </div>
  </div>
</div>

                

                {/* What We Provide Section */}
                <div className="second">
                  <div className="heading">
                    <h2>What Makes Us Unique?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="Best Prices" />
                        </div>
                        <span>Affordable Luxury</span>
                        <p>
                          Enjoy premium quality eyewear at prices that fit your budget. We make luxury accessible to everyone.
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" alt="Quality" />
                        </div>
                        <span>Exceptional Quality</span>
                        <p>
                          Every pair of glasses is crafted with precision and care, ensuring durability and comfort for daily wear.
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" alt="Delivery" />
                        </div>
                        <span>Fast & Reliable Delivery</span>
                        <p>
                          Get your eyewear delivered to your doorstep quickly and securely, because your time matters to us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

               
{/* Customer Testimonials */}
<div className="testimonials">
  <div className="heading">
    <h2>What Our Customers Say</h2>
  </div>
  <div className="testimonial-box">
    <img src="https://via.placeholder.com/60" alt="Customer 1" />
    <div className="rating">
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
    <p>"I absolutely love my new glasses from Visionary Optics! The quality is superb, and the styles are so trendy. I get compliments everywhere I go!"</p>
    <span>- Sarah L.</span>
  </div>
  <div className="testimonial-box">
    <img src="https://via.placeholder.com/60" alt="Customer 2" />
    <div className="rating">
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
    <p>"The customer service team was so helpful in guiding me to the perfect pair of glasses. Highly recommend this shop!"</p>
    <span>- James M.</span>
  </div>
  <div className="testimonial-box">
    <img src="https://res.cloudinary.com/dt9l5u08d/image/upload/v1737359348/avatar/yixlujo5knvg28mza3ai.jpg" alt="Customer 3" />
    <div className="rating">
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
    <p>"Great selection of glasses and fantastic delivery service. I've already ordered my second pair!"</p>
    <span>- Alex P.</span>
  </div>
  
  
    
  </div>
</div>


                {/* New Section: Our Commitment */}
                {/* <div className="commitment"> */}
  <div className="heading">
  </div>
  
  
</div>

              </div>
            <Footer />
          {/* </div> */}
        </>
      )}
    </>
  );
};

export default About;
