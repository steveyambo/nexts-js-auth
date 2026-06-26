import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  const role = session?.user?.role?.trim();

  return (
    <nav className="border-b px-6 py-4 flex items-center justify-between">
      <Link href="/" className="font-bold">
        Next Auth Practice
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/" className="text-sm">
          Accueil
        </Link>

        {!session && (
          <>
            <Link href="/login" className="text-sm">
              Login
            </Link>

            <Link href="/register" className="text-sm">
              Register
            </Link>
          </>
        )}

        {session && (
          <>
            <Link href="/dashboard" className="text-sm">
              Dashboard
            </Link>

            <Link href="/profile" className="text-sm">
              Profile
            </Link>

            {role === "ADMIN" && (
              <Link href="/admin" className="text-sm">
                Admin
              </Link>
            )}

            <div className="w-40">
              <LogoutButton />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
