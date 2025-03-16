import { useState } from "react";
import { ButtonNav } from "./ButtonNav";
import { Modal } from "./Modal";

export function Header({ textButtons, idioma, funcion }) {
    const [abierto, setAbierto] = useState(false);
    const [classes, setClasses] = useState("block");
    const [claseH, setClaseH] = useState("justify-between");
    function abrirModal() {
        setAbierto(true);
        setClasses("hidden");
        setClaseH("justify-center");
    }
    function cerrarModal() {
        setAbierto(false);
        setClasses("block");
        setClaseH("justify-between");
    }
    return (
        <header
            className={"top-0 left-0 flex  py-8 px-8 bg-fondo-header fixed w-screen backdrop-blur-[5px] z-10 max-h-[100px]".concat(
                " ",
                claseH,
            )}
        >
            <h1 className="text-aqua font-bold text-3xl">Manuel Carreras</h1>
            <nav>
                <ul className="md:flex gap-6 text-aqua font-bold text-xl justify-center items-center hidden ">
                    <ButtonNav text={textButtons.sobremi} link="#sobremi" />
                    <ButtonNav text={textButtons.proyectos} link="#proyectos" />
                    <ButtonNav text={textButtons.skills} link="#skills" />
                    <ButtonNav text={textButtons.contacto} link="#contacto" />
                    <ButtonNav
                        text={idioma ? "English" : "Spanish"}
                        funcion={funcion}
                    />
                </ul>
                <button
                    onClick={abrirModal}
                    className={"md:hidden".concat(" ", classes)}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="#689d6a"
                        className="w-10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" />
                    </svg>
                </button>
            </nav>
            <Modal
                idioma={idioma}
                funcion={funcion}
                textButtons={textButtons}
                abrir={abierto}
                cerrar={cerrarModal}
            />
        </header>
    );
}
