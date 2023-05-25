import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddUser() {
const navigate= useNavigate()

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: 0,
    age: 0,
    password: "",
  });

  let name, value;

  const postuserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstname, lastname, email, phoneNumber, age, password } = userData;
    if (firstname && lastname && email && phoneNumber && age && password) {
      const res = fetch(
        'http://65.0.93.119:4000/adduser',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname, lastname, email, phoneNumber, age, password,
          }),
        }
      );

      if (res) {
        setUserData({
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: 0,
            age: 0,
            password: "",
        
        });

       alert("User added successfully");
       navigate("/");
      } else {
        alert("Before Submitted please fill the form!");
      }
    } else {
      alert("Something Wrong!");
    }
  };

  return (
    <div className="contactPage__container">
      <div className="form__container">
        <form className="signup_form">
          <div className="input_container">
            <p>first Name</p>
            <input
              required
              type="text"
              name="firstname"
              className="input"
              placeholder="Enter Your First Name"
              id="firstname"
              value={userData.firstname ? userData.firstname : ""}
              onChange={postuserData}
            />
          </div>
          <div className="input_container">
            <p>Last Name</p>
            <input
              required
              type="text"
              name="lastname"
              className="input"
              placeholder="Enter Your Last Name"
              id="lastname"
              value={userData.lastname ? userData.lastname : ""}
              onChange={postuserData}
            />
          </div>
        
          <div className="input_container">
            <p>Email</p>
            <input
              required
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              id="email"
              value={userData.email ? userData.email : ""}
              onChange={postuserData}
            />
          </div>
          <div className="input_container">
            <p>Mobile Number</p>
            <input
              required
              className="input"
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter your phone number"
              value={userData.phoneNumber ? userData.phoneNumber : ""}
              onChange={postuserData}
            />
          </div>
          <div className="input_container">
            <p>Enter Age </p>
            <input
              required
              className="input"
              type="number"
              name="age"
              id="age"
              placeholder="Enter your Age"
              value={userData.age ? userData.age : ""}
              onChange={postuserData}
            />
           </div>
           <div className="input_container">
            <p>Enter password </p>
            <input
              required
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={userData.password ? userData.password : ""}
              onChange={postuserData}
            />
           </div>
          <div className="btn_container">
            <input type="submit" onClick={submitData} />
          </div>
        </form>
      </div>
    </div>
  );
}

