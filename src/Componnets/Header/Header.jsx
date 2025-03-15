import { ButtonNav } from "./ButtonNav";
import { Modal } from "./Modal";

export function Header({ textButtons, idioma, funcion }) {
    return (
        <header className="top-0 left-0 flex justify-between py-8 px-8 bg-fondo-header fixed w-screen backdrop-blur-[5px] z-10 max-h-[100px]">
            <h1 className="text-aqua font-bold text-3xl">Manuel Carreras</h1>
            <nav>
                <ul className="flex gap-6 text-aqua font-bold text-xl">
                    <ButtonNav text={textButtons.sobremi} link="#sobremi" />
                    <ButtonNav text={textButtons.proyectos} link="#proyectos" />
                    <ButtonNav text={textButtons.skills} link="#skills" />
                    <ButtonNav text={textButtons.contacto} link="#contacto" />
                    <ButtonNav
                        text={idioma ? "English" : "Spanish"}
                        funcion={funcion}
                    />
                </ul>
            </nav>
            <Modal
                idioma={idioma}
                funcion={funcion}
                textButtons={textButtons}
            />
        </header>
    );
}
