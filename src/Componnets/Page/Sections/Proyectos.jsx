import { Proyecto } from "./Proyecto";

export function Proyectos({ textProyectos }) {
    return (
        <section id="proyectos" className="bg-proyecto">
            <h1 className="text-center mt-5 text-3xl font-bold text-aqua">
                {textProyectos.title}
            </h1>
            <hr className="h-[4px] bg-naranja text-naranja rounded-2xl w-96 mx-auto"></hr>
            <div className="grid grid-cols-2 justify-items-center gap-10 p-10">
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
