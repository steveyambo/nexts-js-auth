"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="bg-red-600 text-white rounded px-3 py-1 text-sm"
    >
      Se déconnecter
    </button>
  );
}