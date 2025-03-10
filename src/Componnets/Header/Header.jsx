import { ButtonNav } from "./ButtonNav";

export function Header() {
    return (
        <header className="top-0 left-0 flex justify-between py-8 px-8 bg-fondo-header fixed w-screen backdrop-blur-[5px] z-10">
            <h1 className="text-aqua font-bold text-3xl">Manuel Carreras</h1>
            <nav>
                <ul className="flex gap-4 text-aqua font-bold text-xl">
                    <ButtonNav text="Sobre mí" link="#sobremi" />
                    <ButtonNav text="Proyectos" link="#proyectos" />
                    <ButtonNav text="Habilidades" link="#skills" />
                    <ButtonNav text="Contacto" link="#contacto" />
                    <ButtonNav text="Idioma" />
                </ul>
            </nav>
        </header>
    );
}
