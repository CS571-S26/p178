import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from "react";  
import { useNavigate } from 'react-router';

export default function Login() {

    // TODO Create the login component.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return <>
        <h1>Login</h1>
        <hr />
            <Form>
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <Button type="submit" onClick={() => {
                    alert("Login functionality is not implemented yet.");
                }}>
                    Login
                </Button>
            </Form>
    </>
}
