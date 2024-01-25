import { useNavigate } from "react-router-dom";

const VistaPrincipal = () => {
    const navigate = useNavigate()

    return (

        <div className="flex flex-wrap w-screen h-screen">
            <div className="bg-gray-100 p-8 rounded-md shadow-md w-full flex">
                <div className="bg-blue-200 m-auto p-4 rounded-lg">
                    <div className="text-2xl font-bold mb-6 flex gap-3">
                        <span onClick={() => navigate(-1)} title="Atrás" role="button">
                            <i className="bi bi-arrow-left-circle-fill text-upla-100 hover:text-gray-500" />
                        </span>
                        <p className="text-upla-100 uppercase"> Trámite </p>
                    </div>

                    VISTA PRINCIPAL
                </div>

            </div>
        </div>

    )
}

export default VistaPrincipal