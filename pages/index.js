import React from "react";
import PageTitle from "../components/PageTitle"
import Header from "../components/Header";
import HowToAdded from "../components/HowToAdded";
import HowWorks from "../components/HowWorks";

const Index = () =>{
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