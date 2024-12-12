import React from "react";

interface AddToCartIconProps {
  counter: number; // Counter value to display
  onClick?: () => void;
}

const AddToCartIcon: React.FC<AddToCartIconProps> = ({ counter, onClick }) => {
  return (
    <div style={{alignContent: 'center', position: "relative", width: "25px", height: "25px" }}>
      <button onClick={onClick} className="relative flex items-center">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 104.43"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            className="cls-1"
            fillRule="evenodd"
            d="M97,0A25.9,25.9,0,1,1,78.67,7.59,25.79,25.79,0,0,1,97,0ZM3.66,10.89a3.71,3.71,0,0,1,0-7.42H9.11A17.3,17.3,0,0,1,18,5.81c4.92,3.12,5.79,7.57,7,12.59H66.7a31,31,0,0,0-.9,7.33H27.14L35.5,57.19H94.77l0-.18c.72.05,1.44.08,2.17.08a31.59,31.59,0,0,0,5.46-.48l-1.29,5.18a3.62,3.62,0,0,1-3.57,2.82H37.47c1.32,4.88,2.63,7.51,4.42,8.74,2.16,1.4,5.92,1.5,12.21,1.4H96.64a3.67,3.67,0,1,1,0,7.33H54.19c-7.79.09-12.58-.09-16.44-2.63s-6-7.14-8.07-15.31h0L17.09,16.52c0-.09,0-.09-.09-.19a6.51,6.51,0,0,0-2.82-4.22A9.51,9.51,0,0,0,9,10.89H3.66ZM85.66,86.4a9,9,0,1,1-9,9,9,9,0,0,1,9-9Zm-39.55,0a9,9,0,1,1-9,9,9,9,0,0,1,9-9Z"
          />
        </svg>
      </button>
      <div
        style={{
          position: "absolute",
          top: "2%",
          right: "-5%",
          background: "black",
          color: "white",
          borderRadius: "50%",
          width: "12px",
          height: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "9px",
          fontWeight: "600",
        }}
      >
        {counter > 0 ? counter : "+"}
      </div>
    </div>
  );
};

export default AddToCartIcon;
