import { Link, useRouteError } from "react-router-dom";
import sedImg from "../../public/sed.png";
import { IoMdArrowRoundBack } from "react-icons/io";

const ErrorPage = () => {
   const error = useRouteError();

   return (
      <div className="flex flex-col md:h-screen w-full items-center justify-center ">
         <img className="w-40 md:w-72" src={sedImg} alt="" />
         <div className="flex text-3xl md:text-6xl gap-4">
            <h3>Oops!!</h3>
            <h1>{error.status}</h1>
            <span className="text-red-600">{error.statusText}</span>
         </div>
         <p className="text-red-600 my-8">{error.data}</p>
         <button className=" py-2 px-3 bg-slate-600 text-white rounded-lg">
            <Link className="flex items-center gap-1" to={"/"}>
               {" "}
               <IoMdArrowRoundBack /> Go Back
            </Link>
         </button>
      </div>
   );
};

export default ErrorPage;
