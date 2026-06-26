import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="border rounded-xl p-6 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <p className="text-gray-600">
          Bienvenue, {session.user?.name || session.user?.email}
        </p>

        <div className="border rounded p-3 text-sm space-y-1">
          <p>
            <strong>Email :</strong> {session.user?.email}
          </p>

          <p>
            <strong>Rôle :</strong> {session.user?.role}
          </p>

          <p>
            <strong>ID :</strong> {session.user?.id}
          </p>
        </div>
      </div>
    </main>
  );
}
