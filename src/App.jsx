import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Capture from "./components/Capture";
import LinkDevice from "./components/LinkDevice";
import Login from "./components/Login";
import WaitingApproval from "./components/WaitingApproval";
import Users from "./components/users";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // Dummy props to simulate dynamic values
  const dummyQr = "iVBORw0KGgoAAAANSUhEUgAAA..."; // Replace with actual base64 if testing
  const dummyCode = "123456";
  const dummyExpiresAt = "12:00 PM";
  const dummyLoginId = "login_123";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/capture" element={<Capture />} />
        <Route
          path="/link-device"
          element={<LinkDevice qrData={dummyQr} linkCode={dummyCode} expiresAt={dummyExpiresAt} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/waiting-approval"
          element={<WaitingApproval loginId={dummyLoginId} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
