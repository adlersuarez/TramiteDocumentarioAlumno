import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioEntrada = () => {
    const navigate = useNavigate()

    const [dni, setDni] = useState<string>('76634282')
    const [nombre, setNombre] = useState<string>('John Suarez')
    const [carrera, setCarrera] = useState<string>('Ingeniería de Sistemas')
    const [codigo, setCodigo] = useState<string>('Q00499A')
    const [correo, setCorreo] = useState<string>('')
    const [tramite, setTramite] = useState<string>('DUPLICADO DE ...')
    const [direccion, setDireccion] = useState<string>('')

    const [codigoBoucher, setCodigoBoucher] = useState<string>('')

    //Códigos para Título
    const [codigos, setCodigos] = useState<string[]>([''])

    const handleCodigoChange = (index: number, value: string) => {
        const newCodigos = [...codigos];
        newCodigos[index] = value;
        setCodigos(newCodigos);
    };

    const handleAgregarCodigo = () => {
        setCodigos([...codigos, '']);
    };

    const handleEliminarCodigo = (index: number) => {
        const newCodigos = [...codigos];
        newCodigos.splice(index, 1);
        setCodigos(newCodigos);
    };

    return (

        <div className="flex flex-wrap w-screen h-screen">
            <div className="bg-gray-100 p-8 rounded-md shadow-md w-full flex">
                <div className="bg-blue-200 m-auto p-8 rounded-lg">
                    <div className="font-bold text-2xl text-gray-500 flex flex-col gap-1 mb-4">
                        <h1 className="f">FORMULARIO DE REGISTRO</h1>
                        <hr className="border-2 border-gray-500" />
                    </div>

                    <div className="flex flex-col gap-4 w-96">

                        <div className="flex flex-col gap-1">
                            <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Ingrese su nombre completo"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className={`w-full border border-gray-300 p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${nombre != '' && 'bg-gray-200'}`}
                                readOnly={nombre != ''}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                DNI
                            </label>
                            <input
                                type="text"
                                name="dni"
                                placeholder="Ingrese su DNI"
                                value={dni}
                                onChange={(e) => setDni(e.target.value)}
                                className={`w-full border border-gray-300 p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${dni != '' && 'bg-gray-200'}`}
                                readOnly={dni != ''}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                Carrera Profesional
                            </label>
                            <input
                                type="text"
                                name="dni"
                                placeholder="Ingrese su DNI"
                                value={carrera}
                                onChange={(e) => setCarrera(e.target.value)}
                                className={`w-full border border-gray-300 p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${carrera != '' && 'bg-gray-200'}`}
                                readOnly={carrera != ''}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                Código Estudiante
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="codigo"
                                    placeholder="Ingrese su código"
                                    value={codigo}
                                    onChange={(e) => setCodigo(e.target.value)}
                                    className={`w-full border border-gray-300 p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${codigo != '' && 'bg-gray-200'}`}
                                    readOnly={codigo != ''}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                Dirección
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="direccion"
                                    placeholder="Ingrese su dirección"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                    className={`w-full border border-gray-300 p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 `}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                Correo
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="correo"
                                    placeholder="Ingrese su dirección"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    className={`w-full border border-gray-300 p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 `}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                Tràmite
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="tramite"
                                    value={tramite}
                                    onChange={(e) => setTramite(e.target.value)}
                                    className={`w-full border border-gray-300 p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${tramite != '' && 'bg-gray-200'}`}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                Código Boucher
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="codigo"
                                    placeholder="Ingrese el código del Boucher"
                                    value={codigoBoucher}
                                    onChange={(e) => setCodigoBoucher(e.target.value)}
                                    className={`w-full border border-gray-300 p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500`}

                                />
                            </div>
                        </div>

                        {/* Select */}

                        {/*<div className="flex flex-col gap-1">
                            <label className="flex items-center font-semibold">
                                Carrera
                            </label>
                            <select
                                name="carrera"
                                value={carrera}
                                onChange={(e) => setCarrera(e.target.value)}
                                className="border border-gray-300 p-1 px-2 rounded-md "
                            >
                                <option value="ingenieria">Ingeniería</option>
                                <option value="informatica">Informática</option>
                            </select>
                        </div>*/}

                        <hr className="border border-white mt-2" />
                        {/* Agregar códigos nuevos*/}
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between ">
                                <span className="font-semibold my-auto">Autores extra</span>
                                {//Si superan la cantidad de 4 no se puede agregar
                                    codigos.length < 4 && (
                                        <button
                                            type="button"
                                            onClick={handleAgregarCodigo}
                                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-blue flex gap-2"
                                        >
                                            Agregar Código <i className="bi bi-plus-circle" />
                                        </button>
                                    )
                                }
                            </div>

                            {
                                codigos.map((codigo, index) => (
                                    <div key={index} className="flex w-full justify-between gap-4">
                                        <label className="flex items-center font-semibold text-sm pl-1 w-8">
                                            # {index + 1}
                                        </label>
                                        <div className="flex w-full">
                                            <input
                                                type="text"
                                                value={codigo}
                                                onChange={(e) => handleCodigoChange(index, e.target.value)}
                                                className="w-full border border-gray-300 p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                placeholder={`Ingrese el código del  #${index + 1}`}
                                            />
                                        </div>
                                        {
                                            codigos.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleEliminarCodigo(index)}
                                                    className="text-gray-500 hover:text-red-500 hover:underline focus:outline-none text-lg"
                                                >
                                                    <i className="bi bi-trash3" />
                                                </button>
                                            )
                                        }
                                    </div>
                                ))
                            }

                        </div>
                        <div className="mx-auto mr-0 mt-4">
                            <button
                                //type="submit"
                                onClick={() => navigate('/principal')}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue flex gap-4"
                            >
                                Continuar <i className="bi bi-arrow-right-square" />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default FormularioEntrada