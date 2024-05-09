import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import toast from "react-hot-toast";
import "./register.css";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function Register() {
  const [file, setFile] = useState("");
  const [profile, setProfile] = useState(""); // State for selected profile
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState(""); //52
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: "",
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;

    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
    //console.log(email);
  };

  const onUpload = async (element) => {
    setLoading(true);
    if (element.type === "image/jpeg" || element.type === "image/png") {
      const data = new FormData();
      data.append("file", element);
      data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
      data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
      fetch(process.env.REACT_APP_CLOUDINARY_BASE_URL, {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => setFile(data.url.toString()));
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("Please select an image in jpeg or png format");
    }
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      if (loading) return;
      if (file === "")
        return toast.error("Please select an image in jpeg or png format");

      const { firstname, lastname, email, password, confpassword } =
        formDetails;
      if (!firstname || !lastname || !email || !password || !confpassword) {
        return toast.error("Input field should not be empty");
      } else if (firstname.length < 3) {
        return toast.error("First name must be at least 3 characters long");
      } else if (lastname.length < 3) {
        return toast.error("Last name must be at least 3 characters long");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      } else if (password !== confpassword) {
        return toast.error("Passwords do not match");
      }
      // setemail(e.target.value);
      // console.log(email);

      await toast.promise(
        axios.post("/user/register", {
          firstname,
          lastname,
          email,
          password,
          pic: file,
          profile: profile,
        }),
        {
          pending: "Registering user...",
          success: "User registered successfully",
          error: "Unable to register user",
          loading: "Registering user...",
        }
      );
      return navigate("/login");
    } catch (error) {}
  };

  return (
    <section className="register-section flex-center">
      <div className="register-container flex-center">
        <h2 className="form-heading">Sign Up</h2>
        <form onSubmit={formSubmit} className="register-form">
          <input
            type="text"
            name="firstname"
            className="form-input"
            placeholder="Enter your first name"
            value={formDetails.firstname}
            onChange={inputChange}
          />
          <input
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Enter your last name"
            value={formDetails.lastname}
            onChange={inputChange}
          />
          <select
            name="profile"
            className="form-input"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          >
            <option value="">Select Profile</option>
            <option value="Doctor">Doctor</option>
            <option value="Patient">Patient</option>
          </select>

          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />

          <div className="profile">
            <label className="custom-file-upload">Choose pic</label>
            <input
              type="file"
              id="profile-pic"
              name="profile-pic"
              onChange={(e) => onUpload(e.target.files[0])}
              className="form-input-hidden"
            />
          </div>

          {/* <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />
          <input
            type="password"
            name="confpassword"
            className="form-input"
            placeholder="Confirm your password"
            value={formDetails.confpassword}
            onChange={inputChange}
          /> */}
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />
          <input
            type={showPassword ? "text" : "password"}
            name="confpassword"
            className="form-input"
            placeholder="Confirm your password"
            value={formDetails.confpassword}
            onChange={inputChange}
          />
          <div className="Show">
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="show-password">Show Password</label>
          </div>

          <button
            type="submit"
            className="btn form-btn"
            disabled={loading ? true : false}
          >
            sign up
          </button>
        </form>
        <p>
          Already a user?{" "}
          <NavLink className="login-link" to={"/login"}>
            Log in
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Register;

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "../styles/register.css";
// import axios from "axios";
// import toast from "react-hot-toast";

// function Register() {
//   const navigate = useNavigate();
//   const [file, setFile] = useState("");
//   const [profile, setProfile] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formDetails, setFormDetails] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     confpassword: "",
//   });

//   const inputChange = (e) => {
//     const { name, value } = e.target;
//     setFormDetails(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const onUpload = async (element) => {
//     setLoading(true);
//     if (element.type === "image/jpeg" || element.type === "image/png") {
//       const data = new FormData();
//       data.append("file", element);
//       data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
//       data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
//       try {
//         const response = await fetch(process.env.REACT_APP_CLOUDINARY_BASE_URL, {
//           method: "POST",
//           body: data,
//         });
//         const result = await response.json();
//         setFile(result.url.toString());
//       } catch (error) {
//         toast.error("Failed to upload image");
//       }
//       setLoading(false);
//     } else {
//       setLoading(false);
//       toast.error("Please select an image in jpeg or png format");
//     }
//   };

//   const formSubmit = async (e) => {
//     e.preventDefault();
//     if (loading) return;
//     if (file === "") return toast.error("Please select an image in jpeg or png format");
//     const { firstname, lastname, email, password, confpassword } = formDetails;
//     if (!firstname || !lastname || !email || !password || !confpassword) {
//       return toast.error("Input field should not be empty");
//     }
//     if (firstname.length < 3) return toast.error("First name must be at least 3 characters long");
//     if (lastname.length < 3) return toast.error("Last name must be at least 3 characters long");
//     if (password.length < 5) return toast.error("Password must be at least 5 characters long");
//     if (password !== confpassword) return toast.error("Passwords do not match");

//     await toast.promise(
//       axios.post("/user/register", {
//         firstname,
//         lastname,
//         email,
//         password,
//         pic: file,
//         profile,
//       }), {
//         pending: "Registering user...",
//         success: "User registered successfully",
//         error: "Unable to register user",
//       }
//     );
//     navigate("/login");
//   };

//   return (
//     <section className="register-section flex-center">
//       <div className="register-container flex-center">
//         <h2 className="form-heading">Sign Up</h2>
//         <form onSubmit={formSubmit} className="register-form">
//           {/* Existing form fields */}
//           <div className="profile">
//             <label className="custom-file-upload">Choose pic</label>
//             <input type="file" id="profile-pic" name="profile-pic" onChange={(e) => onUpload(e.target.files[0])} className="form-input-hidden" />
//           </div>
//           {/* Password fields */}
         
//           <div>
//             <input
//               type="checkbox"
//               id="show-password"
//               checked={showPassword}
//               onChange={() => setShowPassword(!showPassword)}
//             />
//             <label htmlFor="show-password">Show Password</label>
//           </div>
//           <button type="submit" className="btn form-btn" disabled={loading}>Sign Up</button>
//         </form>
//         <p>Already a user? <NavLink className="login-link" to="/login">Log in</NavLink></p>
//       </div>
//     </section>
//   );
// }

// export default Register;
