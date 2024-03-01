import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Home = () => {
   const donation = useLoaderData();
   console.log(donation);
   return (
      <div>
         <div className=" text-center md:flex items-center justify-center h-96  ">
            <div>
               <h2 className="text-5xl my-6 font-semibold">I Grow By Helping People In Need</h2>
               <input className="border w-1/2 py-2 px-2" type="text" placeholder="Search" value="" />
               <button className="py-2 px-4 text-white bg-red-600 rounded-e">Search</button>
            </div>
         </div>
         <div className="grid md:grid-cols-3 gap-3">
            {donation.map((card) => (
               <Card card={card} key={card.id}></Card>
            ))}
         </div>
      </div>
   );
};

export default Home;
