import { BotonesContacto } from "./ButtonLinks";

export function SobreMi({ textResumen }) {
    return (
        <section className="bg-sobremi h-full" id="sobremi">
            <div className="text-center mx-auto flex flex-col items-center">
                <h2 className="md:text-3xl font-bold my-12 text-2xl">
                    {textResumen.title}
                    <span className="text-aqua"> Manuel Carreras</span>
                </h2>
                <img
                    src="./img/yo.webp"
                    className="md:my-7 w-[15rem] md:w-[20rem] rounded-[50%]"
                    alt="a photo of me"
                />
            </div>
            <p className="my-12  md:mx-[15rem] mx-[1rem] md:text-wrap md:text-[22px] text-[14px] text-center">
                {textResumen.parrafo}
            </p>
            <BotonesContacto texto={textResumen.modalCv} />
        </section>
    );
}
