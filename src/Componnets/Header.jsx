import { ButtonNav } from "./ButtonNav";

export function Header() {
    return (
        <header className="flex justify-between py-8 px-4 bg-fondo">
            <h1 className="text-aqua font-bold text-3xl">Manuel Carreras</h1>
            <ul className="flex gap-4 text-naranja font-bold text-xl">
                <ButtonNav text="Sobre mí" />
                <ButtonNav text="Proyectos" />
                <ButtonNav text="Contacto" />
                <ButtonNav text="Idioma" />
            </ul>
        </header>
    );
}
