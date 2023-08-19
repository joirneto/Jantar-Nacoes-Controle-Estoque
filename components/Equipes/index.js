import React from "react"
import formatarMoeda from "../../utils/formatarMoeda";

const Equipes = ({ data: { equipe, valor } }) => {
  const urlBandeira = `url('/equipes/bandeiras/${equipe}.jpg')`;
  return (
    <article className="flex flex-col shadow my-4 w-96">
      <div className="h-64 flex items-center justify-center bg-cover mx-1" style={{ backgroundImage: urlBandeira  }}/>
      <div className="bg-white flex flex-col justify-start p-6">
        <span className="text-red-900 text-2xl font-bold hover:text-gray-700 pb-4">
          Valor arrecadado: {formatarMoeda(valor)}
        </span>
      </div>
    </article>
  )
}

export default Equipes
