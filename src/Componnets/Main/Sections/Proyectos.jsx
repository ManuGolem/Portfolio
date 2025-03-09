import { Proyecto } from "./Proyecto";

export function Proyectos() {
    return (
        <section id="proyectos" className="bg-proyecto">
            <h1 className="text-center my-5 text-3xl font-bold">
                Proyectos Personales
            </h1>
            <div className="grid grid-cols-2 justify-items-center gap-10 p-10">
                <Proyecto
                    title="Rest Countries Api"
                    img="./img/rest.png"
                    descriptionEs="Página que muestra información de todos los países, hecha con HTML, JS y CSS. Es mi solución al challenge de Frontend Mentor."
                    descriptionEn="Page that displays information about all countries, made with HTML, JS, and CSS. It is my solution to the Frontend Mentor challenge."
                    link="https://manugolem.github.io/rest-countries-api-with-color-theme-switcher/"
                />
                <Proyecto
                    title="Interactive Comments"
                    img="./img/interactive-comments.png"
                    descriptionEs="Aplicación de comentarios interactivos hecha en React y TailwindCSS. Se pueden responder, borrar, editar y crear comentarios. Es mi solución al challenge de Frontend Mentor."
                    descriptionEn="Interactive comment app built with React and TailwindCSS. Users can reply, delete, edit, and create comments. It's my solution to the Frontend Mentor challenge."
                    link="https://manugolem.github.io/interactive-comments/"
                />
                <Proyecto
                    title="Frontend Mentor Solutions"
                    img="./img/frontend.png"
                    descriptionEs="Página sencilla diseñada para mostrar mis soluciones a los desafíos de Frontend Mentor, hecho con CSS y HTML."
                    descriptionEn="A simple page designed to showcase my solutions to Frontend Mentor challenges, made with CSS and HTML."
                    link="https://manugolem.github.io/frontend-mentor-solutions/"
                />
                <Proyecto
                    title="To do web"
                    img="./img/todoReact.png"
                    descriptionEs="Página de lista de tareas (To-Do) desarrollada con React y Tailwind CSS."
                    descriptionEn="To-Do list page developed with React and Tailwind CSS."
                    link="https://manugolem.github.io/ToDoWebReact/"
                />
            </div>
        </section>
    );
}
