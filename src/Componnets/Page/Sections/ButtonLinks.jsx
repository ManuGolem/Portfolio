import { useRef } from "react";
export function ButtonLinks({ img, link, dw, funcion }) {
    return (
        <a
            {...(!dw && { href: link })}
            {...(dw && { onClick: funcion })}
            className="hover:cursor-pointer flex items-center text-3xl font-bold hover:[scale:1.1] transition-all ease-in py-1 px-2 hover:rounded-[8px] hover:bg-naranja"
        >
            <img className="w-[30px]" src={img} alt="" />
            {dw && "CV"}
        </a>
    );
}
export function BotonesContacto({ texto }) {
    const dialogRef = useRef(null);
    function abrirModalDescargar() {
        dialogRef.current.showModal();
    }
    function cerrarModalDescargar() {
        dialogRef.current.close();
    }
    return (
        <div className="flex justify-center gap-5 md:mt-28">
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
                dw={true}
                funcion={abrirModalDescargar}
            />
            <dialog
                ref={dialogRef}
                className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-2xl bg-aqua-suave backdrop:bg-fondo-header"
            >
                <div className="w-80 h-auto p-5 ">
                    <h1 className="text-center text-2xl font-bold text-naranja">
                        {texto.title}
                    </h1>
                    <div className="flex flex-col my-5 gap-2 items-center">
                        <a
                            className="hover:text-naranja p-4 hover:cursor-pointer hover:scale-[1.1]"
                            href="./CVManuelCarreras-Es.pdf"
                            download="CV-Español.pdf"
                            onClick={cerrarModalDescargar}
                        >
                            {texto.spanish}
                        </a>
                        <a
                            className="hover:text-naranja p-4 hover:cursor-pointer hover:scale-[1.1]"
                            href="./CVManuelCarreras-En.pdf"
                            download="CV-English.pdf"
                            onClick={cerrarModalDescargar}
                        >
                            {texto.ingles}
                        </a>
                    </div>
                    <form method="dialog" className="text-center">
                        <button className="text-3xl hover:cursor-pointer hover:text-naranja hover:scale-[1.3]">
                            X
                        </button>
                    </form>
                </div>
            </dialog>
        </div>
    );
}
