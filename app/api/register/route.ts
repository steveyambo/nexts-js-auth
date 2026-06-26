import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try{
    const body = await req.json();
    const { name, email, password } = body;

    if(!email || !password){
      return NextResponse.json(
        { message: "Email et mot de passe requis." },
        { status: 400 }
      )
    }

    if(password.length < 6){
      return NextResponse.json(
        { message: "Le mot de passe doit avoir au moins 6 caractères." },
        { status: 400 }
      )
    }

    const existingUser =  await prisma.user.findUnique({
      where :{
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Cet email est déjà utilisé." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await prisma.user.create({
        data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    
    return NextResponse.json(
      {
        message: "Compte créé avec succès.",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 201 }
    );
  }catch(error){
    console.error("REGISTER_ERROR",error);

    return NextResponse.json(
      { message:"Erreur serveur lors de l'inscription."},
      {  status: 500} 
    )
  }
}
