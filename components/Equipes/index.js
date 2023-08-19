import React from "react"
import formatarMoeda from "../../utils/formatarMoeda";
import Link from "next/link";

const Equipes = ({ data: { equipe, pratos_vendidos, sobremesas_vendidas } }) => {
  const urlBandeira = `url('/equipes/bandeiras/${equipe}.jpg')`;
  const details = `/${equipe}`;
  const valor = equipe !== 'bebidas' ?
                        (parseInt(pratos_vendidos)*15) + (parseInt(sobremesas_vendidas)*5):
                        (parseInt(pratos_vendidos)*2);

  return (
    <article className="flex flex-col shadow my-4 w-96">
      <Link href = {details}>
        <a className="h-64 flex items-center justify-center bg-cover mx-1" style={{ backgroundImage: urlBandeira  }}/>
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <span className="text-red-900 text-2xl font-bold hover:text-gray-700 pb-4">
          Valor arrecadado: {formatarMoeda(valor)}
        </span>
      </div>
    </article>
  )
}

export default Equipes
