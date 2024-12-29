import React from "react";
import Sticky from "react-stickynode";

const StickyWithAdditionalFeatures = () => {
  return (
    <div className="container mx-auto p-6">
      <Sticky
        enabled={true}
        top={0}
        bottom={100}
        innerZ={10}
        activatedClass="bg-green-500"
        onStateChange={(status) => {
          console.log("Sticky status changed:", status);
        }}
      >
        <div className="bg-blue-500 text-white p-4 shadow-lg">
          <h1 className="text-xl font-semibold">Sticky Navbar with Features</h1>
        </div>
      </Sticky>

      <div className="mt-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt massa vitae metus dignissim, et consequat justo volutpat.
          ...
        </p>
        <p className="mt-4">...</p>
      </div>
    </div>
  );
};

export default StickyWithAdditionalFeatures;
