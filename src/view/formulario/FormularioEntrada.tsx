import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FormularioEntrada = () => {
    const navigate = useNavigate()

    const [dni, setDni] = useState<string>('76634282')
    const [nombre, setNombre] = useState<string>('John Suarez')
    const [carrera, setCarrera] = useState<string>('Ingeniería de Sistemas')
    const [codigo, setCodigo] = useState<string>('Q00499A')
    const [correo, setCorreo] = useState<string>('Q00499A@upla.edu.pe')
    const [tramite, setTramite] = useState<string>('INSCRIPCIÓN TESIS')
    const [direccion, setDireccion] = useState<string>('Av. Giraldez N° 164')

    const [codigoBoucher, setCodigoBoucher] = useState<string>('')
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const refBoucher = useRef<HTMLInputElement>(null)
    const refDocumentos = useRef<HTMLInputElement>(null)

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    //Códigos para Título
    const [codigos, setCodigos] = useState<string[]>([''])
    const requisitos: string[] = [
        'Propuesta de Tesis', 'Cronograma de trabajo', 'Carta de aprobación de Tutor'
    ]

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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
        }
    };

    const removeFile = (index: number) => {
        const newFiles = [...selectedFiles];
        newFiles.splice(index, 1);
        setSelectedFiles(newFiles);
    };

    interface StepIndicatorProps {
        stepNumber: number;
        currentStep: number;
    }

    const StepIndicator: React.FC<StepIndicatorProps> = ({ stepNumber, currentStep }) => (
        <div className="flex items-center ">
            <div className={`w-14 h-14 rounded-full text-3xl font-bold flex items-center justify-center border-4 
                            ${currentStep === stepNumber ? 'border-gray-500 bg-gray-500 text-white' : 'border-gray-400 text-gray-400'}
                            transition-all transition-duration-3000 ease-in-out`}
            >
                {stepNumber}
            </div>
            {/*<p className={`text-lg font-bold ${currentStep === stepNumber && 'text-blue-500'}`}>
                Paso {stepNumber}
            </p>*/}
        </div>
    );

    const deshabilitadoBoton = () => {
        if (codigoBoucher.trim() === '') return true
        if (selectedFiles.length === 0) return true
        // Agregar mas lógica // validez de boucher //cantidad de documentos
    }

    const handleBotonClick = () => {
        // Lógica a realizar cuando se hace clic en el botón
        if (codigoBoucher.trim() === '') {
            toast.error("Debes incluir el código de tu boucher en el trámite")
            refBoucher.current?.focus()
            return
        }

        if (selectedFiles.length === 0) {
            toast.error("Debes incluir los documentos requeridos para el trámite")
            refDocumentos.current?.focus()
            return
        }

        navigate('/principal')
    };

    return (

        <div className="flex flex-wrap w-screen h-screen bg-gray-200 ">
            <div className="mx-auto my-16">
                <div className="grid grid-cols-1 gap-8 justify-start">
                    <Toaster />
                    <div className="flex items-center justify-between w-60 gap-4 mx-auto">
                        <StepIndicator stepNumber={1} currentStep={step} />
                        <div className="border-2 border-gray-400 flex-grow" />
                        <StepIndicator stepNumber={2} currentStep={step} />
                    </div>

                    {
                        step === 1 &&
                        <div className="bg-white mx-auto p-8 rounded-lg">
                            <div className="font-bold text-2xl text-gray-400 flex flex-col gap-1 mb-4">
                                <h1 className="f">VERIFICACIÓN DE DATOS</h1>
                                <hr className="border-2 border-gray-400" />
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
                                        className={`w-full border border-gray-300 p-2 px-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${nombre != '' && 'bg-gray-200'}`}
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
                                        className={`w-full border border-gray-300 p-2 px-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${dni != '' && 'bg-gray-200'}`}
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
                                        className={`w-full border border-gray-300 p-2 px-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${carrera != '' && 'bg-gray-200'}`}
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
                                            className={`w-full border border-gray-300 p-2 px-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${codigo != '' && 'bg-gray-200'}`}
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
                                            className={`w-full border border-gray-300 p-2 px-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 `}
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
                                            className={`w-full border border-gray-300 p-2 px-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 `}
                                        />
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <button
                                        //type="submit"
                                        onClick={handleNext}
                                        className="w-full justify-center bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue flex gap-4"
                                    >
                                        Continuar {/*<i className="bi bi-arrow-right-square" />*/}
                                    </button>
                                </div>

                            </div>
                        </div>
                    }
                    {
                        step === 2 &&
                        <div className="bg-white mx-auto p-8 rounded-lg ">

                            <div className="font-bold text-2xl text-gray-400 flex flex-col gap-1 mb-4">
                                <h1 className="f">DATOS DE TRÁMITE</h1>
                                <hr className="border-2 border-gray-400" />
                            </div>
                            <div className="flex flex-col gap-4 w-96">
                                <div className="flex flex-col gap-1">
                                    <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                        Trámite
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="tramite"
                                            value={tramite}
                                            onChange={(e) => setTramite(e.target.value)}
                                            className={`w-full border border-gray-300 p-2 px-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${tramite != '' && 'bg-gray-200'}`}
                                        />
                                    </div>
                                </div>


                                <div className="flex flex-col gap-1">
                                    <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                        Requisitos trámite
                                    </label>
                                    <div className="">
                                        <ul className="list-disc pl-4">
                                            {requisitos.map((requisito, index) => (
                                                <li key={index} className="text-sm ml-2">
                                                    {/*{requisito.obtenido ? (
                                                    <span className="line-through">{requisito.nombre}</span>
                                                ) : (
                                                    requisito.nombre
                                                )}*/}
                                                    <span className="">{requisito}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                        Código Boucher <i className="bi bi-asterisk text-red-500 ml-2" />
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            ref={refBoucher}
                                            name="codigo"
                                            placeholder="Ingrese el código del Boucher"
                                            value={codigoBoucher}
                                            onChange={(e) => setCodigoBoucher(e.target.value)}
                                            className={`w-full border border-gray-300 p-2 px-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                        />
                                        {
                                            // APLICAR LA VALIDEZ DEL BOUCHER AQUI
                                            codigoBoucher ?
                                                <div title="Pago verificado"
                                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-400 text-white px-1 rounded-full">
                                                    <i className="bi bi-check" />
                                                </div>
                                                :
                                                <div title="Pago no encontrado"
                                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-red-400 text-white px-1 rounded-full">
                                                    <i className="bi bi-x" />
                                                </div>
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="flex items-center font-bold text-xs text-gray-500 uppercase">
                                        Documentos <i className="bi bi-asterisk text-red-500 ml-2" />
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            ref={refDocumentos}
                                            name="archivo"
                                            multiple
                                            onChange={handleFileChange}
                                            className={`w-full border pr-4 border-gray-300 mt-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                                        />
                                    </div>
                                </div>
                                {
                                    selectedFiles.length !== 0 &&
                                    <div className="w-full">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="text-sm">
                                                    <th className="border px-4 py-1">Archivo</th>
                                                    <th className="border py-1">-</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    selectedFiles.map((file, index) => (
                                                        <tr key={index}>
                                                            <td title={file.name}
                                                                className="border px-4 py-2 max-w-xs text-xs overflow-hidden whitespace-nowrap overflow-ellipsis">
                                                                {file.name}
                                                            </td>
                                                            <td className="border px-2 py-2 flex">
                                                                <button
                                                                    title="Quitar archivo"
                                                                    onClick={() => removeFile(index)}
                                                                    className="bg-gray-400 hover:bg-red-600 text-white rounded px-1 mx-auto"
                                                                >
                                                                    <i className="bi bi-trash3" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                }

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
                                        <span className="font-bold my-auto text-gray-500">
                                            AUTORES {/*<i className="bi bi-asterisk text-xs text-red-500 ml-2">   ( Máximo 4 )</i>*/}
                                        </span>
                                        {//Si superan la cantidad de 4 no se puede agregar
                                            codigos.length < 4 && (
                                                <button
                                                    type="button"
                                                    onClick={handleAgregarCodigo}
                                                    className="bg-gray-500 text-white p-2 rounded-md text-xs hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue flex gap-2"
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
                                                <div className="relative w-full">
                                                    <input
                                                        type="text"
                                                        value={codigo}
                                                        onChange={(e) => handleCodigoChange(index, e.target.value)}
                                                        className="w-full border border-gray-300 p-2 px-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                        placeholder={`Ingrese el código del  #${index + 1}`}
                                                    />
                                                    {
                                                        //APLICAR LA VALIDEZ DE LOS CÓDIGOS EXTRAS AQUI
                                                        codigo ?
                                                            <div title="Pago verificado"
                                                                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-400 text-white px-1 rounded-full">
                                                                <i className="bi bi-check" />
                                                            </div>
                                                            :
                                                            <div title="Pago no encontrado"
                                                                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-red-400 text-white px-1 rounded-full">
                                                                <i className="bi bi-x" />
                                                            </div>
                                                    }

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
                                <div className="flex w-full justify-between mt-4">
                                    <button
                                        //type="submit"
                                        onClick={handlePrev}
                                        className=" text-gray-400 px-4 py-2 pl-1 rounded-md  focus:outline-none focus:shadow-outline-blue flex gap-4"
                                    >
                                        {/*<i className="bi bi-arrow-left" />*/} Volver {/*<i className="bi bi-arrow-right-square" />*/}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleBotonClick}
                                        //disabled={deshabilitadoBoton()}//
                                        className={` text-white px-4 py-2 rounded-md  focus:outline-none focus:shadow-outline-blue flex gap-2 bg-gray-400
                                            ${!deshabilitadoBoton() && 'hover:bg-blue-600'}
                                        `}
                                    >
                                        Registrar trámite {/*<i className="bi bi-check-circle" />*/}
                                    </button>
                                </div>
                                <div className="relative flex flex-wrap justify-center mt-4">
                                    <span className="text-xs">
                                        Todos los campos con <i className="bi bi-asterisk text-xs text-red-500"></i> son oblicatorios
                                    </span>
                                </div>
                            </div>
                        </div>
                    }



                </div>
            </div>

        </div>

    )
}

export default FormularioEntrada