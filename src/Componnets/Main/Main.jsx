import { Contacto } from "./Sections/Contacto";
import { Proyectos } from "./Sections/Proyectos";
import { Skills } from "./Sections/Skills";
import { SobreMi } from "./Sections/SobreMi";
export function Main({ textMain }) {
    return (
        <main className="flex flex-col">
            <SobreMi textResumen={textMain.resumen} />
            <Proyectos textProyectos={textMain.proyectos} />
            <Skills />
            <Contacto />
        </main>
    );
}
