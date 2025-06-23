"use client"

import { deleteProperty } from "@/app/actions/deleteProperty";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import ListingsCard from "./listings-card";

function PropertyBox({ each ,user }) {
    const router = useRouter();
    const handleDelete = async (e) => {
        e.preventDefault();
        const res = await deleteProperty(each.id)
        if (res.ok) {
            toast({
                title: "property deleted"
            })
            router.refresh();
        }
    }

    return (
        <ListingsCard listing={each} user={user} showSecondaryBtn secondaryBtnLabel={"Delete this Property"} onAction={handleDelete} />

    )
}

export default PropertyBox