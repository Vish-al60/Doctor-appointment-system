import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const ApplyDoctor = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    specialization: "",
    experience: "",
    fees: "",
    doc:"",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const btnClick = async (e) => {
    e.preventDefault();

     const { experience,specialization,fees,doc} = formDetails;
     console.log(formDetails);
     if (!experience || !specialization || !fees || !doc) {
       return toast.error("Input field should not be empty");
     }
    try {
      await toast.promise(
        axios.post(
          "/doctor/applyfordoctor",
          {
            formDetails,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Doctor application sent successfully",
          error: "Unable to send Doctor application",
          loading: "Sending doctor application...",
        }
      );

      navigate("/");
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Navbar />
      <section
        className="register-section flex-center apply-doctor"
        id="contact"
      >
        <div className="register-container flex-center contact">
          <h2 className="form-heading">Apply for Doctor</h2>
          <form className="register-form ">
            <input
              type="text"
              name="specialization"
              className="form-input"
              placeholder="Enter your specialization"
              value={formDetails.specialization}
              onChange={inputChange}
            />
            <input
              type="number"
              name="experience"
              className="form-input"
              placeholder="Enter your experience (in years)"
              value={formDetails.experience}
              onChange={inputChange}
            />
            <input
              type="number"
              name="fees"
              className="form-input"
              placeholder="Enter your fees  (in INR)"
              value={formDetails.fees}
              onChange={inputChange}
            />
            <input
              type="text"
              name="doc"
              className="form-input"
              placeholder="Enter your Doc link here..."
              value={formDetails.doc}
              onChange={inputChange}
            />
            <button
              type="submit"
              className="btn form-btn"
              onClick={btnClick}
            >
              apply
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ApplyDoctor;