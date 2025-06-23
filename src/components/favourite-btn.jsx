"use client"
import useFavourite from "@/hooks/use-favourite"
import { cn } from "@/lib/utils"

function Favourite({ listingId, user, className, props }) {
    
    const { isFavourite, toggleFavourite } = useFavourite({ listingId: listingId, user: user })
    const color = isFavourite ? 'red' : "black"
    console.log(toggleFavourite)
    return (
        <div onClick={toggleFavourite} className={cn('classname of my own', className)}>
            <svg
                width={30}
                height={30}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                style={{
                    color: color
                }}
            >
                <path d="M7 3c-1.535 0-3.078.5-4.25 1.7-2.343 2.4-2.279 6.1 0 8.5L12 23l9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-.75.8-.75-.8C10.078 3.5 8.536 3 7 3"
                    fill="currentColor"
                />
            </svg>
        </div>
    )
}

export default Favourite