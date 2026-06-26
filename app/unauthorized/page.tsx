import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="border rounded-xl p-6 w-full max-w-md space-y-4 text-center">
        <h1 className="text-2xl font-bold">Accès refusé</h1>

        <p className="text-gray-600">
          Tu n’as pas les permissions nécessaires pour accéder à cette page.
        </p>

        <Link
          href="/dashboard"
          className="inline-block bg-black text-white px-4 py-2 rounded"
        >
          Retour au dashboard
        </Link>
      </div>
    </main>
  );
}