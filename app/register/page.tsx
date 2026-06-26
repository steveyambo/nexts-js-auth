"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    setMessage("");
    setIsLoading(true);

    const response = await fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    setIsLoading(false);

    if (!response.ok) {
      setMessage(data.message || "Erreur lors de l'inscription.");
      return;
    }

    setMessage("Compte créé avec succès.");
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold">Créer un compte</h1>

        {message && <p className="border rounded p-2 text-sm">{message}</p>}

        <div className="space-y-1">
          <label className="block font-medium">Nom</label>
          <input
            type="text"
            placeholder="Ex: Steve"
            className="w-full border rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="block font-medium">Email</label>
          <input
            type="email"
            placeholder="Ex: steve@email.com"
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="block font-medium">Mot de passe</label>
          <input
            type="password"
            placeholder="Minimum 6 caractères"
            className="w-full border rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black text-white rounded p-2 disabled:opacity-50" 
        >
          {isLoading ? "Création..." : "S'inscrire"}

        </button>
      </form>
    </main>
  );
}
