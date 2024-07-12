import axios from "axios";
import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
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
  // const [clienteOficina, setClienteOficina] = useState("");
  // const [clienteOpcional, setClienteOpcional] = useState("");
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
        // setClienteOficina(data.cliente_oficina);
        // setClienteOpcional(data.cliente_opcional);
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
        console.log("asdjf;lka;s");
        setGestiones(response.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    }
    fetchGestiones();
    fetchProduct();
    fetchClient();
  }, [id, showModal, showModal2]);
  return (
    <div className="flex flex-col   " id="containter">
      <div
        className="flex flex-row  w-full p-4 gap-3 min-h-44 overflow-auto "
        id="contenedor1"
      >
        <div className="flex  flex-1 border bg-slate-300 w-full h-auto text-black p-4 rounded-md  ">
          <div className="flex flex-col w-full  gap-2 ">
            <div className="flex w-full">Información de contacto</div>
            <div className="flex w-full  flex-wrap p-2 ">
              <div className="mb-5 mx-2">
                <label className="text-lg">Nombre:</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  value={clienteNombre}
                  placeholder="Jhon "
                />
              </div>
              <div className="mb-5  mx-2">
                <label className="text-lg">Apellido:</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  value={clienteApellido}
                  placeholder="Doe "
                />
              </div>
              <div className="mb-5  mx-2">
                <label className="text-lg">Dirección :</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  value={clienteDireccion}
                  placeholder="Doe "
                />
              </div>
              <div className="mb-5 mx-2">
                <label className="text-lg">Telefono :</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  value={clienteCasa}
                  placeholder="Doe "
                />
              </div>
              <div className="mb-5 mx-2">
                <label className="text-lg">Correo :</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  value={clienteCorreo}
                  placeholder="Doe "
                />
              </div>
              <div className="mb-5 mx-2">
                <label className="text-lg">Cédula :</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  value={clienteCedula}
                  placeholder="Doe "
                />
              </div>
              <div className="mb-5 mx-2">
                <label className="text-lg">Movil :</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  value={clienteMovil}
                  placeholder="Doe "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-96  border-black border  p-4 rounded-md">
          <div className="flex flex-col min-w-80  gap-2 ">
            <div className="flex w-full">UTLTIMA INTERACCION</div>
            <div className="flex flex-col">
              <div>
                <label>Deudas: </label>
                <label>7</label>
              </div>
              <div>
                <label>Pagos relizados: </label>
                <label>2342</label>
              </div>
              <div>
                <label>Fecah último pago: </label>
                <label>13-02-2024</label>
              </div>
            </div>
            <button className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg">
              Añadir Interaccion
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row  w-full p-4 min-h-44">
        <div className="flex border bg-blue-300 w-full min-h-40 text-black  p-4 rounded-md ">
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

                <button className="ml-4 my-2 py-2 px-4 bg-red-500 text-white rounded-lg">
                  Eliminar Categorias
                </button>
              </div>

              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
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
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Nombre
                    </th>

                    <th scope="col" className="px-6 py-3">
                      1era Edad
                    </th>
                    <th scope="col" className="px-6 py-3">
                      2da Edad
                    </th>
                    <th scope="col" className="px-6 py-3">
                      3era Edad
                    </th>
                    <th scope="col" className="px-6 py-3">
                      4ta Edad
                    </th>
                    <th scope="col" className="px-6 py-3">
                      5ta Edad
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Suma Días
                    </th>
                    <th scope="col" className="px-6 py-3">
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
                      <td className="w-4 p-4">
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
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {category.producto_nombre}
                      </th>

                      {Array.from(
                        { length: category.edad < 5 ? category.edad : 4 },
                        (_, index) => (
                          <td key={index}>{category.producto_carga_mensual}</td>
                        )
                      )}
                      {Array.from({ length: 4 - category.edad }, (_, index) => (
                        <td key={`empty-${index}`}>0</td>
                      ))}
                      <td>
                        {category.edad >= 5
                          ? category.producto_carga_mensual * 3
                          : 0}
                      </td>
                      <td className="px-6 py-4">
                        {category.edad < 5 ? category.edad * 30 : 4 * 30 + 90}
                      </td>
                      <td className="px-6 py-4">
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
        <div className="flex border bg-green-300 w-full min-h-40 text-black  p-4 rounded-md ">
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

                <button className="ml-4 my-2 py-2 px-4 bg-red-500 text-white rounded-lg">
                  Eliminar Gestión
                </button>
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
                      Fecha
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
                      <td className="px-6 py-4">{category.fecha}</td>
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
