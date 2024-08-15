import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../styles/test.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (response.ok) {
      alert("Login Successful");
      setRedirect(true);
    } else {
      alert("Wrong Credentials");
    }
  }

  // Check for redirect after successful login
  if (redirect) {
    return <Navigate to={"/test"} />;
  }

  return (
    <div
      className="container justify-content-center"
      style={{ maxWidth: "600px" }}
    >
      <form className="login pb-5" onSubmit={login}>
        <h1 className="text-center m-3">Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password" // This should be "password" not "text"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
