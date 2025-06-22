"use client"
import useCountries from "@/hooks/useCountries"
import { IndianRupee } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function ListingsCard({ user, listing , }) {
    const { getByValue } = useCountries();
    const router = useRouter();
    const countryDetails = getByValue(listing.locationValue)
    return <div className="p-3 rounded shadow border border-gray-200 relative">
        <div className="w-full aspect-square rounded-lg">
            <Image className="object-cover w-full h-full rounded-lg" src={listing.imageSrc} width={400} height={400} alt="property lisiting" />
        </div>
        <p className="font-semibold text-lg md:text-2xl capitalize pt-2">{listing.title}</p>
         <p className="text-lg flex gap-1 items-center"><IndianRupee size={16} />{listing.price} per Night</p>
        <div className="text-gray-400">
            {countryDetails.label},&nbsp;
            {countryDetails.region}
        </div>
        <Button className="cursor-pointer" onClick={()=>router.push(`/listings/${listing.id}`)}>View Property</Button>

    </div>
}