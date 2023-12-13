import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./login.css";
import { InputText } from "../Input Text Box/InputText";
import { Button } from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

/**
 * Primary page used to read and store user credentials
 * @returns LoginPage component
 */
export const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState(""); //make ref
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const data = sessionStorage.getItem("userEmail");
    setUserEmail(data);
  }, []);

  useEffect(() => {
    if (success) {
      fetch(`http://localhost:6007/users/${userEmail}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          let userData = data[0];
          if (userData.password !== userPassword) {
            alert("Incorrect password!");
            return;
          }
          sessionStorage.setItem("userName", userData.firstName);
          sessionStorage.setItem("logstatus", "loggedin");
          window.location.href = "/";
        });
    }
  }, [success]);
  /**
   * Function to handle user login
   */
  function handleLogin() {
    sessionStorage.setItem("userEmail", userEmail);
    if (userEmail !== "" && userPassword !== "") {
      setSuccess(!success);
      setSuccess(!success);
      //pass username and password to backend
      fetch(`http://localhost:6007/users/${userEmail}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 400) {
          alert("Email not found!");
          setSuccess(false);
        } else {
          setSuccess(true);
        }
      });
    } else {
      alert("fill out all the fields");
    }
  }

  return (
    <Col className="container-column">
      <div className="login-header">
        <header>Login</header>
      </div>
      <div className="input-box">
        <InputText
          id={"email"}
          label={"Email"}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        ></InputText>
        <InputText
          password={true}
          id={"password"}
          label={"Password"}
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        ></InputText>
      </div>
      <div className="input-submit">
        <Button
          size={"large"}
          primary={true}
          label={"Sign In"}
          onClick={handleLogin}
        ></Button>
      </div>
      <div className="sign-up-link">
        <p>
          Don't have account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </Col>
  );
};
export default LoginPage;

LoginPage.propTypes = {
  /**
   *  Email used to Login
   */
  userEmail: PropTypes.string,
};
LoginPage.defaultProps = {
  userEmail: "",
};
