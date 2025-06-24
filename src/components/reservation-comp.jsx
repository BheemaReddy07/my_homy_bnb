"use client"

import { useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import CalenderInput from "./calendar"
import { Button } from "./ui/button"
import formatMoney from "@/utils/formatMoney"
import { differenceInCalendarDays, eachDayOfInterval } from 'date-fns'
import { setReservation } from "@/app/actions/reservation"
import { toast } from '@/hooks/use-toast'

function ReservationComponent({ user, listingId, pricePerDay, reservations }) {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    })
    const [totalPrice, setTotalPrice] = useState(pricePerDay)
    const router = useRouter()

    const disabledDates = useMemo(() => {
        let dates = [];
        reservations.forEach(reservation => {
            const range = eachDayOfInterval({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate)
            })

            dates = [...dates, ...range];
        })
        return dates;
    }, [reservations])

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const countDays = differenceInCalendarDays(
                dateRange.endDate,
                dateRange.startDate
            )
            if (pricePerDay && countDays) {
                setTotalPrice(countDays * pricePerDay)
            } else {
                setTotalPrice(pricePerDay)
            }
        }
    }, [pricePerDay, dateRange])

    async function handleReservation() {
        if (!user) {
            toast({
                title: "sign in required",
                description: "Please sign in to make a reservation",
                variant: "destructive"
            });
            router.push('/sign-in');
            return;
        }
        try {
            const res = await setReservation({ listingId, startDate: dateRange.startDate, endDate: dateRange.endDate, price: totalPrice })
            if (res.ok) {
                toast({
                    title: "reservation Booked",
                    description: "Your property is booked"
                })
                router.push('/bookings')
            }
        } catch (error) {
            toast({
                title: "Uh oh",
                description: "error occured",
                variant: "destructive"
            })
        }
    }

    return (
        <div className="flex flex-col gap-2 items-center pt-4">
            <CalenderInput className="w-full" value={dateRange} onChange={value => setDateRange(value.selection)} disabledDates={disabledDates} />
            <Button className="text-lg w-full cursor-pointer" onClick={handleReservation}>Book for ₹ {formatMoney(totalPrice)}</Button>
        </div>
    )
}

export default ReservationComponent