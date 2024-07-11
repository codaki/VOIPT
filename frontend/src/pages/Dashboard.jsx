function Dashboard() {
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
                  placeholder="Jhon "
                />
              </div>
              <div className="mb-5  mx-2">
                <label className="text-lg">Apellido:</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  placeholder="Doe "
                />
              </div>
              <div className="mb-5  mx-2">
                <label className="text-lg">Dirección :</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  placeholder="Doe "
                />
              </div>
              <div className="mb-5 mx-2">
                <label className="text-lg">Telefono :</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  placeholder="Doe "
                />
              </div>
              <div className="mb-5 mx-2">
                <label className="text-lg">Correo :</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  placeholder="Doe "
                />
              </div>
              <div className="mb-5 mx-2">
                <label className="text-lg">Cédula :</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
                  placeholder="Doe "
                />
              </div>
              <div className="mb-5 mx-2">
                <label className="text-lg">Genero :</label>
                <input
                  className="h-5 mx-4 text-lg p-2 rounded-md"
                  type="text"
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
                <button className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg">
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
                      Descripcion
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      dfg
                    </th>
                    <td className="px-6 py-4">sdf</td>

                    <td className="px-6 py-4 ">
                      <button className="ml-2">Delete</button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      dfg
                    </th>
                    <td className="px-6 py-4">sdf</td>

                    <td className="px-6 py-4 ">
                      <button className="ml-2">Delete</button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      dfg
                    </th>
                    <td className="px-6 py-4">sdf</td>

                    <td className="px-6 py-4 ">
                      <button className="ml-2">Delete</button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      dfg
                    </th>
                    <td className="px-6 py-4">sdf</td>

                    <td className="px-6 py-4 ">
                      <button className="ml-2">Delete</button>
                    </td>
                  </tr>
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
                <button className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg">
                  Añadir Interaccion
                </button>

                <button className="ml-4 py-2 px-4 bg-green-500 text-white rounded-lg">
                  Interacciones
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
                      Descripcion
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      dfg
                    </th>
                    <td className="px-6 py-4">sdf</td>

                    <td className="px-6 py-4 ">
                      <button className="ml-2">Delete</button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      dfg
                    </th>
                    <td className="px-6 py-4">sdf</td>

                    <td className="px-6 py-4 ">
                      <button className="ml-2">Delete</button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      dfg
                    </th>
                    <td className="px-6 py-4">sdf</td>

                    <td className="px-6 py-4 ">
                      <button className="ml-2">Delete</button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      dfg
                    </th>
                    <td className="px-6 py-4">sdf</td>

                    <td className="px-6 py-4 ">
                      <button className="ml-2">Delete</button>
                    </td>
                  </tr>
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
    </div>
  );
}

export default Dashboard;
