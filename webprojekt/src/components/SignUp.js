import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { auth, signUp } from "../lib/init-firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignup() {
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/login");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <Card className="h-100">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="d-flex flex-column align-items-center">
            <Form.Group id="email" className="w-25 p-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="w-25 p-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm" className="w-25 p-4">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-25 p-4"
              type="submit"
              onClick={handleSignup}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default SignUp;
