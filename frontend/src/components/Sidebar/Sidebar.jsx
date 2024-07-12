// import { FaSellsy } from "react-icons/fa";
// import { IoBusinessSharp } from "react-icons/io5";
import { MdContacts, MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <>
      <aside className="flex flex-col content-between p-4 bg-gradient-to-r from-indigo-500  min-w-52 to-blue-500 text-white items-center gap-9 rounded-sm">
        <button className="font-bold text-xl py-4">Sistema</button>
        <div className="flex bg-white  w-full h-0.5"></div>
        <div>Usuario</div>
        <div className="flex bg-white  w-full h-0.5"></div>
        <ul className="flex flex-col gap-6  w-full">
          <Link
            className="py-4 flex space-x-2 justify-center hover:bg-slate-50 hover:text-blue-500 rounded-md  focus:outline-none focus:bg-gray-300 focus:text-blue-600"
            to={`/`}
          >
            <button className=" flex  justify-center ">
              <MdDashboard className="mt-1" />
              Dashboard
            </button>
          </Link>
          <Link
            className="py-4 flex space-x-2 justify-center hover:bg-slate-50 hover:text-blue-500 rounded-md  focus:outline-none focus:bg-gray-300 focus:text-blue-600"
            to={`/contacts`}
          >
            <button className=" flex space-x-2 ">
              <MdContacts className="mt-1" />
              Contactos
            </button>
          </Link>
          {/* <button className="py-4 flex space-x-2 justify-center hover:bg-slate-50 hover:text-blue-500 rounded-md focus:outline-none focus:bg-gray-300 focus:text-blue-600">
            <IoBusinessSharp className="mt-1" />
            <a href="/#">Empresas</a>
          </button>
          <button className="py-4 flex space-x-2 justify-center hover:bg-slate-50 hover:text-blue-500 rounded-md focus:outline-none focus:bg-gray-300 focus:text-blue-600">
            <FaSellsy className="mt-1" />
            <a href="/#">CRM</a>
          </button> */}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
