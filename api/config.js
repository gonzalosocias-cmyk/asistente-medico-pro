export default function handler(req, res) {
  const configs = {
    "drlopez": {
      ciudad: "Trinidad, Flores",
      apikey: process.env.APIKEY_DRLOPEZ,
      openai_apikey: process.env.OPENAI_DRLOPEZ,
      tg_token: "",
      tg_chatid: "",
      email: ""
    },
    "drgarcia": {
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

  res.json(config)
}
