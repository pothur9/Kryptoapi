import React from "react";

function Apis() {
  return (
    <div className="pb-5"style={{ backgroundColor: "#131F36" }}>
      <h1
        className="text-4xl font-bold text-center p-10"
        style={{ color: "white" }}
      >
        Explore our APIs
      </h1>
      <div className="flex justify-evenly mb-16">
      <div
        className="card bg-base-100 w-120 shadow-xl m-9"
        style={{ backgroundColor: "#152640" }}
      >
        <div className="card-body">
          <h2 className="card-title">Crypto Api</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div
        className="card bg-base-100 w-120 shadow-xl m-9"
        style={{ backgroundColor: "#152640" }}
      >
        <div className="card-body">
          <h2 className="card-title">Crypto Api</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Apis;
