import React, { useEffect, useState } from "react"
import Loading from "../components/Loading";

const Cadastro = () => {
  const [dados, setDados] = useState({});
  const [pratos, setPratos] = useState(0);
  const [sobremesas, setSobremesas] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [sucess, setSucess] = useState(0);
  const equipe = 'italia';
  const urlEquipe = `url('/equipes/bandeiras/${equipe}.jpg')`;

  useEffect(async () => {
    try {
      const response = await fetch(`/api/get-one-equipe/?equipe=${equipe}`)
      const allData = await response.json()
      setDados(allData[0])
    } catch (error) {
      console.log(error)
    }
    setPratos(0);
    setSobremesas(0);
    setIsLoading(false);
  }, [sucess]);

const venderPratos = async () => {
  setIsLoading(true);
  try {
    const response = await fetch("/api/vender-pratos", {
      method: "POST",
      body: JSON.stringify({pratos, equipe}),
    })
    await response.json()
    setSucess(old => old + 1);
  } catch (error) { }
}

const venderSobremesas = async () => {
  setIsLoading(true);
  try {
    const response = await fetch("/api/vender-sobremesas", {
      method: "POST",
      body: JSON.stringify({sobremesas, equipe}),
    })
    await response.json()
    setSucess(old => old + 1);
  } catch (error) { }
}

  return (
    <div>
      {isLoading ? <Loading/> : <><section className="text-gray-700 body-font min-h-full flex items-center mt-2">
      <div className="w-1/2 h-96 bg-cover" style={{ backgroundImage: urlEquipe }}></div>
      <div className="w-1/2 p-8">
        <h2 className="text-9xl font-semibold mb-4">{equipe.toUpperCase()}</h2>
        <div>
          <span className="text-red-900 text-6xl font-bold hover:text-gray-700 pb-4">
            ESTOQUE PRATOS: {dados.estoque_pratos}
          </span>
        </div>
        <div>
          <span className="text-red-900 text-6xl font-bold hover:text-gray-700 pb-4">
            ESTOQUE SOBREMESAS: {dados.estoque_sobremesas}
          </span>
        </div>
      </div>
    </section>
    <section className="text-gray-700 body-font min-h-full flex items-center mt-2">
       <div className="w-1/2 p-8">
          <h2 className="text-3xl font-semibold mb-4">Insira a quantidade e CLIQUE PARA VENDER</h2>
          <div className="flex">
          <div className="flex items-center mx-32">
          <input
            type="number"
            value={pratos}
            className="h-32 w-48 mx-8 text-6xl text-center border-l border-r border-blue-500"
            onChange={(e) => {
              const newValue = parseInt(e.target.value);
              if (!isNaN(newValue) && newValue >= 0) {
                setPratos(newValue);
              }
            }}
          />
          <button disabled={!pratos || pratos > dados.estoque_pratos} onClick={() => venderPratos()} className={pratos && pratos <= dados.estoque_pratos ? "h-36 w-96 bg-red-500 text-6xl text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" : 
        "h-36 w-96 bg-gray-300 text-6xl  text-gray-600  cursor-not-allowed font-semibold py-2 px-4 rounded-md py-3 px-4"}>
            VENDER PRATOS
          </button>
          </div>
          <div className="flex items-center">
          <button disabled={!sobremesas || sobremesas > dados.estoque_sobremesas} onClick={() => venderSobremesas()} className={sobremesas && sobremesas <= dados.estoque_sobremesas ? "h-36 w-96 bg-red-500 text-5xl text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" : 
        "h-36 w-96 bg-gray-300 text-5xl text-gray-600  cursor-not-allowed font-semibold py-2 px-4 rounded-md py-3 px-4"}>
            VENDER SOBREMESAS
          </button>
          <input
            type="number"
            value={sobremesas}
            className="h-32 w-48 mx-8 text-6xl text-center border-l border-r border-blue-500"
            onChange={(e) => {
              const newValue = parseInt(e.target.value);
              if (!isNaN(newValue) && newValue >= 0) {
                setSobremesas(newValue);
              }
            }}
          />
          </div>
          </div>
        </div>
      </section>
      </>}
    </div>
  )
}

export default Cadastro
  