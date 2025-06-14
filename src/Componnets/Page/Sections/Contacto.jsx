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
        <section id="contacto" className="bg-contacto ">
            <h1 className="text-center mt-5 md:text-3xl text-2xl font-bold text-aqua">{text.title}</h1>
            <hr className="h-[4px] bg-naranja text-naranja rounded-2xl w-[10rem] mx-auto"></hr>
            <div className="flex flex-col my-10 justify-center mx-20">
                <form
                    onSubmit={handleSubmit}
                    className="gap-y-4 md:px-52 flex flex-col justify-center md:grid md:grid-cols-2 md:grid-row-3 md:gap-x-[40rem] md:gap-y-4"
                >
                    <label className="flex flex-col has-focus:text-naranja md:text-[1.25rem] text-[1rem] md:mr-[-5rem]">
                        {text.form.name}
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            className="md:text-[1.25rem] text-[1rem] text-black border-aqua border-[3px] outline-none rounded-[8px] px-2 focus:border-red "
                        />
                    </label>
                    <label className="flex flex-col row-start-2 row-end-3  has-focus:text-naranja md:text-[1.25rem] text-[1rem] md:mr-[-5rem]">
                        {text.form.email}

                        <input
                            type="email"
                            name="email"
                            placeholder="email@gmail.com"
                            required
                            className="md:text-[1.25rem] text-[1rem] text-black border-aqua border-[3px] outline-none rounded-[8px] px-2 focus:border-red "
                        />
                    </label>
                    <label className="flex flex-col col-start-2 col-end-3 row-span-3 md:ml-[-30rem] has-focus:text-naranja md:text-[1.25rem] text-[1rem] ">
                        {text.form.mensaje}
                        <textarea
                            name="message"
                            required
                            className="md:text-[1.25rem] text-[1rem] text-black resize-none border-aqua border-[3px] outline-none rounded-[8px] px-2 h-[150px] md:h-full mb-4 focus:border-red focus:border-[3px]"
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        value="Send"
                        className="hover:bg-naranja md:text-[1.25rem] hover:cursor-pointer hover:rounded-2xl mx-auto px-4 py-2 col-span-2 hover:font-bold hover:scale-[1.1] bg-naranja rounded-2xl md:bg-transparent md:rounded-none"
                    >
                        {text.form.send}
                    </button>
                </form>
                {enviado === true ? (
                    <span className="text-center text-naranja">{text.form.ok}</span>
                ) : (
                    enviado === false && <span className="text-center text-red-400">{text.form.nok}</span>
                )}
            </div>
        </section>
    );
}
