import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home.jsx';
import Cuisine from './Components/Cuisine.jsx';
import{createBrowserRouter,RouterProvider} from "react-router-dom";
function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element:(
    <>
    <Navbar/>
    <Home/>
    </>)
  },
  {
    path: "/cuisine",
    element:(<>
    <Navbar/>
    <Cuisine/>
    </>)
  }
])
  return (
    <>
      
      <RouterProvider router={router} />
    </>
  );
}

export default App;