"use client"
import { categories } from '@/static/config'
import React from 'react'
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from 'next/navigation';

function CategoryHandler() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const activeCat = searchParams.get('cat')
     const params = new URLSearchParams(searchParams.toString());

    const setCategory = (cat) => {
        params.set('cat', cat)
        router.push(`?${params.toString()}`)
    }

    return (
        <div className="w-full flex justify-evenly gap-3 py-2 px-8 border-b-2 border-gray-100 overflow-x-auto">

            {categories.map(cat => {
                return <div onClick={() => setCategory(cat.label)} key={cat.label}
                    className={cn(
                        "flex flex-col gap-1 items-center cursor-pointer hover:bg-gray-100/40 p-4 rounded-lg hover:text-blue-500 transition-colors duration-200 delay-100",
                        activeCat == cat.label && "bg-gray-100/40 text-blue-400"
                    )}>
                    <cat.icon />
                    {cat.label}
                </div>
            })}
        </div>
    )
}

export default CategoryHandler