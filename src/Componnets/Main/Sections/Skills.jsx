export function Skills() {
    const classImagen =
        "w-20 p-4 hover:scale-[1.2] hover:bg-naranja hover:rounded-2xl hover:cursor-pointer transition-all ease-in-out";
    return (
        <section id="skills" className="bg-skills">
            <h1 className="text-center mt-5 text-3xl font-bold text-aqua">
                Herramientas y tecnologias
            </h1>
            <hr className="h-[4px] bg-naranja text-naranja rounded-2xl w-[26rem] mx-auto"></hr>
            <div className="flex gap-4 justify-center my-10 ">
                <img
                    src="./img/html5.svg"
                    className={classImagen}
                    alt="html-icon"
                    title="HTML"
                />
                <img
                    src="./img/javascript.svg"
                    className={classImagen}
                    alt="js-icon"
                    title="JavaScript"
                />
                <img
                    src="./img/css_old.svg"
                    className={classImagen}
                    alt="css-icon"
                    title="CSS"
                />
                <img
                    src="./img/react.svg"
                    className={classImagen}
                    alt="react-icon"
                    title="ReactJs"
                />
                <img
                    src="./img/tailwindcss.svg"
                    className={classImagen}
                    alt="tailwindcss-icon"
                    title="Tailwindcss"
                />
                <img
                    src="./img/vitejs.svg"
                    className={classImagen}
                    alt="vite-icon"
                    title="ViteJs"
                />
                <img
                    src="./img/c-plusplus.svg"
                    className={classImagen}
                    alt="cpp-icon"
                    title="C++"
                />
                <img
                    src="./img/python.svg"
                    className={classImagen}
                    alt="py-icon"
                    title="Python"
                />
                <img
                    src="./img/linux.svg"
                    className={classImagen}
                    alt="linux-icon"
                    title="Linux"
                />
            </div>
        </section>
    );
}
