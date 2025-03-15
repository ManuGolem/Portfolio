export function ButtonNav({ text, link, funcion, cerrar }) {
    function ejecutarFunciones() {
        funcion && funcion();
        cerrar && cerrar();
    }
    return (
        <li className="hover:[scale:1.1] ">
            <a
                href={link}
                className="hover:cursor-pointer hover:text-naranja transition-all"
                onClick={ejecutarFunciones}
            >
                {text}
            </a>
        </li>
    );
}
