import React from "react";
const currentYear = new Date().getFullYear();

const Header = () => (
  <header className="w-full container mx-auto">
    <div className="flex flex-col items-center py-12">
      <span className="font-bold text-red-900 uppercase text-center hover:text-gray-700 text-5xl">
        Jantar das Nações {currentYear} - IBF 
      </span>
      
    <div className="text-lg text-gray-600 p-4">
      Jantar com o objetivos de levantar recursos para Missões e Construção do prédio da igreja.
    </div>
    </div>
  </header>
)

export default Header