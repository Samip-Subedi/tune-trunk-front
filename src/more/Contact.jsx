import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/Home/Header";
import MetaData from "./MetaData";
import Footer from "./Footer";
import BottomTab from "./BottomTab";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <MetaData title="Contact" />
      <Header />
      <div className="contact-container">
        {/* Contact Header */}
        <div className="contact-header">
          <div className="contact-header-decoration"></div>
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We're here to help! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info-section">
          {/* Email Card */}
          <div className="contact-card">
            <div className="contact-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="contact-icon"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
              </svg>
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <p className="contact-card-text">Drop us a line anytime!</p>
            <a href="mailto:upanetra@gmail.com" className="contact-link">
              upanetra@gmail.com
            </a>
          </div>

          {/* Address Card */}
          <div className="contact-card">
            <div className="contact-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="contact-icon"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
              </svg>
            </div>
            <h3 className="contact-card-title">Visit Us</h3>
            <p className="contact-card-text">Come say hello at our office.</p>
            <p className="contact-address">Dillibazar, Kathmandu, Nepal</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-container">
          <h2 className="form-title">Send Us a Message</h2>
          <p className="form-subtitle">
            Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="form-textarea"
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="social-media-section">
          <h2 className="social-title">Follow Us</h2>
          <div className="social-icons">
            <Link to="/" aria-label="Facebook" className="social-icon-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="social-icon facebook"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </Link>
            <Link to="/" aria-label="YouTube" className="social-icon-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="social-icon youtube"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </Link>
            <Link to="/" aria-label="Instagram" className="social-icon-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="social-icon instagram"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <BottomTab />
    </>
  );
};

export default Contact;














// import { Link } from "react-router-dom";

// import React from "react";
// import Header from "../component/Home/Header";
// import MetaData from "./MetaData";
// import BottomTab from "./BottomTab";
// import Footer from "./Footer";

// const Contact = () => {
//   return (
//     <>
//       <MetaData title="Contact" />
//       <Header />
//       <div
//         style={{
//           padding: "40px 20px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           maxWidth: "1200px",
//           margin: "auto",
//           fontFamily: "'Inter', sans-serif",
//           backgroundColor: "#f9fafb",
//           minHeight: "100vh",
//         }}
//       >
//         {/* Contact Header */}
//         <div style={{ textAlign: "center", marginBottom: "40px" }}>
//           <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px" }}>
//             Get in Touch
//           </h1>
//           <p style={{ fontSize: "1.1rem", color: "#666", maxWidth: "600px", lineHeight: "1.6" }}>
//             We're here to help! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
//           </p>
//         </div>

//         {/* Contact Information Section */}
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "30px",
//             justifyContent: "center",
//             marginBottom: "60px",
//           }}
//         >
//           {/* Email Card */}
//           <div
//             style={{
//               backgroundColor: "#fff",
//               padding: "30px",
//               borderRadius: "12px",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//               textAlign: "center",
//               width: "280px",
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="40"
//               height="40"
//               fill="currentColor"
//               viewBox="0 0 16 16"
//               style={{ color: "#53c08e", marginBottom: "15px" }}
//             >
//               <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
//             </svg>
//             <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1a1a1a", marginBottom: "10px" }}>
//               Email Us
//             </h3>
//             <p style={{ fontSize: "1rem", color: "#666", marginBottom: "15px" }}>
//               Drop us a line anytime!
//             </p>
//             <a
//               href="mailto:khelkudshop@gmail.com"
//               style={{
//                 color: "#53c08e",
//                 textDecoration: "none",
//                 fontWeight: "500",
//                 fontSize: "1rem",
//               }}
//             >
//               upanetra@gmail.com
//             </a>
//           </div>

//           {/* Address Card */}
//           <div
//             style={{
//               backgroundColor: "#fff",
//               padding: "30px",
//               borderRadius: "12px",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//               textAlign: "center",
//               width: "280px",
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="40"
//               height="40"
//               fill="currentColor"
//               viewBox="0 0 16 16"
//               style={{ color: "#ff6b6b", marginBottom: "15px" }}
//             >
//               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
//               <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
//             </svg>
//             <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1a1a1a", marginBottom: "10px" }}>
//               Visit Us
//             </h3>
//             <p style={{ fontSize: "1rem", color: "#666", marginBottom: "15px" }}>
//               Come say hello at our office.
//             </p>
//             <p style={{ color: "#666", fontSize: "1rem" }}>
//               Dillibazar, Kathmandu, Nepal
//             </p>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div
//           style={{
//             backgroundColor: "#fff",
//             padding: "40px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//             width: "100%",
//             maxWidth: "600px",
//           }}
//         >
//           <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "20px", textAlign: "center" }}>
//             Send Us a Message
//           </h2>
//           <p style={{ fontSize: "1rem", color: "#666", textAlign: "center", marginBottom: "30px" }}>
//             Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.
//           </p>
//           <form>
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ display: "block", fontSize: "1rem", color: "#666", marginBottom: "8px" }} htmlFor="name">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "12px",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "8px",
//                   fontSize: "1rem",
//                   outline: "none",
//                   transition: "border-color 0.3s",
//                 }}
//               />
//             </div>
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ display: "block", fontSize: "1rem", color: "#666", marginBottom: "8px" }} htmlFor="email">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "12px",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "8px",
//                   fontSize: "1rem",
//                   outline: "none",
//                   transition: "border-color 0.3s",
//                 }}
//               />
//             </div>
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ display: "block", fontSize: "1rem", color: "#666", marginBottom: "8px" }} htmlFor="message">
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "12px",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "8px",
//                   fontSize: "1rem",
//                   outline: "none",
//                   transition: "border-color 0.3s",
//                 }}
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               style={{
//                 backgroundColor: "#53c08e",
//                 color: "white",
//                 padding: "12px 24px",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//                 fontWeight: "600",
//                 width: "100%",
//                 transition: "background-color 0.3s",
//               }}
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Social Media Section */}
//         <div style={{ textAlign: "center", margin: "60px 0 40px" }}>
//           <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "20px" }}>
//             Follow Us
//           </h2>
//           <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
//             <Link to="/" aria-label="Facebook">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="40"
//                 height="40"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 style={{ color: "#0084FF", transition: "transform 0.3s" }}
//               >
//                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//               </svg>
//             </Link>
//             <Link to="/" aria-label="YouTube">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="40"
//                 height="40"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 style={{ color: "#E81D45", transition: "transform 0.3s" }}
//               >
//                 <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
//               </svg>
//             </Link>
//             <Link to="/" aria-label="Instagram">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="40"
//                 height="40"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 style={{ color: "#EE6401", transition: "transform 0.3s" }}
//               >
//                 <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <BottomTab />
//     </>
//   );
// };

// export default Contact;









// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import Header from "../component/Home/Header";
// import MetaData from "./MetaData";
// import BottomTab from "./BottomTab";
// import Footer from "./Footer";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });
//   const [formStatus, setFormStatus] = useState({
//     submitted: false,
//     error: false,
//     message: ""
//   });
//   const [formErrors, setFormErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
    
//     // Clear error for this field when user starts typing
//     if (formErrors[name]) {
//       setFormErrors({
//         ...formErrors,
//         [name]: ""
//       });
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name.trim()) errors.name = "Name is required";
//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       errors.email = "Please enter a valid email address";
//     }
//     if (!formData.message.trim()) errors.message = "Message is required";
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       // Simulate form submission
//       setTimeout(() => {
//         setFormStatus({
//           submitted: true,
//           error: false,
//           message: "Thank you for your message! We'll get back to you soon."
//         });
        
//         // Reset form after successful submission
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: ""
//         });
//       }, 800);
//     }
//   };

//   return (
//     <>
//       <MetaData title="Contact Us | KhelKud Shop" />
//       <Header />
//       <div className="contact-hero" style={{
//         backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random/1600x900/?sports')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "300px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#fff",
//         textAlign: "center",
//         padding: "0 20px",
//         marginBottom: "60px"
//       }}>
//         <div>
//           <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "15px", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
//             Contact Us
//           </h1>
//           <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: "1.6", marginBottom: "0", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
//             We're here to help you with anything you need
//           </p>
//         </div>
//       </div>

//       <div style={{
//         maxWidth: "1200px",
//         margin: "0 auto",
//         padding: "0 20px 60px",
//         fontFamily: "'Inter', sans-serif",
//       }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           gap: "30px",
//           marginBottom: "60px",
//         }}>
//           {/* Contact Cards */}
//           <div style={{
//             backgroundColor: "#fff",
//             borderRadius: "12px",
//             boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
//             padding: "30px",
//             transition: "transform 0.3s ease",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             height: "100%",
//           }}>
//             <div style={{
//               width: "70px",
//               height: "70px",
//               borderRadius: "50%",
//               backgroundColor: "rgba(83, 192, 142, 0.1)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginBottom: "20px",
//             }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="32"
//                 height="32"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 style={{ color: "#53c08e" }}
//               >
//                 <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
//               </svg>
//             </div>
//             <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px", textAlign: "center" }}>
//               Email Us
//             </h3>
//             <p style={{ fontSize: "1rem", color: "#666", marginBottom: "15px", textAlign: "center" }}>
//               Our team is always ready to help you
//             </p>
//             <a
//               href="mailto:khelkudshop@gmail.com"
//               style={{
//                 color: "#53c08e",
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "1.1rem",
//                 transition: "color 0.3s",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "6px",
//               }}
//               onMouseOver={(e) => e.currentTarget.style.color = "#3da673"}
//               onMouseOut={(e) => e.currentTarget.style.color = "#53c08e"}
//             >
//               khelkudshop@gmail.com
//             </a>
//           </div>

//           <div style={{
//             backgroundColor: "#fff",
//             borderRadius: "12px",
//             boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
//             padding: "30px",
//             transition: "transform 0.3s ease",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             height: "100%",
//           }}>
//             <div style={{
//               width: "70px",
//               height: "70px",
//               borderRadius: "50%",
//               backgroundColor: "rgba(255, 107, 107, 0.1)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginBottom: "20px",
//             }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="32"
//                 height="32"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 style={{ color: "#ff6b6b" }}
//               >
//                 <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
//                 <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
//               </svg>
//             </div>
//             <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px", textAlign: "center" }}>
//               Visit Our Store
//             </h3>
//             <p style={{ fontSize: "1rem", color: "#666", marginBottom: "15px", textAlign: "center" }}>
//               Come check out our products in person
//             </p>
//             <p style={{ color: "#444", fontSize: "1.1rem", fontWeight: "600", textAlign: "center" }}>
//               Dillibazar, Kathmandu, Nepal
//             </p>
//             <a
//               href="https://maps.google.com/?q=Dillibazar,Kathmandu,Nepal"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 color: "#ff6b6b",
//                 textDecoration: "none",
//                 fontWeight: "500",
//                 fontSize: "0.9rem",
//                 marginTop: "8px",
//                 transition: "color 0.3s",
//               }}
//               onMouseOver={(e) => e.currentTarget.style.color = "#ff4f4f"}
//               onMouseOut={(e) => e.currentTarget.style.color = "#ff6b6b"}
//             >
//               View on map →
//             </a>
//           </div>

//           <div style={{
//             backgroundColor: "#fff",
//             borderRadius: "12px",
//             boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
//             padding: "30px",
//             transition: "transform 0.3s ease",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             height: "100%",
//           }}>
//             <div style={{
//               width: "70px",
//               height: "70px",
//               borderRadius: "50%",
//               backgroundColor: "rgba(95, 125, 255, 0.1)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginBottom: "20px",
//             }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="32"
//                 height="32"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 style={{ color: "#5f7dff" }}
//               >
//                 <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
//               </svg>
//             </div>
//             <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px", textAlign: "center" }}>
//               Call Us
//             </h3>
//             <p style={{ fontSize: "1rem", color: "#666", marginBottom: "15px", textAlign: "center" }}>
//               Available Mon-Fri, 9am to 6pm
//             </p>
//             <a
//               href="tel:+9779841234567"
//               style={{
//                 color: "#5f7dff",
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "1.1rem",
//                 transition: "color 0.3s",
//               }}
//               onMouseOver={(e) => e.currentTarget.style.color = "#4a66e0"}
//               onMouseOut={(e) => e.currentTarget.style.color = "#5f7dff"}
//             >
//               +977 984-123-4567
//             </a>
//           </div>
//         </div>

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
//           gap: "40px",
//           marginBottom: "60px",
//         }}>
//           {/* Contact Form Section */}
//           <div
//             style={{
//               backgroundColor: "#fff",
//               padding: "40px",
//               borderRadius: "12px",
//               boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
//             }}
//           >
//             <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px" }}>
//               Send Us a Message
//             </h2>
//             <p style={{ fontSize: "1rem", color: "#666", marginBottom: "30px" }}>
//               Have a question or feedback? We'd love to hear from you.
//             </p>

//             {formStatus.submitted ? (
//               <div style={{
//                 backgroundColor: "#eefff6",
//                 border: "1px solid #53c08e",
//                 borderRadius: "8px",
//                 padding: "20px",
//                 marginBottom: "20px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "15px"
//               }}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" style={{ color: "#53c08e" }} viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
//                 </svg>
//                 <span style={{ color: "#2a7c5a", fontSize: "1rem" }}>{formStatus.message}</span>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit}>
//                 <div style={{ marginBottom: "20px" }}>
//                   <label style={{ display: "block", fontSize: "1rem", color: "#444", marginBottom: "8px", fontWeight: "500" }} htmlFor="name">
//                     Your Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     style={{
//                       width: "100%",
//                       padding: "14px 16px",
//                       border: formErrors.name ? "1px solid #e74c3c" : "1px solid #e0e0e0",
//                       borderRadius: "8px",
//                       fontSize: "1rem",
//                       outline: "none",
//                       transition: "all 0.3s",
//                       backgroundColor: "#f9fafb"
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = "#5f7dff"}
//                     onBlur={(e) => e.target.style.borderColor = formErrors.name ? "#e74c3c" : "#e0e0e0"}
//                   />
//                   {formErrors.name && (
//                     <p style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "5px" }}>{formErrors.name}</p>
//                   )}
//                 </div>
//                 <div style={{ marginBottom: "20px" }}>
//                   <label style={{ display: "block", fontSize: "1rem", color: "#444", marginBottom: "8px", fontWeight: "500" }} htmlFor="email">
//                     Your Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     style={{
//                       width: "100%",
//                       padding: "14px 16px",
//                       border: formErrors.email ? "1px solid #e74c3c" : "1px solid #e0e0e0",
//                       borderRadius: "8px",
//                       fontSize: "1rem",
//                       outline: "none",
//                       transition: "all 0.3s",
//                       backgroundColor: "#f9fafb"
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = "#5f7dff"}
//                     onBlur={(e) => e.target.style.borderColor = formErrors.email ? "#e74c3c" : "#e0e0e0"}
//                   />
//                   {formErrors.email && (
//                     <p style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "5px" }}>{formErrors.email}</p>
//                   )}
//                 </div>
//                 <div style={{ marginBottom: "20px" }}>
//                   <label style={{ display: "block", fontSize: "1rem", color: "#444", marginBottom: "8px", fontWeight: "500" }} htmlFor="subject">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     style={{
//                       width: "100%",
//                       padding: "14px 16px",
//                       border: "1px solid #e0e0e0",
//                       borderRadius: "8px",
//                       fontSize: "1rem",
//                       outline: "none",
//                       transition: "all 0.3s",
//                       backgroundColor: "#f9fafb"
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = "#5f7dff"}
//                     onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
//                   />
//                 </div>
//                 <div style={{ marginBottom: "25px" }}>
//                   <label style={{ display: "block", fontSize: "1rem", color: "#444", marginBottom: "8px", fontWeight: "500" }} htmlFor="message">
//                     Your Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="6"
//                     value={formData.message}
//                     onChange={handleChange}
//                     style={{
//                       width: "100%",
//                       padding: "14px 16px",
//                       border: formErrors.message ? "1px solid #e74c3c" : "1px solid #e0e0e0",
//                       borderRadius: "8px",
//                       fontSize: "1rem",
//                       outline: "none",
//                       transition: "all 0.3s",
//                       backgroundColor: "#f9fafb",
//                       resize: "vertical"
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = "#5f7dff"}
//                     onBlur={(e) => e.target.style.borderColor = formErrors.message ? "#e74c3c" : "#e0e0e0"}
//                   ></textarea>
//                   {formErrors.message && (
//                     <p style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "5px" }}>{formErrors.message}</p>
//                   )}
//                 </div>
//                 <button
//                   type="submit"
//                   style={{
//                     backgroundColor: "#53c08e",
//                     color: "white",
//                     padding: "16px 24px",
//                     border: "none",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     fontSize: "1rem",
//                     fontWeight: "600",
//                     width: "100%",
//                     transition: "background-color 0.3s",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: "8px"
//                   }}
//                   onMouseOver={(e) => e.target.style.backgroundColor = "#3da673"}
//                   onMouseOut={(e) => e.target.style.backgroundColor = "#53c08e"}
//                 >
//                   Send Message
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                     <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
//                   </svg>
//                 </button>
//               </form>
//             )}
//           </div>

//           {/* FAQ Section */}
//           <div
//             style={{
//               backgroundColor: "#fff",
//               padding: "40px",
//               borderRadius: "12px",
//               boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
//             }}
//           >
//             <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px" }}>
//               Frequently Asked Questions
//             </h2>
//             <p style={{ fontSize: "1rem", color: "#666", marginBottom: "30px" }}>
//               Find quick answers to common questions about our services.
//             </p>

//             <div style={{ borderBottom: "1px solid #eee", paddingBottom: "15px", marginBottom: "15px" }}>
//               <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#1a1a1a", marginBottom: "10px" }}>
//                 What are your shipping options?
//               </h3>
//               <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
//                 We offer standard shipping (3-5 business days), express shipping (1-2 business days), and same-day delivery in select areas of Kathmandu.
//               </p>
//             </div>

//             <div style={{ borderBottom: "1px solid #eee", paddingBottom: "15px", marginBottom: "15px" }}>
//               <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#1a1a1a", marginBottom: "10px" }}>
//                 What is your return policy?
//               </h3>
//               <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
//                 We accept returns within 30 days of purchase. Items must be unused and in original packaging. Contact our customer service team to initiate a return.
//               </p>
//             </div>

//             <div style={{ borderBottom: "1px solid #eee", paddingBottom: "15px", marginBottom: "15px" }}>
//               <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#1a1a1a", marginBottom: "10px" }}>
//                 Do you offer international shipping?
//               </h3>
//               <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
//                 Yes, we ship to most countries worldwide. International shipping times typically range from 7-21 business days depending on the destination.
//               </p>
//             </div>

//             <div>
//               <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#1a1a1a", marginBottom: "10px" }}>
//                 How can I track my order?
//               </h3>
//               <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
//                 Once your order ships, you'll receive a tracking number via email. You can also check your order status in your account dashboard.
//               </p>
//             </div>
            
//             <a 
//               href="/faq"
//               style={{
//                 display: "inline-block",
//                 marginTop: "25px",
//                 color: "#5f7dff",
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "1rem",
//                 transition: "color 0.3s"
//               }}
//               onMouseOver={(e) => e.target.style.color = "#4a66e0"}
//               onMouseOut={(e) => e.target.style.color = "#5f7dff"}
//             >
//               View all FAQs →
//             </a>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div style={{
//           marginBottom: "60px",
//           backgroundColor: "#fff",
//           borderRadius: "12px",
//           overflow: "hidden",
//           boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
//         }}>
//           <div style={{
//             padding: "25px 40px",
//             borderBottom: "1px solid #eee"
//           }}>
//             <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#1a1a1a", margin: "0" }}>Find Us</h2>
//           </div>
//           <div style={{
//             height: "400px",
//             background: "#f4f4f4",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}>
//             <p style={{ color: "#888", fontSize: "1rem" }}>Map would be embedded here</p>
//             {/* Google Map would be embedded here */}
//           </div>
//         </div>

//         {/* Social Media Section */}
//         <div style={{ 
//           backgroundColor: "#fff",
//           padding: "40px",
//           borderRadius: "12px",
//           boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
//           textAlign: "center",
//           marginBottom: "40px"
//         }}>
//           <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#1a1a1a", marginBottom: "20px" }}>
//             Connect With Us
//           </h2>
//           <p style={{ fontSize: "1rem", color: "#666", marginBottom: "30px", maxWidth: "600px", margin: "0 auto 30px" }}>
//             Follow us on social media for the latest product updates, special offers, and sports tips!
//           </p>
//           <div style={{ 
//             display: "flex", 
//             justifyContent: "center", 
//             gap: "20px",
//             flexWrap: "wrap"
//           }}>
//             <Link to="/" aria-label="Facebook" style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               width: "60px",
//               height: "60px",
//               borderRadius: "50%",
//               backgroundColor: "#f5f7ff",
//               transition: "transform 0.3s, background-color 0.3s",
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = "translateY(-5px)";
//               e.currentTarget.style.backgroundColor = "#e9edff";
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.backgroundColor = "#f5f7ff";
//             }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="28"
//                 height="28"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 style={{ color: "#0084FF" }}
//               >
//                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//               </svg>
//             </Link>
//             <Link to="/" aria-label="Instagram" style={{
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "60px",
//   height: "60px",
//   borderRadius: "50%",
//   backgroundColor: "#f5f7ff",
//   transition: "transform 0.3s, background-color 0.3s",
// }}
// onMouseOver={(e) => {
//   e.currentTarget.style.transform = "translateY(-5px)";
//   e.currentTarget.style.backgroundColor = "#e9edff";
// }}
// onMouseOut={(e) => {
//   e.currentTarget.style.transform = "translateY(0)";
//   e.currentTarget.style.backgroundColor = "#f5f7ff";
// }}>
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="28"
//     height="28"
//     fill="currentColor"
//     viewBox="0 0 16 16"
//     style={{ color: "#E1306C" }}
//   >
//     <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//   </svg>
// </Link>
// <Link to="/" aria-label="Twitter" style={{
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "60px",
//   height: "60px",
//   borderRadius: "50%",
//   backgroundColor: "#f5f7ff",
//   transition: "transform 0.3s, background-color 0.3s",
// }}
// onMouseOver={(e) => {
//   e.currentTarget.style.transform = "translateY(-5px)";
//   e.currentTarget.style.backgroundColor = "#e9edff";
// }}
// onMouseOut={(e) => {
//   e.currentTarget.style.transform = "translateY(0)";
//   e.currentTarget.style.backgroundColor = "#f5f7ff";
// }}>
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="28"
//     height="28"
//     fill="currentColor"
//     viewBox="0 0 16 16"
//     style={{ color: "#1DA1F2" }}
//   >
//     <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
//   </svg>
// </Link>
// <Link to="/" aria-label="YouTube" style={{
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "60px",
//   height: "60px",
//   borderRadius: "50%",
//   backgroundColor: "#f5f7ff",
//   transition: "transform 0.3s, background-color 0.3s",
// }}
// onMouseOver={(e) => {
//   e.currentTarget.style.transform = "translateY(-5px)";
//   e.currentTarget.style.backgroundColor = "#e9edff";
// }}
// onMouseOut={(e) => {
//   e.currentTarget.style.transform = "translateY(0)";
//   e.currentTarget.style.backgroundColor = "#f5f7ff";
// }}>
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="28"
//     height="28"
//     fill="currentColor"
//     viewBox="0 0 16 16"
//     style={{ color: "#FF0000" }}
//   >
//     <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
//   </svg>
// </Link>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <BottomTab />
//     </>
//   );
// };

// export default Contact;