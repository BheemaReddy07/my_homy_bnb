"use server"

export async function getReservationsById(listingId) {
    try {
        const reservations = await prisma.reservation.findMany({
            where:{listingId},
            include:{
                listing:true,
            }
        })
        return reservations;
    } catch (error) {
        console.log(error.message);
    }
    
}