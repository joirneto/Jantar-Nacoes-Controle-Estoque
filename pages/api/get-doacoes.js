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
    const sheet = doc.sheetsByIndex[1]

    const rows = await sheet.getRows()
    const doacoes = rows
      .filter((i) => i.conferido.toLowerCase() === "true")
      .map((i) => ({
        doacoes: i.doacoes
      }))
      .reduce((acc, cur) => {
        const doacao = parseFloat((cur.doacoes).replace(',', '.'));
        console.log(doacao)
        return parseFloat(acc) + doacao
      },0)
    res.json(doacoes)
  } catch (error) {
    console.log(error)
    res.json({})
  }
}
