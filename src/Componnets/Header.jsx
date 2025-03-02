export function Header() {
    return (
        <header className="flex justify-between py-8 px-4 bg-fondo">
            <h1 className="text-aqua font-bold text-3xl">Manuel Carreras</h1>
            <ul className="flex gap-4 text-naranja font-bold text-xl">
                <li>
                    <button>Sobre mí</button>
                </li>
                <li>
                    <button>Proyectos</button>
                </li>
                <li>
                    <button>Contacto</button>
                </li>
                <li>
                    <button>Idioma</button>
                </li>
            </ul>
        </header>
    );
}
