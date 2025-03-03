export function ButtonNav({ text }) {
    return (
        <li>
            <button className="hover:cursor-pointer hover:[scale:1.1] transition-all">
                {text}
            </button>
        </li>
    );
}
