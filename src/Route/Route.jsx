import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import About from "../Pages/About/About";
import Statistics from "../Pages/Statistics/Statistics";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root> ,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/donation',
            element: <Donation></Donation>,
         },
         {
            path: '/about',
            element: <About></About>,
         },
         {
            path: '/statistics',
            element: <Statistics></Statistics>
         }
      ]
   },
]);

export default router;
