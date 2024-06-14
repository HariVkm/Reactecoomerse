import Layout from "./Pages/Layout"
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Useeffect1 from "./Pages/Useeffect1"
import Demo from "./Pages/Demo"
import './App.css'
import Display from "./Pages/Display"
import Sample from "./Pages/Sample"
import Navbar from "./Component/Navbar"
import Fulldesc from "./Pages/Fulldesc"
import Displayinbutton from "./Pages/Displayinbutton"
import Cart from "./Pages/Cart"
import Cartnew from "./Pages/Cartnew"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} >
      {/* <Route path="use" element={<Useeffect1 />} /> */}
      <Route path="demo" element={<Demo/>}/>
<Route path="" element={<Sample/>} ></Route>

<Route path="/disp/:id" element={<Display />}/>
<Route path="/fdesc/:id" element={<Fulldesc />}/>
<Route path="dispbtn" element={<Displayinbutton />}/>
      <Route path="use" element={<Useeffect1 />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
      <Route path="/cart" element={<Cartnew/>} />
      
      
</Route>


     
    </>

  )

  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
