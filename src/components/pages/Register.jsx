import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

export default function Register({ show, handleClose, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const user = {
      username,
      password
    };

    localStorage.setItem("user", JSON.stringify(user));

    // auto-login (optional but recommended for UX)
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true);

    alert("User registered!");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
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

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {password !== confirmPassword && (
            <div className="text-danger mb-2">
              Passwords do not match
            </div>
          )}

          <Button
            type="submit"
            className="w-100"
            disabled={!username || !password || !confirmPassword}
          >
            Register
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}