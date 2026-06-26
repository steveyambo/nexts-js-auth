import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-items-center gap-4">
      <h1 className="text-3xl font-bold">Bienvenue</h1>

      <p>Projet pratique pour apprendre l'authentification avec Next.js.</p>

      <div className="flex gap-4">
        <Link href="/register" className="">
          register
        </Link>

        <Link href="/login" className="bg-black text-white px-4 py-2 rounded">
          Se connecter
        </Link>
      </div>
    </main>
  );
}
