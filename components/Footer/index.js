import React from "react";

const Footer = () =>(
  <footer className="w-full border-t bg-white pb-12">
    <div className="w-full container mx-auto flex flex-col items-center">
      <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
      </div>
      <div><img  src='/logo_ibf.png' height="150" width="150" /> </div>
      <div className="uppercase pb-6"> &copy; jantarnacoesibf.vercel.app </div>
      <div className="px-2 items-center justify-between">
      Projeto desenvolvido por:
        Joir Neto / {' '}
        <a className='hover:underline' href="https://linkedin.com/in/joir-neto">Linkedin</a> / {' '}
        <a className='hover:underline' href="https://github.com/joirneto">Github</a>
        </div>
    </div>
  </footer>
)

export default Footer