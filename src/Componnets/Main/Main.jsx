import { Proyectos } from "./Sections/Proyectos";
import { SobreMi } from "./Sections/SobreMi";

export function Main() {
    return (
        <main className="flex flex-col gap-5 ">
            <SobreMi />
            <Proyectos />
        </main>
    );
}
