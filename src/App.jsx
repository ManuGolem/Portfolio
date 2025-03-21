import { Header } from "./Componnets/Header/Header";
import { Page } from "./Componnets/Page/Page";
import { Footer } from "./Componnets/Footer";
import { useState } from "react";
import data from "./text.json";
export function App() {
    const [es, setEs] = useState(true);
    function handleIdioma() {
        setEs((prev) => !prev);
    }

    return (
        <>
            <Header
                textButtons={es ? data.es.buttonNavs : data.en.buttonNavs}
                idioma={es}
                funcion={handleIdioma}
            />
            <Page textMain={es ? data.es.main : data.en.main} />
            <Footer />
        </>
    );
}
