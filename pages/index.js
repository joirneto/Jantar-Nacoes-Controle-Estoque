import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle"
import Header from "../components/Header";
import NavSections from "../components/NavSections";
import Equipes from "../components/Equipes";
import HowWorks from "../components/HowWorks";
import formatarMoeda from "../utils/formatarMoeda";
import Loading from "../components/Loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [dados, setDados] = useState({});
 
  useEffect( async () => {
    try {
      const response = await fetch("/api/get-equipes")
      const allData = await response.json()
      setDados(allData)
      const somaValores = allData?.reduce((acc, cur) => {
      const valor = cur.equipe !== 'bebidas' ?
        (parseInt(cur.pratos_vendidos)*15) + (parseInt(cur.sobremesas_vendidas)*5):
        (parseInt(cur.pratos_vendidos)*2);
        return acc + parseInt(valor)
    }, 0)
  
      setTotal(somaValores)
      setIsLoading(false)
    } catch (error) {
      
    }
  },[]);

  return (
    <div>
      {isLoading ? <Loading/> : <>
      <PageTitle title="Home" />
      <Header />
      {isLoading && (
        <p className="container text-center text-4xl font-bold">Aguarde...</p>
      )}
      <div className="container mx-auto flex flex-wrap justify-center items-center">
      {!isLoading && (
        <><span className="text-green-600 text-8xl font-bold hover:text-gray-700 pb-4">
          OBJETIVO: {formatarMoeda(20000)}
        </span><span className="text-indigo-900 text-8xl font-bold hover:text-gray-700 pb-4">
            VEDINDO: {formatarMoeda(total)}
        </span><span className="text-cyan-600 text-8xl font-bold hover:text-gray-700 pb-4">
            FALTA: {formatarMoeda(20000 - total)}
        </span></>
        )}
        {!isLoading && (
          <section className="grid gap-4 grid-cols-4 grid-rows-3">
            {dados?.map((item, index) => {
              return <Equipes key={index} data={item} />
            })}
          </section>
        )}
      </div>
      <HowWorks />
    </>}
    </div>
  )
}

export default Index