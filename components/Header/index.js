import React from "react";
import TextLoop from "react-text-loop"

const persons = ["Eletricista", "Encanador", "Marceneiro", "Pintor"]

const Header = () => (
  <header className="w-full container mx-auto">
    <div className="flex flex-col items-center py-12">
      <span className="font-bold text-red-900 uppercase text-center hover:text-gray-700 text-5xl">
        Tá Precisando de quem?
      </span>
      
    <div className="text-lg text-gray-600 p-4">
      Ache seu{" "}
      <span className="font-bold bg-pink-900 text-white px-4 py-2 rounded-sm" >
        <TextLoop
          children={persons}
          springConfig={{ stiffness: 180, damping: 8 }}
        />
      </span>{" "}
      aqui!
    </div>
    </div>
  </header>
)

export default Header