import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DefaultLayout from './protected/layout/DefaultLayout'
import PrivateRoute from './protected/layout/PrivateRoute'
import Dashboard from './protected/dashboard/Dashboard'
import AppContextProvider from "./context/AppContext";
import Login from "./public/login/Login";
import Personnel from "./protected/personnel/Personnel";
import Users from "./protected/users/Users";
import OrganisationalUnits from "./protected/organisational-units/OrganisationalUnits";
import Reports from "./protected/reports/Reports";
import AuditLogs from "./protected/audit-logs/AuditLogs";

function App() {

  const url = window.location.href;
  const tokenval = url.split('#')[1];
  tokenval && localStorage.setItem('token', tokenval);
  
  return (
    <div className={`w-full `}>
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute><DefaultLayout /></PrivateRoute>}>
              <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/personnel" element={<PrivateRoute><Personnel /></PrivateRoute>} />
              <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
              <Route path="/organisational-units" element={<PrivateRoute><OrganisationalUnits /></PrivateRoute>} />
              <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
              <Route path="/audit-logs" element={<PrivateRoute><AuditLogs /></PrivateRoute>} />
            </Route>
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  )
}

export default App
