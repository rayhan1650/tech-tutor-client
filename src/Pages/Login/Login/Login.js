import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="my-login mx-auto">
      <h1 className="text-center mt-5 text-primary">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className="mt-2 my-link">
        New to Tech Tutor? <Link to="/signup">Please SignUp.</Link>{" "}
      </p>

      {/* for social login */}
      <SocialLogin />
    </div>
  );
};

export default Login;
