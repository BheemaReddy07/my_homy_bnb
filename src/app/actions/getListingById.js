"use server"

import { prisma } from "@/utils/prisma";

export default async function getListingById(listingId){
    const listing = await prisma.listing.findUnique({
        where:{id:listingId},
        include:{
            user:{
                select:{
                    name:true,
                    image:true
                }
            }
        }
    })

    const modifiedListing = {
        ...listing,
        createdAt:listing.createdAt.toString()
    }

    return modifiedListing;
}