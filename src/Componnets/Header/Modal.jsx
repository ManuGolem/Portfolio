import { useEffect, useState } from "react";
import { ButtonNav } from "./ButtonNav";
export function Modal({ idioma, textButtons, funcion, abrir, cerrar }) {
    const [clasesModal, setClasesModal] = useState("hidden");
    function cerrarModal() {
        setClasesModal("hidden");
        cerrar();
    }
    useEffect(() => {
        abrir &&
            setClasesModal(
                "bg-fondo-header absolute top-[100px] right-0 w-[100vw] text-center backdrop-blur-[5px] block",
            );
    }, [abrir]);
    return (
        <div className={clasesModal}>
            <nav>
                <ul className="flex flex-col gap-6 text-aqua font-bold text-xl items-center my-5">
                    <ButtonNav
                        text={textButtons.sobremi}
                        link="#sobremi"
                        cerrar={cerrarModal}
                    />
                    <ButtonNav
                        text={textButtons.proyectos}
                        link="#proyectos"
                        cerrar={cerrarModal}
                    />
                    <ButtonNav
                        text={textButtons.skills}
                        link="#skills"
                        cerrar={cerrarModal}
                    />
                    <ButtonNav
                        text={textButtons.contacto}
                        link="#contacto"
                        cerrar={cerrarModal}
                    />
                    <ButtonNav
                        text={idioma ? "English" : "Spanish"}
                        funcion={funcion}
                    />

                    <svg
                        fill="#689d6a"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="w-6 hover:scale-[1.1] cursor-pointer"
                        onClick={cerrarModal}
                    >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </ul>
            </nav>
        </div>
    );
}
