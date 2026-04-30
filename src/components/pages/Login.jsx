import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

export default function Login({ show, handleClose, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found. Please register first.");
      return;
    }

    if (
      username === savedUser.username &&
      password === savedUser.password
    ) {
      alert("Login successful!");

      localStorage.setItem("loggedIn", "true");
      setIsLoggedIn(true);
      handleClose();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}