import { Bandera } from "@/component/Iconos";
import { useNavigate } from "react-router-dom";

const VistaPrincipal = () => {
    const navigate = useNavigate()

    return (

        <div className="flex flex-wrap w-screen h-screen">
            <div className="p-4 rounded-md shadow-md w-full flex">
                <div className="w-full h-full bg-gray-200 m-auto p-8 rounded-lg">
                    <div className="text-2xl font-bold mb-6 flex gap-3 w-full">
                        <span onClick={() => navigate(-1)} title="Atrás" role="button">
                            <i className="bi bi-arrow-left-circle-fill text-upla-100 hover:text-gray-500" />
                        </span>
                        <p className="text-upla-100 uppercase"> Trámite </p>
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        <div className="bg-teal-400 rounded-md p-4 flex items-center">
                            <div className="bg-teal-500 rounded-full p-3 mr-4">
                                <Bandera className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-2 text-white">Información</h2>
                                <h3 className="text-gray-200">Te mostramos el proceso de tu tràmite</h3>
                            </div>
                        </div>
                        {/**/}
                        <div className="bg-red-200">
                            <div className="bg-green-200 flex flex-col p-4">
                                <span>
                                    Proceso de trámite
                                </span>
                            
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default VistaPrincipal