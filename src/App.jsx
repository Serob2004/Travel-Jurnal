import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./Components/header";
import useAuthStore from "./Components/useAuthStore";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./Components/Home"));
const Explore = lazy(() => import("./Components/Explore"));
const Login = lazy(() => import("./Components/Login"));
const MyJournal = lazy(() => import("./Components/MyJurney"));

function Layout() {
  const { user, setUser } = useAuthStore();

  return (
    <>
      <Header user={user} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer/>
    </>
  );
}

function App() {
  const { user, setUser } = useAuthStore();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "explore", element: <Explore /> },
        {
          path: "login",
          element: user ? <Navigate to="/" /> : <Login setUser={setUser} />,
        },
        { path: "my-journal", element: <MyJournal user={user} /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
