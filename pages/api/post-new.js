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
  console.log('ddddd', doc.title);
  const sheet = doc.sheetsByIndex[0]
  const data = JSON.parse(req.body)

  try {
    await sheet.addRow({
      Ativo: false,
      Nome: data.Nome,
      Telefone: data.Telefone,
      Whatsapp: true,
      Categoria: data.Categoria,
      Atuacao: data.Atuacao,
      Instagram: data.Instagram,
      "Data Preenchimento": DateTime.now().setLocale('pt-br').setZone("America/Sao_Paulo").toFormat('ff'),
    })
  } catch (error) {
    console.log(error)
  }

  res.json({ status: true })
}
