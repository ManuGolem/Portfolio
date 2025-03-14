import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
export function Contacto({ text }) {
    const key = import.meta.env.VITE_PUBLIC_KEY_EMAIL;
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const formID = import.meta.env.VITE_TEMPLATE_ID;
    useEffect(() => {
        emailjs.init({
            publicKey: key,
        });
    }, []);
    const [enviado, setEnviado] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        emailjs.sendForm(serviceID, formID, e.target).then(
            () => {
                setEnviado(true);
                setTimeout(() => {
                    setEnviado();
                    e.target.reset();
                }, 2000);
            },
            (error) => {
                setEnviado(false);
                setTimeout(() => {
                    setEnviado(true);
                }, 2000);
                setError(error);
            },
        );
    }

    return (
        <section id="contacto" className="bg-contacto">
            <h1 className="text-center mt-5 text-3xl font-bold text-aqua">
                {text.title}
            </h1>
            <hr className="h-[4px] bg-naranja text-naranja rounded-2xl w-[10rem] mx-auto"></hr>
            <div className="flex flex-col my-10 justify-center mx-20">
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 grid-row-3 gap-x-[40rem] gap-y-4"
                >
                    <label className="flex flex-col mr-[-3rem]">
                        {text.form.name}
                        <hr className="h-[3px] bg-naranja text-naranja rounded-2xl w-[4rem] mb-2"></hr>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Manu Golem"
                            className="border-aqua-suave border-2 outline-none rounded-[8px] px-2 focus:border-aqua focus:border-[3px]"
                        />
                    </label>
                    <label className="flex flex-col row-start-2 row-end-3 mr-[-3rem]">
                        {text.form.email}
                        <hr className="h-[3px] bg-naranja text-naranja rounded-2xl w-[3rem] mb-2"></hr>

                        <input
                            type="email"
                            name="email"
                            placeholder="email@gmail.com"
                            required
                            className="border-aqua-suave border-2 outline-none rounded-[8px] px-2 focus:border-aqua focus:border-[3px]"
                        />
                    </label>
                    <label className="flex flex-col col-start-2 col-end-3 row-span-3 ml-[-35rem]">
                        {text.form.mensaje}
                        <hr className="h-[3px] bg-naranja text-naranja rounded-2xl w-[6rem] mb-2"></hr>
                        <textarea
                            name="message"
                            required
                            className="resize-none border-aqua-suave border-2 outline-none rounded-[8px] px-2 h-full mb-4 focus:border-aqua focus:border-[3px]"
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        value="Send"
                        className="hover:bg-naranja hover:cursor-pointer hover:rounded-2xl mx-auto px-4 py-2 col-span-2 hover:font-bold hover:scale-[1.1]"
                    >
                        {text.form.send}
                    </button>
                </form>
                {enviado === true ? (
                    <span className="text-center text-naranja">
                        {text.form.ok}
                    </span>
                ) : (
                    enviado === false && (
                        <span className="text-center text-red-400">
                            {text.form.nok}
                        </span>
                    )
                )}
            </div>
        </section>
    );
}
