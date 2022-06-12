//Library Imports
import {BrowserRouter, Route, Routes} from "react-router-dom";

//Component/Page Imports
import Home from './pages/Home'
import UserOnboarding from './pages/UserOnboarding'
import RestOnboarding from './pages/RestOnboarding'
import RestDashboard from "./pages/RestDashboard"
import UserDashboard from "./pages/UserDashboard"

//API Imports

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user/onboarding' element={<UserOnboarding/>}/>
      <Route path='/rest/onboarding' element={<RestOnboarding/>}/>
      <Route path='/user/dashboard' element={<UserDashboard/>}/>
      <Route path='/rest/dashboard' element={<RestDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
