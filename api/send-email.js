export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    try {
        const { name, email, message } = req.body;

        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                service_id: process.env.SERVICE_ID,
                template_id: process.env.TEMPLATE_ID,
                public_key: process.env.PUBLICK_KEY,
                template_params: {
                    from_name: name,
                    from_email: email,
                    message: message,
                },
            }),
        });

        if (response.ok) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(500).json({ error: "Error al enviar el email" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Error del servidor" });
    }
}
