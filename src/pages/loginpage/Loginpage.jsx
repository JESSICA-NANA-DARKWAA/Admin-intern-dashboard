import React, { useState } from "react";
import Picture from "../../assets/images/pic1.png";
import Button from "../../components/button/Button";
import "./Loginpage.css";
import TextInput from "../../components/textinput/TextInput";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [form, setForm] = useState({
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault(); //prevent page from refreshing
    localStorage.setItem("user", JSON.stringify(form));

    navigate("/addphoto");
  };
  return (
    <div className="grid-container">
      <form onSubmit={handleForm}>
        <TextInput
          type="email"
          name="email"
          label="Email"
          placeholder="u@gmail.com"
          required={true}
          onChange={(value) => setForm({ ...form, email: value })}
        />
        <br />
        <TextInput
          type="Password"
          name="password"
          label="Password"
          required={true}
          onChange={(value) => setForm({ ...form, password: value })}
        />
        <Button type="submit" label="login" className="button" />
      </form>
      <div className="image-box">
        <img src={Picture} alt="" className="main-image" />
      </div>
    </div>
  );
};

export default Loginpage;
