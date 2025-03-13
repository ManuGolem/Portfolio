import { ButtonLinks } from "./ButtonLinks";

export function SobreMi({ textResumen }) {
    return (
        <section className="bg-sobremi h-full" id="sobremi">
            <div className="text-center mx-auto flex flex-col items-center">
                <h2 className="text-3xl font-bold my-10">
                    {textResumen.title}
                    <span className="text-aqua"> Manuel Carreras</span>
                </h2>
                <img
                    src="./img/yo.webp"
                    className="m-5 w-[20rem] rounded-[50%]"
                    alt="a photo of me"
                />
            </div>
            <p className="m-5 mx-[15rem] text-wrap text-2xl text-center">
                {textResumen.parrafo}
            </p>
            <div className="flex justify-center gap-5 my-30">
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
