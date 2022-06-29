import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth, login } from "../lib/init-firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const currentUser = useAuth();

  if (currentUser != null) {
    navigate("/cars");
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/cars");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
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
            <Button
              disabled={loading}
              className="w-25 p-4"
              type="submit"
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
