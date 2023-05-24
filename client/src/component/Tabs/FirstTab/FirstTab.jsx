import React from "react";
import FirstForm from "../FirstForm/FirstForm";
import "./FirstTab.scss";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function FirstTab() {
  return (
    <div className="firstTab driver flex">
      <p className="form-bold p-text">
        Personal information and vehicle details
      </p>
      <p className="form-text p-text">
        Only your first name and vehicle details are visible to clients during
        the booking
      </p>
      <div className="w-full">
        <h2 className="text-black-500 font-extrabold mt-1 ">
          Have multiple vehicle?
        </h2>
        <span className="block cursor-pointer">
          <Link to="/" className="text-blue-500 underline">
            Sign up as a fleet owner
          </Link>
        </span>
      </div>

      <FirstForm />
    </div>
  );
}

export default FirstTab;
