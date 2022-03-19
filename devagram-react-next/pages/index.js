import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../componentes/avatar'
import Botao from '../componentes/botao'

export default function Home() {
  return (
    <>
      <h1>Olá Mundo!</h1>
      <Avatar/>
      <Botao texto={'Login'} cor='contorno' manipularClique={() => console.log('Botao clicado')} />
    </>
  )
}
