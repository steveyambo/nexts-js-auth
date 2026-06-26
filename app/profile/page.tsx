import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const role = session.user?.role?.trim();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="border rounded-xl p-6 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Mon profil</h1>

        <div className="border rounded p-3 text-sm space-y-2">
          <p>
            <strong>Nom :</strong> {session.user?.name || "Non défini"}
          </p>

          <p>
            <strong>Email :</strong> {session.user?.email}
          </p>

          <p>
            <strong>Rôle :</strong> {role}
          </p>

          <p>
            <strong>ID :</strong> {session.user?.id}
          </p>
        </div>
      </div>
    </main>
  );
}