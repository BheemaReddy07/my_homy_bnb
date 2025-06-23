import { getUser } from "@/app/actions/getUser";
import EmptyPage from "@/components/emptyPage";
import PropertyBox from "@/components/propertyBox";
import { getAuthSession } from "@/utils/auth"
import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation"

async function Properties() {
    const session = await getAuthSession()
    const user = await getUser();
    if (!session) {
        notFound();
    }
    const propertyList = await prisma.listing.findMany({
        where: { userId: session.user.id }
    })
    if (!propertyList) {
        return <EmptyPage title="No propertie added so far" linkText="Add yours today" link="/become-a-host" />
    }

    return (
        <div className="p-4 md:p-8 space-y-5">
            <h1 className="text-3xl font-semibold ">Your Properties</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {
                    propertyList.map((each) => {
                        return <PropertyBox key={each.id} each={each} user={user} />
                    })
                }

            </div>
        </div>
    )
}

export default Properties