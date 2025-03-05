export function ButtonNav({ text, link }) {
    return (
        <li className="hover:[scale:1.1] ">
            <a
                href={link}
                className="hover:cursor-pointer hover:text-naranja transition-all"
            >
                {text}
            </a>
        </li>
    );
}
