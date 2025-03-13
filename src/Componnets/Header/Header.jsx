import { useState } from "react";
import { ButtonNav } from "./ButtonNav";

export function Header({ textButtons, idioma, funcion }) {
    return (
        <header className="top-0 left-0 flex justify-between py-8 px-8 bg-fondo-header fixed w-screen backdrop-blur-[5px] z-10">
            <h1 className="text-aqua font-bold text-3xl">Manuel Carreras</h1>
            <nav>
                <ul className="flex gap-4 text-aqua font-bold text-xl">
                    <ButtonNav text={textButtons.sobremi} link="#sobremi" />
                    <ButtonNav text={textButtons.proyectos} link="#proyectos" />
                    <ButtonNav text={textButtons.skills} link="#skills" />
                    <ButtonNav text={textButtons.contacto} link="#contacto" />
                    <ButtonNav
                        text={idioma ? "English" : "Spanish"}
                        funcion={funcion}
                    />
                </ul>
            </nav>
        </header>
    );
}
