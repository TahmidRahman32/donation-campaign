import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import About from "../Pages/About/About";
import Statistics from "../Pages/Statistics/Statistics";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root> ,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
         {
            path: '/',
            loader: () => fetch('donation.json'),
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
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         }

      ]
   },
]);

export default router;
