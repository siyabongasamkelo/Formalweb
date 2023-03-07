import Homepage from "./pages/Homepage"
import Aboutus from "./pages/Aboutuspage"
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Contactpage from "./pages/Contactpage";

function App() {
  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route >
        <Route index element={<Homepage/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contactpage/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
