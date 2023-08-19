import { GoogleSpreadsheet } from "google-spreadsheet"
import { fromBase64 } from "../../utils/base64"
import { DateTime } from "luxon"

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.SHEET_CLIENT_EMAIL,
    private_key: process.env.SHEET_PRIVATE_KEY,
  })
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]
  const {pratos, equipe} = JSON.parse(req.body)

  const rows = await sheet.getRows();
  const rowToUpdate = rows.find((row) => row.equipe === equipe); 

  try {
    if (rowToUpdate) {
      const estoque_pratos = parseInt(rowToUpdate.estoque_pratos) - pratos
      const pratos_vendidos = parseInt(rowToUpdate.pratos_vendidos) + pratos
      rowToUpdate.estoque_pratos = estoque_pratos;
      rowToUpdate.pratos_vendidos = pratos_vendidos;
      await rowToUpdate.save(); 
    }
  } catch (error) {
    console.log(error)
    return;
  }

  res.json({ status: true })
}
