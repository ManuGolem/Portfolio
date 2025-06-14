export function Footer() {
    function rederigir() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <footer className="text-center bg-fondo md:py-5 py-2">
            <h1 className="text-naranja hover:scale-[1.1] hover:cursor-pointer md:text-xl font-bold" onClick={rederigir}>
                <span className="text-aqua ">&lt;/ </span>
                Manuel Carreras
                <span className="text-aqua"> &gt;</span>
            </h1>
        </footer>
    );
}
