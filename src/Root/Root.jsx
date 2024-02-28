import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav/Nav";

const Root = () => {
   return (
      <div className="max-w-7xl mx-auto">
         <Nav></Nav>
         <Outlet></Outlet>
      </div>
   );
};

export default Root;
