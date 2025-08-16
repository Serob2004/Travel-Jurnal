import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/header";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Login from "./Components/Login";
import MyJournal from "./Components/MyJurney";
import { TripsProvider } from "./Components/TripsContext";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? savedUser : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <>
      <TripsProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/my-journal" element={<MyJournal user={user} />} />
          </Routes>
        </Router>
      </TripsProvider>
    </>
  );
}

export default App;
