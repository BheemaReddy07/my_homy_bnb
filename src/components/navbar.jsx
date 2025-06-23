"use client"

import { CircleUserRound, HousePlus, Search, User } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import Searchmodel from "./search-model";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [modalStateStep, setModalStateStep] = useState(-1)

    const openSearchModalAtStep = (step) => {
        if (!isOpen) {
            setIsOpen(true);
            setModalStateStep(step);
        }
    }


    return (
        <div className=" flex justify-between px-5 md:px-16 py-3 bg-muted border-b items-center">
            <Link href="/" className="flex gap-1 items-center ">
                <HousePlus className="text-blue-400 md:size-8 size-6" />
                <span className="text-blue-500 text-md md:text-xl font-extrabold">My Homy</span>
            </Link>
            <div className="hidden md:flex items-center gap-2 bg-white px-[6px] py-[4px] border-2 border-gray-300 rounded-full">
                <div className="hover:bg-gray-200 transition-all duration-200 delay-100 hover:scale-100 rounded-full cursor-pointer px-3 py-1" onClick={() => openSearchModalAtStep(0)}>Locations</div>
                <div className="w-[0.6px] h-[20px] bg-gray-300"></div>
                <div className="hover:bg-gray-200 transition-all duration-200 delay-100 hover:scale-100 rounded-full cursor-pointer px-3 py-1" onClick={() => openSearchModalAtStep(1)}>Date</div>
                <div className="w-[0.6px] h-[20px] bg-gray-300"></div>
                <div className="hover:bg-gray-200 transition-all duration-200 delay-100 hover:scale-100 rounded-full cursor-pointer px-3 py-1" onClick={() => openSearchModalAtStep(2)}>Details</div>
                <div className="bg-blue-400 text-white  p-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 delay-100" onClick={() => openSearchModalAtStep(0)}><Search /></div>
            </div>
            <div>
                <UserComponent />
            </div>
            <Searchmodel key={modalStateStep} isOpen={isOpen} setIsOpen={setIsOpen} stepAt={modalStateStep} />
        </div>
    )
}


const UserComponent = () => {
    return (

        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <CircleUserRound className="text-blue-500 size-8" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem><Link href="/bookings">My Bookings</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/favourites">My Favourites</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/properties">My Properties</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Airbnb your home</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}