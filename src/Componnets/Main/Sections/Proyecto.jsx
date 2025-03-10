export function Proyecto({ title, img, descriptionEs, descriptionEn, link }) {
    function openLink() {
        window.open(link, "_blank");
    }

    return (
        <article
            className=" p-5 group transition-all ease-in-out hover:scale-[1.02] hover:cursor-pointer"
            onClick={openLink}
        >
            <h1 className="text-center text-2xl text-aqua-suave font-bold group-hover:text-aqua">
                {title}
            </h1>
            <hr className="hidden group-hover:block h-[4px] bg-naranja text-naranja rounded-2xl w-32 mx-auto"></hr>
            <img
                className="rounded-2xl my-5 border-aqua-suave border-[6px] group-hover:border-aqua"
                src={img}
            />
            <p className="px-8 text-xl group-hover:text-naranja">
                {descriptionEs}
            </p>
        </article>
    );
}
