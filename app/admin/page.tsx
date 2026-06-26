import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  console.log("SESSION ADMIN:", session);

  if (!session) {
    redirect("/login");
  }

  if (session.user?.role !== "ADMIN") {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="border rounded-xl p-6 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Admin</h1>

        <p className="text-gray-600">
          Cette page est réservée aux administrateurs.
        </p>

        <div className="border rounded p-3 text-sm space-y-1">
          <p>
            <strong>Email :</strong> {session.user?.email}
          </p>

          <p>
            <strong>Rôle :</strong> {session.user?.role}
          </p>
        </div>
      </div>
    </main>
  );
}
