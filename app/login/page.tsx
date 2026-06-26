import { authOptions } from "@/auth";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </main>
  );
}