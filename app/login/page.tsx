"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    setMessage("");
    setIsLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setIsLoading(false);

    if (result?.error) {
      setMessage("Email ou mot de passe incorrect.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold">Connexion</h1>

        {message && (
          <p className="border rounded p-2 text-sm">
            {message}
          </p>
        )}

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
            placeholder="Ton mot de passe"
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
          {isLoading ? "Connexion..." : "Se connecter"}
        </button>

        <p className="text-sm text-center">
          Pas encore de compte ?{" "}
          <Link href="/register" className="underline text-sky-500">
            Créer un compte
          </Link>
        </p>
      </form>
    </main>
  );
}