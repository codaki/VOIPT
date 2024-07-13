import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal1 from "../components/Modal/Modal";
import Modal2 from "../components/Modal/Modal2";
function Dashboard() {
  // const [cliente, setCliente] = useState("");
  const [gestiones, setGestiones] = useState([]);
  const [productos, setProductos] = useState([]);
  const [clienteNombre, setClienteNombre] = useState("");
  const [clienteApellido, setClienteApellido] = useState("");
  const [clienteDireccion, setClienteDireccion] = useState("");
  const [clienteCasa, setClienteCasa] = useState("");
  const [clienteCorreo, setClienteCorreo] = useState("");
  const [clienteCedula, setClienteCedula] = useState("");
  const [clienteMovil, setClienteMovil] = useState("");
  const [clienteOficina, setClienteOficina] = useState("");
  const [clienteOpcional, setClienteOpcional] = useState("");
  let id = location.pathname.split("/")[1];

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const toggleModalProducto = () => setShowModal(!showModal);
  const toggleModalGestion = () => setShowModal2(!showModal2);

  const handleModalDecision = (decision) => {
    setShowModal(false);
    console.log(decision);
  };
  const handleModalDecision2 = (decision) => {
    setShowModal2(false);
    console.log(decision);
  };

  console.log(id);
  useEffect(() => {
    async function fetchClient() {
      if (id === 0) {
        // setCliente({});
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getUsuarioId/${Number(id)}`
        );
        const data = response.data[0];
        // setCliente(data);
        setClienteNombre(data.cliente_nombre);
        setClienteApellido(data.cliente_apellido);
        setClienteDireccion(data.cliente_direccion);
        setClienteCasa(data.cliente_casa);
        setClienteCorreo(data.cliente_correo);
        setClienteCedula(data.cliente_cedula);
        setClienteMovil(data.cliente_movil);
        setClienteOficina(data.cliente_oficina);
        setClienteOpcional(data.cliente_opcional);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    }
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getProductos/${Number(id)}`
        );
        console.log(response.data);
        console.log("asdjf;lka;s");
        setProductos(response.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    }
    async function fetchGestiones() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getGestiones/${Number(id)}`
        );
        console.log(response.data);
        console.log("Sorted");
        setGestiones(response.data);
        const sortedGestiones = response.data.sort(
          (a, b) => new Date(b.fecha) - new Date(a.fecha)
        );
        console.log(sortedGestiones);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    }
    fetchGestiones();
    fetchProduct();
    fetchClient();
  }, [id, showModal, showModal2]);
  const latestGestion = gestiones[0];
  return (
    <div className="flex flex-col   " id="containter">
      <div
        className="flex flex-row  w-full p-4 gap-3 min-h-44 overflow-auto "
        id="contenedor1"
      >
        <div className="flex  flex-1  bg-slate-300 w-full h-auto text-black p-4 rounded-md shadow-xl ">
          <div className="flex flex-col w-full gap-4  ">
            <div className="flex w-full mb-6">INFORMACIÓN DE CLIENTE</div>
            <div
              className=" px-6 w-full flex  flex-wrap gap-5 h-full"
              id="seciones"
            >
              <div className="flex flex-wrap justify-between w-80">
                <div className=" text-lg">Nombre:</div>
                <div>
                  <input
                    className="h-5 mx-2 text-lg w-52  mt-1 rounded-md text-center"
                    type="text"
                    value={clienteNombre}
                    placeholder="Jhon "
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between w-80">
                <label className="text-lg">Apellido:</label>
                <input
                  className="h-5 mx-2 text-lg w-52  mt-1 rounded-md text-center"
                  type="text"
                  value={clienteApellido}
                  placeholder="Doe "
                />
              </div>
              <div className=" flex flex-wrap justify-between w-80 ">
                <label className="text-lg">Dirección :</label>
                <input
                  className="h-5 mx-2 text-lg w-52  mt-1 rounded-md text-center"
                  type="text"
                  value={clienteDireccion}
                  placeholder="Doe "
                />
              </div>

              <div className="flex flex-wrap justify-between w-80 ">
                <label className="text-lg">Correo :</label>
                <input
                  className="h-5 mx-2 text-lg w-52  mt-1 rounded-md text-center"
                  type="text"
                  value={clienteCorreo}
                  placeholder="Doe "
                />
              </div>
              <div className="flex flex-wrap justify-between w-80 ">
                <label className="text-lg">Cédula :</label>
                <input
                  className="h-5 mx-2 text-lg w-52  mt-1 rounded-md text-center"
                  type="text"
                  value={clienteCedula}
                  placeholder="Doe "
                />
              </div>
              <div className=" flex flex-wrap justify-between w-80">
                <label className="text-lg">Telefono :</label>
                <input
                  className="h-5 mx-2 text-lg w-52  mt-1 rounded-md text-center"
                  type="text"
                  value={clienteCasa}
                  placeholder="Doe "
                />
              </div>
              <div className=" flex flex-wrap justify-between w-80">
                <label className="text-lg">Movil :</label>
                <input
                  className="h-5 mx-2 text-lg w-52  mt-1 rounded-md text-center"
                  type="text"
                  value={clienteMovil}
                  placeholder="Doe "
                />
              </div>
              <div className="flex flex-wrap justify-between w-80 ">
                <label className="text-lg">Opcional :</label>
                <input
                  className="h-5 mx-2 text-lg w-52  mt-1 rounded-md text-center"
                  type="text"
                  value={clienteOpcional}
                  placeholder="Doe "
                />
              </div>
              <div className=" flex flex-wrap justify-between w-80">
                <label className="text-lg">Oficina:</label>
                <input
                  className="h-5 mx-2 text-lg w-52  mt-1 rounded-md text-center"
                  type="text"
                  value={clienteOficina}
                  placeholder="Doe "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-md bg-slate-100  p-4 rounded-md  shadow-xl">
          <div className="flex flex-col  ">
            <div className="flex w-full">UTLTIMA INTERACCION</div>
            <div className="flex flex-col">
              <div>
                {latestGestion ? (
                  <div className="flex flex-wrap w-60 pl-5 text-sm gap-2">
                    <p className="w-60">
                      <h1 className="font-bold">Gestión Nombre:</h1>

                      {latestGestion.gestion_nombre}
                    </p>
                    <p className="w-60">
                      <h1 className="font-bold">Observación: </h1>
                      {latestGestion.observación}
                    </p>
                    <p className="w-60">
                      <h1 className="font-bold">Gestión Tipo Nombre: </h1>
                      {latestGestion.gestion_tipo_nombre}
                    </p>
                    <p className="w-60">
                      <h1 className="font-bold">Fecha:</h1>
                      {new Date(latestGestion.fecha).toLocaleString()}
                    </p>
                    <p className="w-60">
                      <h1 className="font-bold">Número:</h1>
                      {latestGestion.numero}
                    </p>
                    <p className="w-60">
                      <h1 className="font-bold"> Valor Compromiso:</h1>
                      {latestGestion.valor_compromiso || "N/A"}
                    </p>
                  </div>
                ) : (
                  <p>No hay gestiones disponibles.</p>
                )}
              </div>
            </div>
            <button
              onClick={toggleModalGestion}
              className="ml-4 py-2 mt-2 px-4 bg-blue-500 text-white rounded-lg"
            >
              Añadir Interaccion
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row  w-full p-4 min-h-44">
        <div className="flex border bg-blue-300 w-full min-h-40 text-black  p-4 rounded-md shadow-lg">
          <div className="w-full p-4">
            <div className="relative w-full shadow-md sm:rounded-lg">
              <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900">
                <button
                  className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
                  onClick={toggleModalProducto}
                >
                  Añadir Producto
                </button>

                <button className="ml-4 py-2 px-4 bg-green-500 text-white rounded-lg">
                  Productos
                </button>

                <Link className="link" to={`/contacts`}>
                  <button className="ml-4 my-2 py-2 px-4 bg-yellow-500 text-white rounded-lg">
                    Contactos
                  </button>
                </Link>
              </div>

              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {/* <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </th> */}

                    <th scope="col" className="px-6 py-3">
                      Nombre
                    </th>

                    <th scope="col" className="px-6 py-3 text-center">
                      1era Edad
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      2da Edad
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      3era Edad
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      4ta Edad
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      5ta Edad
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Suma Días
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Suma Saldo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((category) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={category.cat_id}
                    >
                      {/* <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id={`checkbox-table-search-${category.producto_id}`}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            // checked={selectedCategories.includes(category.cat_id)}
                            // onChange={() => handleSelectCategories(category.cat_id)}
                          />
                          <label
                            htmlFor={`checkbox-table-search-${category.producto_id}`}
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td> */}
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {category.producto_nombre}
                      </th>

                      {Array.from(
                        { length: category.edad < 5 ? category.edad : 4 },
                        (_, index) => (
                          <td className="text-center" key={index}>
                            {category.producto_carga_mensual}
                          </td>
                        )
                      )}
                      {Array.from({ length: 4 - category.edad }, (_, index) => (
                        <td className="text-center" key={`empty-${index}`}>
                          0
                        </td>
                      ))}
                      <td className="text-center">
                        {category.edad >= 5
                          ? category.producto_carga_mensual * 3
                          : 0}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {category.edad < 5 ? category.edad * 30 : 4 * 30 + 90}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {category.edad <= 4
                          ? category.producto_carga_mensual * category.edad
                          : category.producto_carga_mensual * category.edad +
                            category.producto_carga_mensual * 2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row  w-full p-4 min-h-44">
        <div className="flex border bg-green-300 w-full min-h-40 text-black  p-4 rounded-md shadow-lg">
          <div className="w-full">
            <div className="relative w-full shadow-md sm:rounded-lg">
              <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900">
                <button
                  className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
                  onClick={toggleModalGestion}
                >
                  Añadir Gestión
                </button>

                <button className="ml-4 py-2 px-4 bg-green-500 text-white rounded-lg">
                  Gestiones
                </button>
                <Link className="link" to={`/contacts`}>
                  <button className="ml-4 my-2 py-2 px-4 bg-yellow-500 text-white rounded-lg">
                    Contactos
                  </button>
                </Link>
              </div>

              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Nombre
                    </th>
                    <th>Tipo Gestión</th>
                    <th scope="col" className="px-6 py-3">
                      Observación
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Número Contactado
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Valor Compromiso
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Fecha y Hora
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gestiones.map((category) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={category.cat_id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {category.gestion_nombre}
                      </th>
                      <th>{category.gestion_tipo_nombre}</th>
                      <td className="px-6 py-4">{category.observación}</td>
                      <td className="px-6 py-4">{category.numero}</td>
                      <td className="px-6 py-4">{category.valor_compromiso}</td>
                      <td className="px-6 py-4">
                        {new Date(category.fecha).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  w-full p-4 min-h-44">
        <div className="flex border bg-slate-300 w-full min-h-40 text-black  p-4 rounded-md ">
          <div className="flex flex-col w-full  gap-2 text-lg ">
            <div className="flex w-full">Historial de gestiones</div>
            <div className="flex flex-col flex-1 w-full">
              <div className="flex flex-row bg-slate-50 p-2 m-3">
                <div className="p-2">Logo</div>
                <div className="flex flex-1 flex-col pl-4">
                  <div>Administrador - Hace 1 día</div>
                  <div className="p-4">Creación de Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal1
          title={"Añadir Producto"}
          id={id}
          onDecision={handleModalDecision}
        />
      )}
      {showModal2 && (
        <Modal2
          title={"Añadir Gestión"}
          id={id}
          onDecision={handleModalDecision2}
        />
      )}
    </div>
  );
}

export default Dashboard;
