import React from "react";
import Head from "next/head";

const PageTitle = ({title}) => {
  return(
    <Head>
      <title>{title} - Você precisa de quem?</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="Content-Language" content="pt-br" />
    </Head>
  )
}

export default PageTitle