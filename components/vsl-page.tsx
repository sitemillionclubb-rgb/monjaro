"use client"

import { useEffect, useState } from "react" // Importei useState também, caso você queira o botão de ação.

type VSLPageProps = {
  userName: string
  onContinue: () => void
}

export default function VSLPage({ userName, onContinue }: VSLPageProps) {
  // Opcional: Estado para controlar a visibilidade de um botão de CTA após o vídeo.
  const [videoScriptLoaded, setVideoScriptLoaded] = useState(false)

  useEffect(() => {
    // Remove qualquer script de player anterior, se existir (boa prática para evitar duplicatas)
    const oldScripts = document.querySelectorAll('script[src*="converteai.net/players"]')
    oldScripts.forEach(script => script.parentNode?.removeChild(script))

    // Cria e anexa o NOVO script do player
    const script = document.createElement("script")
    script.src =
      "https://scripts.converteai.net/24dbb03c-fe6a-4d6d-b45f-ac4a3e2e5da5/players/69000296f17270f44e1ebcc9/v4/player.js"
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      setVideoScriptLoaded(true) // O script do player foi carregado
      // Em uma aplicação real, você esperaria por um evento do player (se disponível)
      // para saber quando o vídeo está realmente pronto para interação.
    }


    return () => {
      // Limpeza: remove o script quando o componente é desmontado
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, []) // O array vazio garante que o efeito só rode uma vez, no montagem do componente

  // Função de exemplo para o botão de ação (se você quiser um)
  const handleActionClick = () => {
    // Substitua esta URL pela sua página de destino real (checkout, download, etc.)
    window.open("SUA_NOVA_URL_PARA_A_OFERTA_OU_DOWNLOAD", "_blank")
    onContinue() // Chama a função de callback, se definida
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Logo Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-COMSOnSXXi5ZLVeRf3qhj58klzMCzr.png"
            alt="Mounjaro de Pobre Logo"
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Video Player Container */}
      <div className="flex-grow max-w-4xl mx-auto p-6 w-full">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
          <vturb-smartplayer
            // NOVO ID DO VÍDEO
            id="vid-69000296f17270f44e1ebcc9"
            style={{
              display: "block",
              margin: "0 auto",
              width: "100%",
              maxWidth: "400px", // NOVO: max-width adicionado
            }}
          ></vturb-smartplayer>
        </div>

        {/*
          Opcional: Botão de Ação (CTA - Call To Action)
          Este botão aparecerá assim que o script do player for carregado.
          Para uma lógica mais precisa (ex: aparecer só depois de X segundos de vídeo),
          você precisaria usar a API do player VSL, se ela disponibilizar tais eventos.
        */}
        {videoScriptLoaded && (
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Clique abaixo para acessar o protocolo completo!
            </p>
            <button
              onClick={handleActionClick}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-2xl animate-pulse transition duration-300 ease-in-out transform hover:scale-105"
            >
              SIM! Quero meu "Mounjaro de Pobre" AGORA!
            </button>
            <p className="text-sm text-gray-600 mt-4">
              *Oferta por tempo limitado.
            </p>
          </div>
        )}
      </div>

      {/* Footer Simples (Opcional) */}
      <footer className="bg-gray-100 p-4 text-center text-gray-600 text-sm mt-8">
        <div className="max-w-4xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Mounjaro de Pobre. Todos os direitos reservados.</p>
          <p>Termos de Uso | Política de Privacidade</p>
        </div>
      </footer>
    </div>
  )
}