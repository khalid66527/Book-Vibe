import { createBrowserRouter } from "react-router";
import MainLeaout from "./MainLeaout/MainLeaout";
import HamePage from "./Pages/HamePage/HamePage";
import Books from "./Pages/Books/Books";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import BooksDetails from "./Pages/BooksDetails/BooksDetails";

export const  router = createBrowserRouter([
  {
    path: "/",
    Component: MainLeaout,
    children:[
      {
        index: true,
        element: <HamePage></HamePage>
      },
      {
        path:"/books",
        element:<Books></Books>
      },
      {
        path:"/booksDetails/:bookId",
        Component: BooksDetails,
        loader:(()=> fetch('/booksData.json'))
      }
    ],
    errorElement: <ErrorPage></ErrorPage>

  },

])