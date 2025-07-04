import Link from 'next/link'

function EmptyPage({title ,linkText,link="/"}){
    return (
        <section className='h-screen grid place-items-center'>
            <div className='text-center'>
                <h1 className="text-3xl font-semibold">{title}</h1>
                <Link className="underline" href={link}>{linkText}</Link>
            </div>
        </section>
    )
}

export default EmptyPage