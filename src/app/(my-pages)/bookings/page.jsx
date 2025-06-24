import { getUser } from "@/app/actions/getUser";
import { getReservations } from "@/app/actions/reservation";
import BookedCard from "@/components/booked-card";
import EmptyPage from "@/components/emptyPage";
import { notFound } from "next/navigation";

async function Bookings() {
    const user = await getUser();

    if (!user) notFound();

    const { data: reservations } = await getReservations();
    if (reservations.length == 0) {
        return <EmptyPage title="No Booking Found" linkText={"Book Your Property Today"} />
    }

    return (
        <div className="p-4 md:p-8">
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {reservations.map((each, index) => {
                    return <BookedCard key={each.id} user={user} resv={each} />
                })}
            </div>

        </div>
    )

}


export default Bookings