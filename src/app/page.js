import CategoryHandler from "@/components/category-handler";
import Image from "next/image";

export default async function Home({searchParams}) {


  return (
   <section >
    <CategoryHandler />

   </section>
  );
}
