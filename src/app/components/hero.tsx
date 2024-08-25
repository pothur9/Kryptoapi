import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div style={{backgroundColor:"#102642"}}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/himage.png"
            className="max-w-xl   mix-blend-overlay "
            alt="hero"
            width={530} 
            height={530} 
          />
          <div>
            <h1 className="text-7xl font-bold" style={{color:"white"}}>Crypto Scanner</h1>
            <p className="py-6 text-2xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-blue-500 rounded-3xl text-lg" style={{color:"white"}} btn-2xl>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
