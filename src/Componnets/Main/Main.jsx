import { Proyectos } from "./Sections/Proyectos";
import { SobreMi } from "./Sections/SobreMi";

export function Main() {
    return (
        <main className="flex flex-col justify-center min-h-screen pt-[100px]">
            <SobreMi />
            <Proyectos />
        </main>
    );
}
