# Jantar-Nacoes-Controle-Estoque
 <!-- ![Preview](https://github.com/joirneto/Jantar-Nacoes-Controle-Estoque/blob/main/public/TelaInicial.png) -->


## Início

### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

## Colocando em produção:

Este projeto pode ser colocado em produção utilizando o Vercel. É necessário criar as variáveis de ambiente para configurar o acesso as planilhas do Google:

```
SHEET_CLIENT_EMAIL=client email do service credential
SHEET_PRIVATE_KEY=private key do service credential - lembrar de substituir \n por quebras de linha e de codificar em base 64
SHEET_DOC_ID=id da planilha
```

## Construído com:

* [NextJS](https://nextjs.org/) -The React Framework.
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for
rapidly building custom designs.
* [Google Sheets](https://drive.google.com) - Planilhas online do Google

## Author:

* **Joir Neto** - [LinkedIn](https://www.linkedin.com/in/joir-neto/)
