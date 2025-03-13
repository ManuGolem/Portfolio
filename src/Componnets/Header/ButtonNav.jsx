export function ButtonNav({ text, link, funcion }) {
    return (
        <li className="hover:[scale:1.1] ">
            <a
                href={link}
                className="hover:cursor-pointer hover:text-naranja transition-all"
                onClick={funcion}
            >
                {text}
            </a>
        </li>
    );
}
