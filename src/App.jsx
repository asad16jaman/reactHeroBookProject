
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home,{BookLoader} from './pages/Home';
import BookDetail, { BookDetailLoader } from './pages/BookDetail';
import ReadBooks from './pages/ReadBooks';
import BookList from './pages/BookList';




const router =  createBrowserRouter([
  {
    path:"/",
    element:<Home />,
    loader:BookLoader
  },
  {
    path:"/:bookId",
    element:<BookDetail />,
    loader:BookDetailLoader
  },
  {
    path:"/book-list",
    element:<BookList />,
  
  },
  {
    path:"/read-books",
    element:<ReadBooks />,
   
  },

]);

function App() {


  
 return <RouterProvider router={router}></RouterProvider>
}

export default App
