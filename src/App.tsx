import React, { Suspense } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import RoomCleaningListContextProvider from "./contexts/RoomCleaningListContext";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toast";

const Explore = React.lazy(() => import("./pages/Explore"));
const CleaningList = React.lazy(() => import("./pages/CleaningList"));
const Occupancy = React.lazy(() => import("./pages/Occupancy"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-gray-900 min-h-screen w-screen flex flex-col items-center">
        <Navbar />
        <section className="mt-16 container flex flex-col h-full flex-1 p-4 md:p-0">
          <Outlet />
        </section>
      </div>
    ),
    children: [
      { path: "/", element: <Explore /> },
      {
        path: "/cleaning-list",
        element: <CleaningList />,
      },
      {
        path: "/occupancy",
        element: <Occupancy />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <RoomCleaningListContextProvider>
        <RouterProvider router={router} />
        <ToastContainer delay={3000} />
      </RoomCleaningListContextProvider>
    </Suspense>
  );
}

export default App;
