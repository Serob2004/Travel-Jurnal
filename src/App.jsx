import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./Components/header";
const Home = lazy(() => import("./Components/Home"));
const Explore = lazy(() => import("./Components/Explore"));
const Login = lazy(() => import("./Components/Login"));
const MyJournal = lazy(() => import("./Components/MyJurney"));

import useAuthStore from "./Components/useAuthStore";

function AppContent() {
  const { user, setUser } = useAuthStore();

  return (
    <>
      <Header user={user} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
          />
          <Route path="/my-journal" element={<MyJournal user={user} />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
