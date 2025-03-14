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
export function BotonesContacto() {
    return (
        <div className="flex justify-center gap-5 mt-30">
            <ButtonLinks
                img="./img/linkedin.png"
                link="https://www.linkedin.com/in/manuel-carreras-b05414265/"
            />
            <ButtonLinks
                img="./img/github-mark.png"
                link="https://github.com/ManuGolem"
            />
            <ButtonLinks
                img="./img/download-arrow-down.svg"
                link="../CVManuelCarreras-Es.pdf"
                dw={true}
            />
        </div>
    );
}
