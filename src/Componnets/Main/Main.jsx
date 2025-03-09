import { Contacto } from "./Sections/Contacto";
import { Proyectos } from "./Sections/Proyectos";
import { Skills } from "./Sections/Skills";
import { SobreMi } from "./Sections/SobreMi";

export function Main() {
    return (
        <main className="flex flex-col">
            <SobreMi />
            <Proyectos />
            <Skills />
            <Contacto />
        </main>
    );
}
