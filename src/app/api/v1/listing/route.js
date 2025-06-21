import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request){
    const body = await request.json();
    const session = await getAuthSession()

    if(!session || !session.user){
        return NextResponse.json({message:"not Authorized"},{status:403})

    }

    const {  category,
        title, 
        description,
        roomCount,
        guestCount,
        childCount,
        location,
        price, 
        imageSrc,} = body;

        const newListing  = await prisma.listing.create({
            data:{
                title, 
            description,
            roomCount,
            childCount,
            guestCount,
            price: parseInt(price, 10),
            category,
            locationValue: location.value,
            imageSrc,
            userId: session?.user.id 
            }
        })
        return NextResponse.json({message:"Created"},{status:201 })
}