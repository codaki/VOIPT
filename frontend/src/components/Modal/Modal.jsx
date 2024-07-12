import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Modal1({ title, onDecision, id }) {
  const [open, setOpen] = useState(true);
  const [productos, setProductos] = useState([]);
  const [productoSelected, setProductoSelected] = useState(1);
  const [edad, setEdad] = useState(1);

  async function handleSubmit() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/enviarProductos",
        {
          producto: productoSelected,
          edad: edad,
          cliente: id,
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchProductos() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/getProductos"
        );
        console.log(response);
        console.log(id);
        console.log(response.data);
        setProductos(response.data);
        if (productos.length > 0) {
          setProductoSelected(productos[0].producto_id.toString()); // Default to first product's ID
        }
        console.log(productos);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProductos();
  }, []);

  return (
    <Transition show={open}>
      <Dialog
        className="relative z-10"
        onClose={() => {
          setOpen(false);
        }}
      >
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-black-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div
                      className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full 
                       bg-green-100
                       sm:mx-0 sm:h-10 sm:w-10"
                    >
                      <PlusCircleIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-700"
                      >
                        {title}
                      </DialogTitle>
                      <div className="mt-2 text-gray-500">
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <form>
                            <select
                              value={productoSelected}
                              onChange={(e) =>
                                setProductoSelected(e.target.value)
                              }
                            >
                              {productos.map((producto) => (
                                <option
                                  key={producto.producto_id}
                                  value={producto.producto_id}
                                >
                                  {producto.producto_nombre}
                                </option>
                              ))}
                            </select>
                            <select onChange={(e) => setEdad(e.target.value)}>
                              <option value="1">Edad 1</option>
                              <option value="2">Edad 2</option>
                              <option value="3">Edad 3</option>
                              <option value="4">Edad 4</option>
                              <option value="5">Edad 5</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      setOpen(false);
                      onDecision(false);
                    }}
                    data-autofocus
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      setOpen(false);
                      handleSubmit();
                      onDecision(true);
                    }}
                    data-autofocus
                  >
                    Enviar
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
