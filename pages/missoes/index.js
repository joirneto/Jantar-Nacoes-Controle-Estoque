import React, { useEffect, useState } from "react"
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import PageTitle from "../../components/PageTitle";
import formatarMoeda, { convertToCents, convertToCurrency, parseMoeda } from "../../utils/formatarMoeda";

const Cadastro = () => {
  const [totalDoado, setTotalDoado] = useState({});
  const [doacoes, setDoacoes] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [sucess, setSucess] = useState(0);
  const equipe = 'missoes';
  const urlBandeira = `/equipes/bandeiras/${equipe}.jpg`;

  useEffect(async () => {
    try {
      const response = await fetch(`/api/get-doacoes`)
      const totalDoado = await response.json()
      console.log('totalDoado', totalDoado)
      setTotalDoado(totalDoado.toString());
    } catch (error) {
      console.log(error)
    }
    setDoacoes('')
    setIsLoading(false);
  }, [sucess]);

const doar = async () => {
  setIsLoading(true);
  try {
    const response = await fetch("/api/doar", {
      method: "POST",
      body: JSON.stringify({doacoes}),
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
              <h2 className="text-5xl md:text-9xl font-semibold mb-4">MISSÕES</h2>
              <div>
                <span className="text-red-900 text-2xl md:text-5xl font-bold hover:text-gray-700 pb-4">
                  VALOR DOADO: R$ {totalDoado?.replace('.', ',')}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold m-4">Insira a quantidade e CLIQUE PARA VENDER</h2>
              <div className="flex items-center mx-2 md:mx-32 my-4">
              <h2 className="text-5xl md:text-8xl font-semibold mb-4">R$: </h2>
                <input
                  type="texto"
                  value={doacoes}
                  className="h-24 w-32 md:h-32 md:w-64 mx-4 md:mx-8 md:text-6xl text-3xl text-center border-l border-r border-blue-500 currency"
                  onChange={(e) => {
                    setDoacoes(e.target.value)
                  }}
                />
                <button onClick={() => doar()} className={doacoes ? "h-24 w-48 md:h-36 md:w-96 bg-red-500 md:text-6xl text-2xl text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" : 
              "h-24 w-48 md:h-36 md:w-96 bg-gray-300 text-2xl md:text-5xl text-gray-600 cursor-not-allowed font-semibold py-2 px-4 rounded-md py-3 px-4"}>
                  DOAR
                </button>
                </div>
            </div>
          </div>
        </section></>}
    </div>
  )
}

export default Cadastro
  