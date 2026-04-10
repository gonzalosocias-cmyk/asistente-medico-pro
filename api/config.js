export default function handler(req, res) {
  const configs = {
    "dr-lopez-2024": {
      ciudad: "Trinidad, Flores",
      apikey: "sk-ant-TU-KEY-AQUI",
      openai_apikey: "sk-TU-KEY-OPENAI-AQUI",
      tg_token: "TU-TOKEN-TELEGRAM",
      tg_chatid: "TU-CHAT-ID",
      email: "doctor@email.com"
    },
    "dr-garcia-2024": {
      ciudad: "Tacuarembó",
      apikey: "sk-ant-OTRA-KEY",
      openai_apikey: "sk-OTRA-KEY-OPENAI",
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
