export function Proyecto({ title, img, descriptionEs, descriptionEn, link }) {
    function openLink() {
        window.open(link, "_blank");
    }
    return (
        <article
            className=" p-5 hover:rounded-[8px] hover:cursor-pointer hover:text-naranja transition-all ease-in-out hover:scale-[1.02]"
            onClick={openLink}
        >
            <h1 className="text-center text-2xl text-aqua font-bold">
                {title}
            </h1>
            <img
                className="rounded-[8px] my-5 border-aqua border-[4px]"
                src={img}
            />
            <p>{descriptionEs}</p>
        </article>
    );
}
