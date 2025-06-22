import getListingById from "@/app/actions/getListingById";
import { getReservationsById } from "@/app/actions/getReservationsById";
import ReservationComponent from "@/components/reservation-comp";
import useCountries from "@/hooks/useCountries";
import { categories } from "@/static/config";
import { Baby, House, IndianRupee, UserRound } from "lucide-react";
import Image from "next/image";

export default async function SingleListingPage({ params }) {
    const { id } = await params;
    const data = await getListingById(id);
    const reservations = await getReservationsById(id);
    const { getByValue } = useCountries();
    const country = getByValue(data.locationValue);
    const foundCategory = categories.filter(cat => cat.label == data.category)[0]

    return <div className="p-4 md:p-8">
        <div className="main-wrapper w-full md:w-[70%] mx-auto">
            <h1 className="font-bold text-xl sm:text-2xl md:text-5xl lg:text-7xl">{data.title}</h1>
            <div className="text-lg text-gray-500">
                {country.label} &nbsp;
                {country.region}
            </div>
            <Image className="w-full rounded-lg mt-5 max-h-[400px] object-cover mb-5" src={data.imageSrc} width={300} height={140} alt={data.title} />
            <div className="grid grid-cols-5 gap-10">
                <div className="left col-span-5 lg:col-span-3 space-y-4">
                    <div className="flex flex-row items-center gap-2">
                        <span>
                            <h5> Hosted by <span className="font-medium">{data.user.name}</span></h5>
                            <p>Listed on {new Date(data.createdAt).toLocaleDateString('en-In', { day: 'numeric', month: 'short', year: "numeric" })}</p>
                        </span>
                        {data.user.image && <Image className="rounded-full" src={data.user.image} width={40} height={40} alt={data.user.name} />}
                    </div>
                    <hr />
                    <div className="flex gap-4">
                        <span className="p-3 px-5 bg-blue-200/40 rounded-lg font-semibold flex flex-col items-center">
                            <UserRound />
                            Guests: {data.guestCount}
                        </span>
                        <span className="p-3 px-5 bg-blue-200/40 rounded-lg font-semibold flex flex-col items-center">
                            <House />
                            Rooms: {data.roomCount}
                        </span>
                        <span className="p-3 px-5 bg-blue-200/40 rounded-lg font-semibold flex flex-col items-center">
                            <Baby />
                            Children: {data.childCount}
                        </span>
                    </div>
                    <hr />
                    <div className="flex gap-4 items-center">
                        <foundCategory.icon size={50} className="text-zinc-500"/>
                        <span className="text-sm">
                            <p className="text-xl font-semibold text-gray-600">{foundCategory.label}</p>
                            <p>{foundCategory.label} is the Speciality of this Property</p>
                        </span>
                    </div>
                    <hr />
                    <div>
                        <span className="font-extrabold text-2xl">
                            <span className="text-blue-400">Homy</span>
                            cover
                        </span>
                        <p>Every booking includes free portection from Hostin cancellation, listing inaccuracies, and other issues like trouble checking in.</p>
                        <a className="font-bold underline">Learn more</a>
                    </div>
                    <hr />
                    <div className="description" dangerouslySetInnerHTML={{ __html: data.description.replaceAll(/\n/g, "<br />") }}>
                    </div>
                </div>
                <div className="right col-span-5 lg:col-span-2">
                    <div className="bg-gray-100 p-5 rounded-lg">
                        <span className="flex gap-1 items-center"><IndianRupee /> <span className="text-xl font-bold">{data.price}</span> /night</span>
                        <ReservationComponent listingId={data.id} pricePerDay={data.price} reservations={reservations} />
                    </div>
                </div>
            </div>
        </div>

    </div>
}