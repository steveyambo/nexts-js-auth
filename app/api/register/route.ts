import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Données reçues côté serveur :", body);

  return NextResponse.json({
    message: "Données reçues avec succès",
    user:{
        name: body.name,
        email: body.email,
    },
  });
}
