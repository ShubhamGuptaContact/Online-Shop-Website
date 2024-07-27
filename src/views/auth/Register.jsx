import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-w-screen min-h-screen bg-primary flex justify-center items-center">
      <div className="w-[350px] text-white p-2">
        <div className="bg-second p-4 rounded-md">
          <h1 className="text-xl mb-3 font-bold">Welcome to OnePixel Portal</h1>
          <p className="text-sm mb-3 font-medium">
            Please Register your account
          </p>
          <form action="">
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-center w-full gap-2">
                <input
                  className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500  "
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                />
              <label htmlFor="checkbox" className="text-sm font-medium">  Agree Terms & Condition </label>
            </div>
            <button className="bg-slate-800 w-full mt-2 rounded hover:shadow-red-200/50 hover:shadow-lg text-white px-7 py-2 mb-3">Sign Up</button>

            <div className="flex items-center mb-3 gap-3 justify-center">
                <p>Already Have an account? <Link className="font-bold" to="/login">Sign In</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
