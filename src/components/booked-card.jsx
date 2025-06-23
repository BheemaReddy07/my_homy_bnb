"use client"

import { deleteReservation } from "@/app/actions/reservation";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation"
import ListingsCard from "./listings-card";

function BookedCard({resv}){
    console.log(resv ,"reservations")
    const router = useRouter();
    const cancelReservation = async (e) =>{
        e.preventDefault();
        const res = await deleteReservation(resv.id)
        if(res.ok){
          toast({
            title:"Deleted"
          })
          router.refresh();
        }
    }
    return(
        <div>
            <ListingsCard 
            reservationsData = {resv}
            listing={resv.listing}
            showSecondaryBtn={true}
            secondaryBtnLabel={"Cancel Booking"}
            onAction={cancelReservation}
            />

        </div>
    )
}

export default BookedCard