import { ButtonLinks } from "./ButtonLinks";

export function SobreMi() {
    return (
        <section className="bg-sobremi h-screen">
            <div className="text-center mx-auto flex flex-col items-center">
                <h2 className="text-3xl font-bold my-10">
                    Hola, soy
                    <span className="text-aqua"> Manuel Carreras</span>
                </h2>
                <img
                    src="./img/yo.webp"
                    className="mt-10 mb-20 w-[20rem] rounded-[50%]"
                />
            </div>
            <p className="mx-[15rem] text-wrap text-2xl text-center">
                Hola, me llamo Manuel Carreras. Soy estudiante de Ingeniería en
                Computación en la Universidad de la República (UDELAR) y también
                dedico tiempo a estudiar desarrollo web. Me encuentro en la
                búsqueda de mi primera experiencia laboral.
            </p>
            <div className="flex justify-center gap-5 my-20">
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
        </section>
    );
}
