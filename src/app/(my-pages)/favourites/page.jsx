import { getFavouriteListings } from "@/app/actions/favourites";
import { getUser } from "@/app/actions/getUser";
import ListingsCard from "@/components/listings-card";
import { notFound } from "next/navigation";
async function Favourites(){
    const user  = await getUser();

    if(!user) notFound();

    const {data :favouriteListings} = await getFavouriteListings()

      if(favouriteListings.length == 0) return <EmptyPage title="No favorites yet" linkText={"Add a listing to favorites"} />


      return (
        <div className="p-4 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-5">
               {
                favouriteListings.map(each =>{
                    return <ListingsCard key={each.id} listing={each} user={user}   />
                })
               }
        </div>
      )

}

export default Favourites