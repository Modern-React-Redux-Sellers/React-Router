import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/search/SearchPage";
import {searchLoader} from "./pages/search/searchLoader";
import DetailsPage from "./pages/details/DetailsPage";
import {detailsLoader} from "./pages/details/detailsLoader";


const router = createBrowserRouter([
 {
  path:'/',
  element:<Root />,
  children: [
   {
    index:true, //any route that is not /search or /packages/xyz shows HomePage
    element:<HomePage/>
   },
   {
    path:'/search', //if user goes to /search, show SearchPage
    element:<SearchPage/>,
    //used to pass data from FETCH to SearchPage component
    loader: searchLoader
   },
   {
    path:"/packages/:name", //user goes to packages/someInput, show DetailsPage
    element: <DetailsPage />,
    loader: detailsLoader
   }
  ]
 }
]);

function App() {
 return <RouterProvider router={router} />
}

export default App
