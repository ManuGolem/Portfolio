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
                user_id: process.env.PUBLIC_KEY,
                template_params: {
                    name: name,
                    email: email,
                    message: message,
                },
            }),
        });
        const text = await response.text(); //Para el error
        if (response.ok) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(500).json({ error: text });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Error del servidor" });
    }
}
