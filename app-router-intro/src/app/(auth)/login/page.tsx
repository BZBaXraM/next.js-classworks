"use client";

import { useState } from "react";

export default function Login() {
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
