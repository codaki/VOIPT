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
export default function Modal2({ title, onDecision, id }) {
  const [open, setOpen] = useState(true);
  const [tiposGestiones, setTiposGestiones] = useState([]);
  const [gestiones, setGestiones] = useState([]);
  const [observacion, setObservacion] = useState("");
  const [gestion, setGestion] = useState(1);
  const [valorCompromiso, setValorCompromiso] = useState("");
  const [numeros, setNumeros] = useState([]);
  const [selectedNumero, setSelectedNumero] = useState("");

  async function handleSubmit() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/enviarGestion",
        {
          cliente: id,
          gestion: gestion,
          observacion: observacion,
          valorCompromiso: valorCompromiso,
          numero: selectedNumero,
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  async function getValores(tipo) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/getGestionesId/${tipo}`
      );
      console.log(response);
      console.log("asdflaksd;fl");
      console.log(response.data);
      setGestiones(response.data);
      console.log(gestiones);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchGestiones() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getGestiones/`
        );

        setGestiones(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchTiposGestiones() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getTiposGestiones/`
        );
        console.log(response);

        console.log(response.data);
        setTiposGestiones(response.data);
        console.log(gestiones);
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchNumeros() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getNumeros/${id}`
        );
        console.log(response);
        console.log(response.data);
        setNumeros(response.data);
        setSelectedNumero(Object.values(response.data[0])[0].toString());
        console.log(numeros);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNumeros();
    fetchTiposGestiones();
    fetchGestiones();
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
                      <div className="mt-2 text-gray-800">
                        <div className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 rounded-md">
                          <form>
                            <label className=" flex py-2">Resultado</label>
                            <select
                              className=" w-50"
                              onChange={(e) => {
                                setGestion(e.target.value);
                                getValores(e.target.value);
                              }}
                            >
                              {tiposGestiones.map((tipo) => (
                                <option
                                  key={tipo.gestion_tipo_id}
                                  value={tipo.gestion_tipo_id}
                                >
                                  {tipo.gestion_tipo_nombre}
                                </option>
                              ))}
                            </select>
                            <label className=" flex py-2">Observación</label>
                            <select
                              onChange={(e) => setGestion(e.target.value)}
                            >
                              {gestiones.map((gestion) => (
                                <option
                                  key={gestion.gestion_id}
                                  value={gestion.gestion_id}
                                >
                                  {gestion.gestion_nombre}
                                </option>
                              ))}
                            </select>
                            <label className=" flex py-2">
                              Número Contactado
                            </label>
                            <select
                              className=" w-50" // Adjust className as needed
                              onChange={(e) => {
                                setSelectedNumero(e.target.value);
                              }}
                            >
                              {numeros.length > 0 &&
                                Object.entries(numeros[0]).map(
                                  ([key, value]) => (
                                    <option key={key} value={value}>
                                      {`${value}`}
                                    </option>
                                  )
                                )}
                            </select>
                            <label className=" flex py-2">
                              Observaciones Adicionales
                            </label>
                            <input
                              required
                              className="py-3 m-1 h-20 w-80"
                              type="text"
                              onChange={(e) => setObservacion(e.target.value)}
                            />
                            <label className=" flex py-2">
                              Valor Compromiso ($USD)
                            </label>
                            <input
                              required
                              className="py-3 m-1 h-5 w-80"
                              type="text"
                              onChange={(e) =>
                                setValorCompromiso(e.target.value)
                              }
                            />
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
