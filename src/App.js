//Library Imports
import {BrowserRouter, Route, Routes} from "react-router-dom";

//Component/Page Imports
import Home from './pages/Home'
import OnboardingUser from './pages/OnboardingUser'
import OnboardingRest from './pages/OnboardingRest'
import Dashboard from './pages/Dashboard'

//API Imports

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/onboarding/user' element={<OnboardingUser/>}/>
      <Route path='/onboarding/rest' element={<OnboardingRest/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
