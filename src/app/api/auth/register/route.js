import { prisma } from "@/utils/prisma";
import { hash } from "bcrypt";
 
import { NextResponse } from "next/server";


export async function POST(request){
    const body = await request.json();
    const {name,email,password} = body;

    if(!name.trim() || !email.trim() || !password.trim()){
       return NextResponse.json({message:"Missing Fields"},{status:400})
    }
    const hashedPw = await hash(password,10);

    try {
        const user = await prisma.user.create({
            data:{
                name,
                email,
                hashedPassword:hashedPw
            }
        })
        console.log("user created",user)
        return NextResponse.json(user,{status:201})
    } catch (error) {
        console.error(error.message);
        return NextResponse.json({ message: error.message }, { status: 500})
    }
}