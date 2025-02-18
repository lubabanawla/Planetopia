export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();

        if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
            return res.status(500).json({ error: "Invalid response from OpenRouter" });
        }

        res.status(response.status).json({ response: data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
