import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import Error_Referencia from "../assets/alert/Error_Referencia";
function Categories() {
  const [categories, setCategories] = useState([]);
  const [referencia, setReferencia] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/usuarios");
      console.log(response);
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteData = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:8000/api/deleteUsuarios/${id}`
      );
      console.log(result.data);

      fetchData();
      console.log("asdfasd");
      if (result.data == false) {
        setReferencia(true);
        setTimeout(() => {
          setReferencia(false);
        }, 2500);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteSelectedCategories = async () => {
    try {
      const respu = await Promise.all(
        selectedCategories.map((id) =>
          axios.delete(`http://localhost:8000/api/deleteUsuarios/${id}`)
        )
      );
      if (respu.some((item) => item.data === false)) {
        console.log("One or more items in the response are false");
        console.log(referencia);
        setReferencia(true);
        setTimeout(() => {
          setReferencia(false);
        }, 2500);
        console.log("2", referencia);
      }
      fetchData();
      setSelectedCategories([]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectCategories = (id) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((CategorieId) => CategorieId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedCategories.length === categories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(categories.map((category) => category.cliente_id));
    }
  };
  return (
    <div>
      <h1 className="text-[4rem] font-bold leading-none text-center mb-[1em]">
        Administrador de Categorias
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900">
          <Link className="link" to={`/newCategory`}>
            <button className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg">
              Crear Categoria
            </button>
          </Link>
          <Link className="link" to={`/`}>
            <button className="ml-4 py-2 px-4 bg-green-500 text-white rounded-lg">
              Productos
            </button>
          </Link>
          <button
            onClick={deleteSelectedCategories}
            className="ml-4 my-2 py-2 px-4 bg-red-500 text-white rounded-lg"
          >
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
                    checked={selectedCategories.length === categories.length}
                    onChange={handleSelectAll}
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>

              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Apellido
              </th>
              <th scope="col" className="px-6 py-3">
                Cédula
              </th>
              <th scope="col" className="px-6 py-3">
                Cliente Correo
              </th>
              <th scope="col" className="px-6 py-3">
                Móvil
              </th>
              <th scope="col" className="px-6 py-3">
                Direccion
              </th>
              <th scope="col" className="px-6 py-3">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={category.cliente_id}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${category.cliente_id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={selectedCategories.includes(category.cliente_id)}
                      onChange={() =>
                        handleSelectCategories(category.cliente_id)
                      }
                    />
                    <label
                      htmlFor={`checkbox-table-search-${category.cliente_id}`}
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
                  {category.cliente_nombre}
                </th>
                <td className="px-6 py-4">{category.cliente_apellido}</td>
                <td className="px-6 py-4">{category.cliente_cedula}</td>
                <td className="px-6 py-4">{category.cliente_correo}</td>
                <td className="px-6 py-4">{category.cliente_movil}</td>
                <td className="px-6 py-4">{category.cliente_direccion}</td>
                <td className="px-6 py-4 ">
                  <Link
                    className="link"
                    to={`/category/${category.cliente_id}`}
                  >
                    <button>Edit</button>
                  </Link>
                  <button
                    onClick={() => deleteData(category.cliente_id)}
                    className="ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Categories;
