import { GoogleSpreadsheet } from "google-spreadsheet"
import { fromBase64 } from "../../utils/base64"
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  const {equipe} = req.query;

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY,
    })
    await doc.loadInfo()
    console.log(doc.title)
    const sheet = doc.sheetsByIndex[0]

    const rows = await sheet.getRows()

    const result = rows
      .filter((i) => i.equipe === equipe)
      .map((i) => ({
        estoque_pratos: i.estoque_pratos,
        estoque_sobremesas: i.estoque_sobremesas
      }))
    res.json(result)
  } catch (error) {
    console.log(error)
    res.json({})
  }
}
