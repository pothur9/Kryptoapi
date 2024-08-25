import React from "react";
import Image from "next/image";

function Features() {
  return (
    <>
      <div style={{ backgroundColor: "#131F36" }}>
        <h1
          className="text-4xl font-bold text-center p-10"
          style={{ color: "white" }}
        >
          Our Features
        </h1>
        <div className="flex justify-evenly">
          <div className="card bg-base-100 image-full w-96 shadow-xl m-5">
            <figure>
              <Image src="./fimg1.jpg" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"style={{color:"white"}}>Target fraud tokens, nfts, coins and more</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-96 shadow-xl m-5">
            <figure>
              <Image src="./fimg2.jpg" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title" style={{color:"white"}}>Chain token CA and whitelist if fraud</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-96 shadow-xl m-5">
            <figure>
              <Image src="./fimg4.jpg" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"style={{color:"white"}}>Have different subscription and plans based - requests per seconds</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
             
        </div>
      </div>
    </>
  );
}

export default Features;
