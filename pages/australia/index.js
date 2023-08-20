import React, { useEffect, useState } from "react"
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import PageTitle from "../../components/PageTitle";

const Cadastro = () => {
  const [dados, setDados] = useState({});
  const [pratos, setPratos] = useState(0);
  const [sobremesas, setSobremesas] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [sucess, setSucess] = useState(0);
  const equipe = 'australia';
  const urlBandeira = `/equipes/bandeiras/${equipe}.jpg`;

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
      {isLoading ? <Loading/> :
        <><PageTitle title="Home" /><Header />
        <section className="text-gray-700 body-font min-h-full flex items-center mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:order-1">
              <img src={urlBandeira} alt="Imagem" className="w-full h-auto mx-2" />
            </div>
            <div className="p-8 w-full">
              <h2 className="text-5xl md:text-9xl font-semibold mb-4">{equipe.toUpperCase()}</h2>
              <div>
                <span className="text-red-900 text-2xl md:text-5xl font-bold hover:text-gray-700 pb-4">
                  ESTOQUE PRATOS: {dados.estoque_pratos}
                </span>
              </div>
              <div>
                <span className="text-red-900 text-2xl md:text-5xl font-bold hover:text-gray-700 pb-4">
                  ESTOQUE SOBREMESAS: {dados.estoque_sobremesas}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold m-4">Insira a quantidade e CLIQUE PARA VENDER</h2>
              <div className="flex items-center mx-2 md:mx-32 my-4">
                <input
                  type="number"
                  value={pratos}
                  className="h-12 w-24 md:h-32 md:w-48 mx-4 md:mx-8 text-4xl md:text-6xl text-center border-l border-r border-blue-500"
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value);
                    if (!isNaN(newValue) && newValue >= 0) {
                      setPratos(newValue);
                    }
                  }}
                />
                <button disabled={!pratos || pratos > dados.estoque_pratos} onClick={() => venderPratos()} className={pratos && pratos <= dados.estoque_pratos ? "h-24 w-48 md:h-36 md:w-96 bg-red-500 text-2xl md:text-5xl text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" : 
              "h-24 w-48 md:h-36 md:w-96 bg-gray-300 text-2xl md:text-5xl text-gray-600 cursor-not-allowed font-semibold py-2 px-4 rounded-md py-3 px-4"}>
                  VENDER PRATOS
                </button>
                </div>
                <div className="flex items-center mx-2 md:mx-32 my-8">
              <input
                type="number"
                value={sobremesas}
                className="h-12 w-24 md:h-32 md:w-48 mx-4 md:mx-8 text-4xl md:text-6xl text-center border-l border-r border-blue-500"
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (!isNaN(newValue) && newValue >= 0) {
                    setSobremesas(newValue);
                  }
                }}
              />
                <button disabled={!sobremesas || sobremesas > dados.estoque_sobremesas} onClick={() => venderSobremesas()} className={sobremesas && sobremesas <= dados.estoque_sobremesas ? "h-24 w-48 md:h-36 md:w-96 bg-red-500 text-5xl text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" : 
              "h-24 w-48 md:h-36 md:w-96 bg-gray-300 text-2xl md:text-5xl text-gray-600  cursor-not-allowed font-semibold py-2 px-4 rounded-md py-3 px-4"}>
                  VENDER SOBREMESAS
              </button>
              </div>
            </div>
          </div>
        </section></>}
    </div>
  )
}

export default Cadastro
  