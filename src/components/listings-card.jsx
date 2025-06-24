"use client"
import useCountries from "@/hooks/useCountries"
import { IndianRupee } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import formatMoney from "@/utils/formatMoney";
import Favourite from "./favourite-btn";

export default function ListingsCard({ user, reservationsData, listing, showSecondaryBtn = false, secondaryBtnLabel, onAction }) {
    
    const { getByValue } = useCountries();
    const router = useRouter();
    const countryDetails = getByValue(listing.locationValue)

    return <div className="hover:scale-105 transition-all duration-300 cursor-pointer p-3 rounded shadow border border-gray-200 relative">
        <div className="w-full aspect-square rounded-lg">
            <Image className="object-cover w-full h-full rounded-lg" src={listing.imageSrc} width={400} height={400} alt="property lisiting" />
        </div>
        <Favourite className="absolute top-6 right-6" listingId={listing.id} user={user} />
        <p className="font-semibold text-lg md:text-2xl capitalize pt-2">{listing.title}</p>
        {reservationsData
            ?
            <p>Paid {formatMoney(reservationsData.totalPrice)} rupees</p>
            :
            <p className="text-lg flex gap-1 items-center"><IndianRupee size={16} />  {listing.price} <span className="text-sm">per Night</span></p>
        }
        <div className="text-gray-400">
            {countryDetails.label},&nbsp;
            {countryDetails.region}
        </div>
        <div className="flex flex-col lg:flex-row  gap-2">
            <Button className="cursor-pointer" onClick={() => router.push(`/listings/${listing.id}`)}>View Property</Button>
            {showSecondaryBtn && <Button variant="destructive" className="cursor-pointer" onClick={onAction}>{secondaryBtnLabel}</Button>}

        </div>
    </div>
}