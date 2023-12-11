import React from "react";
import TestimonialCards from "../homepage/TestimonialCards";
import testiData from "../homepage/TestimonialData";

const Testimonial = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center text-center mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
        {testiData.map((data, index) => {
          // Custom styling for cards 2 and 3 (index 1 and 2 in zero-based index)
          let customStyle = {};
          if (index === 1 || index === 2) {
            customStyle = { /* Your custom CSS styles here */ };
          }

          return (
            <div style={customStyle} key={index}>
              <TestimonialCards data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
