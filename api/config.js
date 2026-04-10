export default function handler(req, res) {
  const configs = {
    "drlopez": {
      vence: "2025-05-10",
      ciudad: "Trinidad, Flores",
      apikey: process.env.APIKEY_DRLOPEZ,
      openai_apikey: process.env.OPENAI_DRLOPEZ,
      tg_token: "",
      tg_chatid: "",
      email: ""
    },
    "drgarcia": {
      vence: "2025-05-10",
      ciudad: "Tacuarembó",
      apikey: process.env.APIKEY_DRGARCIA,
      openai_apikey: process.env.OPENAI_DRGARCIA,
      tg_token: "",
      tg_chatid: "",
      email: ""
    }
  }

  const token = req.query.token
  const config = configs[token]

  if (!config) {
    return res.status(403).json({ error: "Token inválido" })
  }

  const hoy = new Date()
  const vence = new Date(config.vence)
  if (hoy > vence) {
    return res.status(403).json({ error: "Suscripción vencida" })
  }

  res.json(config)
}
