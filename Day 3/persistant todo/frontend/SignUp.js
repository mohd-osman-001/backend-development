import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const SignUP = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function add(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        password: password,
        email: email,
      }),
    });
    const data = await response.json();
  }

  return (
    <form onSubmit={add}>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter your Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUP;
