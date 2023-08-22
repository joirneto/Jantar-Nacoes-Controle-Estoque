import { GoogleSpreadsheet } from "google-spreadsheet"
import { fromBase64 } from "../../utils/base64"
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    })
    await doc.loadInfo()
    console.log(doc.title)
    const sheet = doc.sheetsByIndex[0]

    const rows = await sheet.getRows()
    const equipes = rows
      .filter((i) => i.Ativo.toLowerCase() === "true")
      .map((i) => ({
        equipe: i.equipe,
        pratos_vendidos: i.pratos_vendidos,
        sobremesas_vendidas: i.sobremesas_vendidas
      }))

    res.json(equipes)
  } catch (error) {
    console.log(error)
    res.json({})
  }
}
