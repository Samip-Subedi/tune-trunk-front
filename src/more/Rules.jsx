import React from "react";
import "./Rules.css";
import Header from "../component/Home/Header";
import BottomTab from "./BottomTab";
import MetaData from "./MetaData";
import Footer from "./Footer";

const Rules = () => {
  return (
    <>
      <MetaData title="Rules" />
      <Header />
      <div className="rules-container">
        <div className="rules-header">
          <h1 className="rules-title">User Rules to Follow</h1>
          <p className="rules-subtitle">Please review our guidelines to ensure a positive experience</p>
          <div className="rules-header-decoration"></div>
        </div>
        
        <div className="rules-intro">
          <div className="intro-graphic">
            <div className="rules-icon-container">
              <div className="rules-icon">📋</div>
            </div>
          </div>
          <div className="intro-text">
            <p>Our platform is built on mutual respect and clear guidelines. These rules help ensure a safe, enjoyable experience for all users. Please take a moment to familiarize yourself with our expectations.</p>
          </div>
        </div>
        
        <div className="rules-timeline">
          <div className="rule-card">
            <div className="rule-number">01</div>
            <div className="rule-content">
              <h2 className="rule-heading">User Conduct</h2>
              <p className="rule-text">
                Users should conduct themselves in a respectful and appropriate manner while using the website. This includes refraining from using offensive language, engaging in cyberbullying, or making derogatory comments about other users.
              </p>
            </div>
          </div>
          
          <div className="rule-card">
            <div className="rule-number">02</div>
            <div className="rule-content">
              <h2 className="rule-heading">Account Registration</h2>
              <p className="rule-text">
                Users may be required to register for an account to make purchases and should provide accurate and up-to-date information. Users should also keep their login information secure and not share it with others.
              </p>
            </div>
          </div>
          
          <div className="rule-card">
            <div className="rule-number">03</div>
            <div className="rule-content">
              <h2 className="rule-heading">Intellectual Property</h2>
              <p className="rule-text">
                Users must respect the intellectual property of the website and its content providers, including trademarks, copyrights, and patents. Users should not copy, distribute, or use any website content without obtaining proper authorization.
              </p>
            </div>
          </div>
          
          <div className="rule-card">
            <div className="rule-number">04</div>
            <div className="rule-content">
              <h2 className="rule-heading">Product Reviews</h2>
              <p className="rule-text">
                Users are encouraged to provide product reviews and feedback, but they should ensure that their reviews are honest, accurate, and not misleading. Reviews should also comply with the website's guidelines for acceptable content.
              </p>
            </div>
          </div>
          
          <div className="rule-card">
            <div className="rule-number">05</div>
            <div className="rule-content">
              <h2 className="rule-heading">Payment and Shipping</h2>
              <p className="rule-text">
                Users should review the website's payment and shipping policies before making a purchase and should provide accurate and complete payment and shipping information. Users should also be aware of any applicable taxes or fees.
              </p>
            </div>
          </div>
          
          <div className="rule-card">
            <div className="rule-number">06</div>
            <div className="rule-content">
              <h2 className="rule-heading">Returns and Exchanges</h2>
              <p className="rule-text">
                Users should be aware of the website's return and exchange policies and should follow the guidelines for returning or exchanging products. Users should also be aware of any deadlines or restrictions on returns or exchanges.
              </p>
            </div>
          </div>
        </div>
        
        <div className="rules-agreement">
          <div className="agreement-checkmark">✓</div>
          <div className="agreement-text">
            <p className="thank-you">Thank you for reviewing our rules and guidelines.</p>
            <p className="compliance-message">By using our services, you agree to comply with these rules.</p>
          </div>
        </div>
      </div>
      <Footer />
      <BottomTab />
    </>
  );
};

export default Rules;