export function Proyecto({ title, img, description, link }) {
    function openLink() {
        window.open(link, "_blank");
    }

    return (
        <article
            className=" md:p-5 md:group md:transition-all md:ease-in-out md:hover:scale-[1.02] md:hover:cursor-pointer"
            onClick={openLink}
        >
            <h1 className="text-center md:text-2xl text-xl text-aqua-suave font-bold group-hover:text-aqua">
                {title}
            </h1>
            <hr className="hidden group-hover:block h-[4px] bg-naranja text-naranja rounded-2xl w-32 mx-auto"></hr>
            <img
                className="md:rounded-2xl my-5 border-aqua-suave border-[4px] md:border-[6px] group-hover:border-aqua"
                src={img}
                alt={`screenshot of the proyect ${title}`}
            />
            <p className="md:px-8 px-4 md:text-xl text-[16px] group-hover:text-naranja">
                {description}
            </p>
        </article>
    );
}
