export function ButtonLinks({ img, link, dw }) {
    return (
        <a
            href={link}
            {...(dw && { download: "" })}
            className="flex items-center text-3xl font-bold hover:[scale:1.1] transition-all ease-in py-1 px-2 hover:rounded-[8px] hover:bg-naranja"
        >
            <img className="w-[30px]" src={img} alt="" />
            {dw && "CV"}
        </a>
    );
}
