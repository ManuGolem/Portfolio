export function ButtonNav({ text }) {
    return (
        <li>
            <button className="hover:cursor-pointer hover:[scale:1.1] hover:text-naranja transition-all">
                {text}
            </button>
        </li>
    );
}
