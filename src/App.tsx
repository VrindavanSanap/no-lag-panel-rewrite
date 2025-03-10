import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
// Add Google Fonts link for Poppins
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

function App() {
  const [is_authenticated, set_is_authenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              is_authenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <LoginPage on_login={() => set_is_authenticated(true)} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              is_authenticated ? <Dashboard /> : <Navigate to="/login" />
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
