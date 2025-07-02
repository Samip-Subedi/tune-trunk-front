// import React from "react";
// import { Link } from "react-router-dom";
// import { Rating } from "@material-ui/lab";

// const ProductCard = ({ product }) => {
//   // Calculate discount percentage if there's an offer price
//   const discountPercentage = product.offerPrice > 0
//     ? Math.round(((product.price - product.offerPrice) / product.price) * 100)
//     : 0;

//   return (
//     <Link
//       to={`/product/${product._id}`}
//       className="product-card"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         textDecoration: "none",
//         color: "#333",
//         borderRadius: "12px",
//         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
//         background: "#fff",
//         width: "280px",
//         overflow: "hidden",
//         position: "relative",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = "translateY(-6px)";
//         e.currentTarget.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.12)";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = "translateY(0)";
//         e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
//       }}
//     >
//       {/* Image Container with Discount Badge */}
//       <div style={{ position: "relative" }}>
//         <img
//           src={product.images[0].url}
//           alt={product.name}
//           style={{
//             width: "100%",
//             height: "220px",
//             objectFit: "cover",
//           }}
//         />
        
//         {/* Discount Badge */}
//         {discountPercentage > 0 && (
//           <div
//             style={{
//               position: "absolute",
//               top: "12px",
//               left: "12px",
//               background: "#e53935",
//               color: "white",
//               padding: "4px 8px",
//               borderRadius: "4px",
//               fontSize: "0.8rem",
//               fontWeight: "bold",
//             }}
//           >
//             {discountPercentage}% OFF
//           </div>
//         )}
//       </div>

//       {/* Product Details Container */}
//       <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
//         {/* Product Category - Optional */}
//         {product.category && (
//           <span
//             style={{
//               fontSize: "0.75rem",
//               color: "#757575",
//               textTransform: "uppercase",
//               letterSpacing: "0.5px",
//             }}
//           >
//             {product.category}
//           </span>
//         )}

//         {/* Product Name */}
//         <h2
//           style={{
//             fontSize: "1rem",
//             fontWeight: "600",
//             margin: "0",
//             lineHeight: "1.3",
//             height: "2.6em",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             display: "-webkit-box",
//             WebkitLineClamp: "2",
//             WebkitBoxOrient: "vertical",
//           }}
//         >
//           {product.name}
//         </h2>

//         {/* Ratings Section */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//             margin: "4px 0",
//           }}
//         >
//           <Rating 
//             value={product.ratings} 
//             readOnly 
//             precision={0.5} 
//             size="small"
//             style={{ color: "#FF9017" }}
//           />
//           <span
//             style={{
//               fontSize: "0.85rem",
//               color: "#666",
//               fontWeight: "500",
//             }}
//           >
//             {product.ratings.toFixed(1)} ({product.numOfReviews})
//           </span>
//         </div>

//         {/* Price Section */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//             marginTop: "6px",
//           }}
//         >
//           {product.offerPrice > 0 ? (
//             <>
//               <span
//                 style={{
//                   color: "#e53935",
//                   fontWeight: "700",
//                   fontSize: "1.25rem",
//                 }}
//               >
//                 ${product.offerPrice}
//               </span>
//               <span
//                 style={{
//                   fontSize: "0.95rem",
//                   fontWeight: "500",
//                   textDecoration: "line-through",
//                   color: "#9e9e9e",
//                 }}
//               >
//                 ${product.price}
//               </span>
//             </>
//           ) : (
//             <span
//               style={{
//                 fontWeight: "700",
//                 fontSize: "1.25rem",
//                 color: "#333",
//               }}
//             >
//               ${product.price}
//             </span>
//           )}
//         </div>

//         {/* Additional Info or In Stock Indicator */}
//         {product.stock > 0 ? (
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "5px",
//               margin: "4px 0 0 0",
//             }}
//           >
//             <span
//               style={{
//                 width: "8px",
//                 height: "8px",
//                 borderRadius: "50%",
//                 background: "#4caf50",
//                 display: "inline-block",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: "0.8rem",
//                 color: "#4caf50",
//                 fontWeight: "500",
//               }}
//             >
//               In Stock
//             </span>
//           </div>
//         ) : (
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "5px",
//               margin: "4px 0 0 0",
//             }}
//           >
//             <span
//               style={{
//                 width: "8px",
//                 height: "8px",
//                 borderRadius: "50%",
//                 background: "#f44336",
//                 display: "inline-block",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: "0.8rem",
//                 color: "#f44336",
//                 fontWeight: "500",
//               }}
//             >
//               Out of Stock
//             </span>
//           </div>
//         )}
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;


import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  // Calculate discount percentage if there's an offer price
  const discountPercentage = product.offerPrice > 0
    ? Math.round(((product.price - product.offerPrice) / product.price) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product._id}`}
      className="product-card"
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "#333",
        borderRadius: "12px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        background: "#fff",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Poppins', sans-serif"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 6px 25px rgba(0, 0, 0, 0.07)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
      }}
    >
      {/* Image Container with Discount Badge */}
      <div style={{ position: "relative" }}>
        <img
          src={product.images[0].url}
          alt={product.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
          }}
        />
        
        {/* Discount Badge - Updated to match gradient style */}
        {discountPercentage > 0 && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "linear-gradient(135deg, #197ef3, #5e30c9)",
              color: "white",
              padding: "6px 12px",
              borderRadius: "30px",
              fontSize: "0.8rem",
              fontWeight: "bold",
              boxShadow: "0 2px 5px rgba(25, 126, 243, 0.2)",
            }}
          >
            {discountPercentage}% OFF
          </div>
        )}
      </div>

      {/* Product Details Container */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
        {/* Product Category - Optional */}
        {product.category && (
          <span
            style={{
              fontSize: "0.75rem",
              color: "#757575",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {product.category}
          </span>
        )}

        {/* Product Name */}
        <h2
          style={{
            fontSize: "1rem",
            fontWeight: "600",
            margin: "0",
            lineHeight: "1.3",
            height: "2.6em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.name}
        </h2>

        {/* Ratings Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            margin: "4px 0",
          }}
        >
          <Rating 
            value={product.ratings} 
            readOnly 
            precision={0.5} 
            size="small"
            style={{ color: "#197ef3" }}  // Updated to match theme color
          />
          <span
            style={{
              fontSize: "0.85rem",
              color: "#666",
              fontWeight: "500",
            }}
          >
            {product.ratings.toFixed(1)} ({product.numOfReviews})
          </span>
        </div>

        {/* Price Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "auto",
            paddingTop: "10px",
          }}
        >
          {product.offerPrice > 0 ? (
            <>
              <span
                style={{
                  background: "linear-gradient(to right, #197ef3, #5e30c9)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontWeight: "700",
                  fontSize: "1.25rem",
                }}
              >
                ${product.offerPrice}
              </span>
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  textDecoration: "line-through",
                  color: "#9e9e9e",
                }}
              >
                ${product.price}
              </span>
            </>
          ) : (
            <span
              style={{
                background: "linear-gradient(to right, #197ef3, #5e30c9)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "700",
                fontSize: "1.25rem",
              }}
            >
              ${product.price}
            </span>
          )}
        </div>

        {/* Stock Indicator - Updated to match style */}
        {product.stock > 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              margin: "4px 0 0 0",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4caf50",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "0.8rem",
                color: "#4caf50",
                fontWeight: "500",
              }}
            >
              In Stock
            </span>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              margin: "4px 0 0 0",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#f44336",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "0.8rem",
                color: "#f44336",
                fontWeight: "500",
              }}
            >
              Out of Stock
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;