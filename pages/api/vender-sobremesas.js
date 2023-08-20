import { GoogleSpreadsheet } from "google-spreadsheet"
import { fromBase64 } from "../../utils/base64"
import { DateTime } from "luxon"

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.SHEET_CLIENT_EMAIL,
    private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
  })
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]
  const {sobremesas, equipe} = JSON.parse(req.body)

  const rows = await sheet.getRows();
  const rowToUpdate = rows.find((row) => row.equipe === equipe); 

  try {
    if (rowToUpdate) {
      const estoque_sobremesas = parseInt(rowToUpdate.estoque_sobremesas) - sobremesas
      const sobremesas_vendidas = parseInt(rowToUpdate.sobremesas_vendidas) + sobremesas
      rowToUpdate.estoque_sobremesas = estoque_sobremesas;
      rowToUpdate.sobremesas_vendidas = sobremesas_vendidas;
      await rowToUpdate.save(); 
    }
  } catch (error) {
    console.log(error)
    return;
  }

  res.json({ status: true })
}
