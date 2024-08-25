import React from "react";
import Navbar
 from "../components/navbar";
const PricingPage: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center py-10 ">
      <h1 className="text-4xl font-bold mb-32">Api Pricings</h1>
     

      <div className="flex flex-col lg:flex-row justify-center gap-6">
        {/* Basic Plan */}
        <div className="card w-96 bg-base-100 text-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-lg">Basic</h2>
            <p className="text-4xl font-bold">₹215.87 / month</p>
            <p className="text-sm text-gray-500">
              ₹2,590.48 billed annually <span className="text-green-500">SAVE 11%</span>
            </p>
            <ul className="mt-4 space-y-2">
              <li>✓ Small reply boost</li>
              <li>✓ Encrypted direct messages</li>
              <li>✓ Bookmark folders</li>
              <li>✓ Highlights tab</li>
              <li>✓ Edit post</li>
              <li>✓ Post longer videos</li>
              <li>✓ Longer posts</li>
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="card w-96 bg-base-100 text-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-lg">Premium</h2>
            <p className="text-4xl font-bold">₹566.67 / month</p>
            <p className="text-sm text-gray-500">
              ₹6,800 billed annually <span className="text-green-500">SAVE 12%</span>
            </p>
            <ul className="mt-4 space-y-2">
              <li>✓ Everything in Basic, and</li>
              <li>✓ Half Ads in For You and Following</li>
              <li>✓ Larger reply boost</li>
              <li>✓ Get paid to post</li>
              <li>✓ Checkmark</li>
              <li>✓ Grok 2 AI Assistant</li>
              <li>✓ X Pro, Analytics, Media Studio</li>
              <li>✓ Creator Subscriptions</li>
            </ul>
          </div>
        </div>

        {/* Premium+ Plan */}
        <div className="card w-96 bg-base-100 text-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-lg">Premium+</h2>
            <p className="text-4xl font-bold">₹1,133.33 / month</p>
            <p className="text-sm text-gray-500">
              ₹13,600 billed annually <span className="text-green-500">SAVE 12%</span>
            </p>
            <ul className="mt-4 space-y-2">
              <li>✓ Everything in Premium, and</li>
              <li>✓ Fully ad-free</li>
              <li>✓ Largest reply boost</li>
              <li>✓ Write Articles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PricingPage;
