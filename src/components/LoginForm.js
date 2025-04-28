// src/components/LoginForm.js
"use client";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { user, login, signup } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user, router]);

  const handleAction = async (action) => {
    try {
      if (action === "login") await login(email, pass);
      else await signup(email, pass);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-serif text-gray-900 mb-6 text-center">
        Login / Signup
      </h2>
      <div className="space-y-4">
        {/** Inputs */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/** Knapper */}
        <div className="flex gap-4">
          <button
            onClick={() => handleAction("login")}
            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
          <button
            onClick={() => handleAction("signup")}
            className="flex-1 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
