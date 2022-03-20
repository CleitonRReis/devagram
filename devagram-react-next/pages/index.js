import Head from 'next/head';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Avatar from '../componentes/avatar';
import Botao from '../componentes/botao';
import UploadImagem from '../componentes/uploadImagem';

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  console.log(imagem);

  return (
    <>
      <h1>Olá Mundo!</h1>
      <button onClick={() => referenciaInput?.current?.click()}>Abrir seletor de arquivos</button>
      <Avatar/>
      <Botao texto={'Login'} cor='contorno' manipularClique={() => console.log('Botao clicado')}/>
      <UploadImagem 
        setImagem={setImagem} 
        imagemPreview={imagem?.preview}
        aoSetarAReferencia={(ref) => referenciaInput.current = ref}
      />
    </>
  );
};