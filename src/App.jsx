import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./Components/header";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Login from "./Components/Login";
import MyJournal from "./Components/MyJurney";
import { TripsProvider } from "./Components/TripsContext";
import { AuthProvider, useAuth } from "./Components/AuthContext";

function AppContent() {
  const { user, setUser } = useAuth(); 

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
        />
        <Route path="/my-journal" element={<MyJournal user={user} />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <TripsProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </TripsProvider>
  );
}

export default App;
