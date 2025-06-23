"use server"

import { getAuthSession } from "@/utils/auth"

export async function deleteProperty(id) {
    const session = await getAuthSession();
    if (!session) return { ok: false, message: "not authorized", status: 403 }

    const res = await prisma.listing.deleteMany({
        where: {
            id: id,
            userId: session.user.id
        }
    })
    if (!res) return { ok: false, message: "Could not find property to delte", status: 404 }
    return { ok: true, message: "deleted", status: 200 }
}