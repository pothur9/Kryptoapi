import React from "react";

function Howitworks() {
  return (
    <div style={{ backgroundColor: "#131F36" }}>
      <div className="flex flex-col items-center justify-center p-8">
       
        <h1 className="text-4xl font-bold mb-8 pt-8"> How it works </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Step 1 */}
          <div className="card shadow-md p-6">
            <div className="text-5xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">
              Tell us what you want to shoot
            </h3>
            <p className="text-gray-600">
              Describe your product, pick the angles or upload your own
              references, and set image specifications in minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="card shadow-md p-6">
            <div className="text-5xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Ship your products</h3>
            <p className="text-gray-600">
              Ship your products by using a prepaid shipping label or simply
              drop them off at our studio in Arts District, Los Angeles.
            </p>
          </div>

          {/* Step 3 */}
          <div className="card shadow-md p-6">
            <div className="text-5xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">
              Review and approve the shots
            </h3>
            <p className="text-gray-600">
              Once the order is finished you can approve the shots and confirm a
              return shipping option that works for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
