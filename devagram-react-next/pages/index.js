import Head from 'next/head'
import Image from 'next/image'
import Botao from '../componentes/botao'

export default function Home() {
  return (
    <>
      <h1>Olá Mundo!</h1>
      <Botao texto={'Login'} cor='contorno' manipularClique={() => console.log('Botao clicado')} />
    </>
  )
}
