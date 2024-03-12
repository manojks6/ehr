import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Doctor from "./Doctor";
import Patient from "./Patient";
import Admin from "./Admin";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/Doctor" element={<Doctor/>}></Route>
               <Route path="/Patient" element={<Patient/>}></Route>
               <Route path="/Admin" element={<Admin/>}></Route>
               <Route path="/" element={<Home/>}></Route>
            </Routes>
         </BrowserRouter>

      </div>
   );
}
export default App;
