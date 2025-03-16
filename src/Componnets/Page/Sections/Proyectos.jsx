import { Proyecto } from "./Proyecto";

export function Proyectos({ textProyectos }) {
    return (
        <section id="proyectos" className="bg-proyecto">
            <h1 className="text-center mt-5 md:text-3xl text-2xl font-bold text-aqua">
                {textProyectos.title}
            </h1>
            <hr className="h-[4px] bg-naranja text-naranja rounded-2xl md:w-96 w-80 mx-auto"></hr>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-10 md:p-10 py-10">
                {textProyectos.proyectos.map((p) => (
                    <Proyecto
                        key={p.id}
                        title={p.title}
                        img={p.img}
                        link={p.link}
                        description={p.parrafo}
                    />
                ))}
            </div>
        </section>
    );
}
