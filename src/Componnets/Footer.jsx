export function Footer() {
    function rederigir() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <footer className="text-center bg-fondo py-5">
            <h1
                className="text-naranja hover:scale-[1.1] hover:cursor-pointer"
                onClick={rederigir}
            >
                <span className="text-aqua">&lt;/ </span>
                Manuel Carreras
                <span className="text-aqua"> &gt;</span>
            </h1>
        </footer>
    );
}
