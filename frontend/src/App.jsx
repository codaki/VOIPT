import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

import Navbar from "./components/Navbar/Navbar";
import Contactos from "./pages/Contactos";
import Dashboard from "./pages/Dashboard";
const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-row bg-neutral-100 h-screen w-screen ">
        <Sidebar />
        <div className="flex-1 ">
          <div className="p-4  ">
            <div className=" p-4 w-full rounded-md bg-slate-300 mb-2">Ruta</div>
            <div className="overflow-auto max-h-screen  pb-36">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/contacts",
        element: <Contactos />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="flex flex-row">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
