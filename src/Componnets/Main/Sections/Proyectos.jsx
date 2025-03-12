import { Proyecto } from "./Proyecto";

export function Proyectos() {
    return (
        <section id="proyectos" className="bg-proyecto">
            <h1 className="text-center mt-5 text-3xl font-bold text-aqua">
                Proyectos Personales
            </h1>
            <hr className="h-[4px] bg-naranja text-naranja rounded-2xl w-96 mx-auto"></hr>

            <div className="grid grid-cols-2 justify-items-center gap-10 p-10">
                <Proyecto
                    title="Rest Countries Api"
                    img="./img/rest.png"
                    description="Página que muestra información de todos los países, hecha con HTML, JS y CSS. Es mi solución al challenge de Frontend Mentor."
                    link="https://manugolem.github.io/rest-countries-api-with-color-theme-switcher/"
                />
                <Proyecto
                    title="Interactive Comments"
                    img="./img/interactive-comments.png"
                    description="Aplicación de comentarios interactivos hecha en React y TailwindCSS. Se pueden responder, borrar, editar y crear comentarios. Es mi solución al challenge de Frontend Mentor."
                    link="https://manugolem.github.io/interactive-comments/"
                />
                <Proyecto
                    title="Frontend Mentor Solutions"
                    img="./img/frontend.png"
                    description="Página sencilla diseñada para mostrar mis soluciones a los desafíos de Frontend Mentor, hecho con CSS y HTML."
                    link="https://manugolem.github.io/frontend-mentor-solutions/"
                />
                <Proyecto
                    title="To do web"
                    img="./img/todoReact.png"
                    description="Página de lista de tareas (To-Do) desarrollada con React y Tailwind CSS."
                    link="https://manugolem.github.io/ToDoWebReact/"
                />
            </div>
        </section>
    );
}
