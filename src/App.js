//Library Imports
import {BrowserRouter, Route, Routes} from "react-router-dom";

//Component/Page Imports
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'

//API Imports

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/onboarding' element={<Onboarding/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
