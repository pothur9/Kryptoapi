import React from "react";
import Navbar from "../components/navbar";

const ContactForm = () => {
  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-black to-blue-900 px-4">
      <div className="w-full max-w-2xl bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-white mb-6">Lets Get In Touch.</h2>
        <p className="text-gray-300 mb-8">
          Or just reach out manually to <a href="mailto:hello@slothui.com" className="text-blue-400 hover:underline">hello@slothui.com</a>.
        </p>
        <form className="space-y-4">
          <div className="form-control">
            <label className="label text-white">
              <span className="label-text">Full Name</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="Enter your full name..." className="input input-bordered w-full pl-10"/>
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.364A8.501 8.501 0 0112 15.5a8.501 8.501 0 016.879 2.864M15 11a4 4 0 10-8 0 4 4 0 008 0z" />
                </svg>
              </span>
            </div>
          </div>
          
          <div className="form-control">
            <label className="label text-white">
              <span className="label-text">Email Address</span>
            </label>
            <div className="relative">
              <input type="email" placeholder="Enter your email address..." className="input input-bordered w-full pl-10"/>
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4M16 12l-4 4m0-8l4 4M4 12h8" />
                </svg>
              </span>
            </div>
          </div>
          
          <div className="form-control">
            <label className="label text-white">
              <span className="label-text">Phone Number</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="+44 (000) 000-0000" className="input input-bordered w-full pl-10"/>
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3h12M6 7h12M6 11h12m-6 4h6" />
                </svg>
              </span>
            </div>
          </div>

          <div className="form-control">
            <label className="label text-white">
              <span className="label-text">Message</span>
            </label>
            <textarea className="textarea textarea-bordered w-full h-24" placeholder="Enter your main text here..."></textarea>
          </div>

          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text text-white">I hereby agree to our <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> terms.</span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
