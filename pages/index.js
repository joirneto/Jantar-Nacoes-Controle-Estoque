import React, {useEffect} from "react";
import PageTitle from "../components/PageTitle"
import Header from "../components/Header";
import HowToAdded from "../components/HowToAdded";
import HowWorks from "../components/HowWorks";

const Index = () =>{

  useEffect(async () => {
    try {
      const response = await fetch("/api/get-professionals")
      const allData = await response.json()

      const category = []
      if (Object.keys(allData).length > 0) {
        allData?.map((item) => {
          if (!category.includes(item.category)) {
            category.push(item.category)
          }
        })

        
      }
      console.log(category)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return(
    <>
    
    <PageTitle title = "Seja bem Vindo!"/>
    <Header />
    <aside className= "w-full md:w-1/3 flex flex-col items-center px-3" >
      <HowToAdded />
    </aside>
    <HowWorks />
    </>
  )
}

export default Index