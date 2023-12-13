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
    navigate("/dashboard");
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="grid-container">
      <div className="form-container-home">
        <div className="form-text">
          <p>Welcome back!</p>
          <h1>INTRN</h1>
        </div>
        <form onSubmit={handleForm}>
          <TextInput
            type="name"
            name="name"
            label="Name"
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
          <div>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              keep me signed in
            </label>
          </div>
          <br />
          <Button type="submit" label="Login" className="button" />
        </form>
      </div>
      <div className="image-box"></div>
    </div>
  );
};
export default Loginpage;
