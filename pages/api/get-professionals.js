import { GoogleSpreadsheet } from "google-spreadsheet"
import { fromBase64 } from "../../utils/base64"

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQDHGudQo4uP1mF5\nUksFlJvJ7SRK921n7sOqfP41IzFmRZcBVaBn/9sbuf3/OQOxiFFWs7TV85gULC1n\nWnnKiOdWOptlPWcwj0LKlyE74hEI/5cuhzGK+ljPMo9TG4grn9wHn9PygMR+TssB\ndw7uQwY0GcRf+5+5yXydFUt8EukntiUaEaJ1fzsG0IXE3sn3aDHIuzV+bO0gZNSe\ncQUA0TO5WZGglL/JsXruWREMd5pnz66TdaLm6mJjHPUbwSjaKp3yr/oJitxyeeb0\nSSpw8RXGnoCVpcp5H6V7Q4DuEohW7RJGHvwtRZ9bp4aGfmI4oCuDlpxuEiIpYD1q\nrDvfiVYrAgMBAAECggEAJi1/9kPt0l5aoW9IqGDHAJCiuWc5SMkNJsdB3UGKyuAE\nJQLct6RlSKtAy2wMy8FmS1g5EB9d5VxVNnCwUsguh6fEPUTpYPPPbFZPTpK6Dn4n\n6ImO0+XOGqjIt7hbQ3YrNCEO/Hx5cPi9z2GbcM9URLA+KeNvTKoYZWx8ZWWg5Haf\nkLF2zOdpnfgfxPLrgnU/U2kE7rXBaU5izUold8ZCSbQNzz4XACyf1UVSSfyG/79W\ndLDdwGVYTMP/3rgY8pA/MY0Xd6h3ttVHK0rKOoJfUPO1cj0aVSQE9yHSfdrG6we6\nI0+z+zaivaoPO/BlaaZNNFYBt8hVB9wQsiOPyMksPQKBgQDiOxEYCgh8C6eifaWP\nyvB0g2pSL4ON2SKqQQ9rIgZGLA9HTyK+dHdTvQEzhnkvUnex/Wd8iPS+hoGi6yZ5\nMfgfW+mpMGKHF8MH+P1XjMrlycrCXFKtYEoH0YfWEcIOOEKKQmuHJpyemID1cGjQ\n+YoK6mRYS53O1PJhtbyneSbWfwKBgQDhThFOgnBO435ADy1nAQKD5qwtJpUH/BTD\n3x52DGPTbRNg2nJQ5iswoxr7x3jSTQCWmFSQyHXdgt0WjCesvZf7DbLKC026ZtNP\nTJRthq6eqPeB7MwzfZsOM/V4KYcMC6/gHFqZr7to4CS+3IBOuNKo1LKTYm4yjEam\n46HvT7jiVQKBgQDFLBPe7sesTYAiV/4XUBm4gt0EmlK/K5NR7fhhODtdp4L9dJRk\niB+ERUOpw7cVLnwSDjjGypr8/0A3XVmf4ZROyI3jHr+Q3H3oEfPD/XrNQc3NDigk\n4bpEDDOmuL14JUKhO/h5x4ZTl7k1sW45THQqxVUFu4njvacuz/WHxUi7QwKBgFP6\nsWC+JfaBvVFLVvUJ31Ii7RJ3Sx2KzIKl68i8nYj1Iz/6rJmS8Y5TfX9TvqlEom9/\noCXHUoeae6Yn37H3iWq+lGHTDMnqAeGQ/dJFXVkuSfNXvFWFAAKvQ1Pixr+qq4ex\nieO3KPfSdF/f+MNfCMZ9YYKmMcUNnFggiP+Wi6dxAn878HpiTOiwnDcQSs5GifnJ\nIqASUxNJuB51zMmElOG4XRjdPlnz0NXXE3+gTThCLR3FnqPNV9oRAWYdhSaBl9Tm\nT++AzLO0r6isZVQkCV/rRxiDJdCaNZU6F19sgdNmMcicyZ6eHSSWM6gwPSDV75hO\nImh+IK+IcivcQQL6Ngh0\n-----END PRIVATE KEY-----\n",
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]

    const rows = await sheet.getRows()
    const professionals = rows
      .filter((i) => i.Ativo.toLowerCase() === "true")
      .map((i) => ({
        nome: i.Nome,
        tel: i.Telefone,
        isWhats: i.Whatsapp === "TRUE" ? true : false,
        atuacao: i.Atuacao,
        category: i.Categoria,
        instagram: i.Instagram,
      }))

    res.json(professionals)
  } catch (error) {
    console.log(error)
    res.json({})
  }
}
