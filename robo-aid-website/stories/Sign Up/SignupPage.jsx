import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./signup.css";
import { InputText } from "../Input Text Box/InputText";
import { Button } from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

/**
 * Primary page used to read and store user credentials
 * @returns SignupPage component
 */
export const SignupPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [passwordOneEmpty, setPasswordOneEmpty] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);

  const passErrorMessage = "Passwords don't match";
  const emailErrorMessage = "Please enter a valid email";
  /**
   * useEffect hook to check if userEmail is valid
   */
  useEffect(() => {
    if (!userEmail.includes("@") && userEmail !== "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [userEmail]);
  /**
   * useEffect hook to check if userPassword is empty
   */
  useEffect(() => {
    if (userPassword !== "") {
      setPasswordOneEmpty(false);
    } else if (userPassword === "" && confirmPassword === "") {
      setPasswordOneEmpty(true);
      setPasswordsDontMatch(false);
      setPasswordsMatch(false);
    }
  }, [userPassword]);

  /**
   * useEffect hook to check if userPassword and userPassword2 match
   */
  useEffect(() => {
    if (userPassword === confirmPassword && userPassword !== "") {
      setPasswordsDontMatch(false);
      setPasswordsMatch(true);
    } else if (userPassword !== confirmPassword && confirmPassword !== "") {
      setPasswordsDontMatch(true);
      setPasswordsMatch(false);
    }
  }, [confirmPassword, userPassword]);

  useEffect(() => {
    if (success) {
      fetch("http://localhost:6007/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: userEmail.toLowerCase(),
          password: userPassword,
        }),
      });
      sessionStorage.setItem("logstatus", "loggedin");
      sessionStorage.setItem("userName", firstName);
      sessionStorage.setItem("userEmail", userEmail.toLowerCase());
      window.location.href = "/";
    }
  }, [success]);
  /**
   * Function to handle Signup button click
   */
  function handleSignup() {
    if (
      firstName === "" ||
      lastName === "" ||
      userEmail === "" ||
      userPassword === "" ||
      confirmPassword === ""
    ) {
      alert("fill out all the fields");
      return;
    }
    if (passwordsDontMatch && confirmPassword !== "" && userPassword !== "") {
      alert("passwords dont match");
      return;
    }
    if (emailError) {
      alert("invalid email");
      return;
    }

    fetch("http://localhost:6007/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: userEmail.toLowerCase(),
        password: userPassword,
      }),
    }).then((res) => {
      res.json();
      if (res.status === 400) {
        alert("Email already exists!");
        setSuccess(false);
      } else {
        setSuccess(true);
      }
    });
  }

  return (
    <Col className="container-column">
      <div className="signup-header">
        <header>Sign Up</header>
      </div>
      <div className="input-box">
        <InputText
          id={"firstName"}
          label={"First Name"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></InputText>
      </div>
      <div className="input-box">
        <InputText
          id={"lastName"}
          label={"Last Name"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></InputText>
      </div>
      <div className="input-box">
        <InputText
          id={"email"}
          label={"Email"}
          value={userEmail}
          error={emailError}
          errorMessage={emailErrorMessage}
          onChange={(e) => setUserEmail(e.target.value)}
        ></InputText>
        <InputText
          password={true}
          id={"password"}
          label={"Password"}
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        ></InputText>
        <InputText
          password={true}
          error={passwordsDontMatch}
          success={passwordsMatch}
          id={"confirmPassword"}
          errorMessage={passErrorMessage}
          label={"Confirm Password"}
          value={confirmPassword}
          disabled={passwordOneEmpty}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></InputText>
      </div>
      <div className="input-submit">
        <Button
          size={"large"}
          primary={true}
          label={"Sign up"}
          onClick={handleSignup}
        ></Button>
      </div>
    </Col>
  );
};
export default SignupPage;

SignupPage.propTypes = {
  /**
   *  Email used to Login
   */
  userEmail: PropTypes.string,
};

SignupPage.defaultProps = {
  userEmail: "",
};
