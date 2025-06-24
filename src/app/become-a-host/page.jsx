import BecomeaHostComponent from '@/components/BecomeaHostComponent';
import { getAuthSession } from '@/utils/auth'
import Link from 'next/link';
import React from 'react'


async function BecomeAHost() {
    const session = await getAuthSession();
    if(!session){
        return <section className='w-full  flex h-screen flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center '>
                <h1 className='text-xl md:text-2xl font-bold '>Not Authorized</h1>
                <span>To add Your Properties <Link className='underline text-blue-500' href="/sign-in">Sign In</Link></span>
            </div>
        </section>
    }
  return (
    <div>
        <BecomeaHostComponent />
    </div>
  )
}

export default BecomeAHost