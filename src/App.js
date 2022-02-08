import CaretakerDashboard from './Pages/CaretakerDashboard/CaretakerDashboard';
import PetOwnerDashboard from './Pages/PetOwnerDashboard/PetOwnerDashboard';
import LandingPage from './Pages/LandingPage/LandingPage';
import ErrorPage from './Pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import UserContext from './components/user/User';
import { useContext, useState, useMemo } from 'react';
import { HashRouter } from 'react-router-dom';
// import { $, jQuery } from 'jquery';

function App() {
  // window.$ = $;
  // window.jQuery = jQuery;
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }, [user, setUser]));

  return (
    // <BrowserRouter>
    <div className="app">
      <UserContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/caretaker" element={<CaretakerDashboard />} />
          <Route path="/petowner" element={<PetOwnerDashboard />} />
        </Routes>
      </UserContext.Provider>
    </div>
    // </BrowserRouter>
  );
}

export default App;
