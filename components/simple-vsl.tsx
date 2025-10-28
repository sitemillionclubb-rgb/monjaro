"use client"

import React, { useEffect } from "react" // Importa React e useEffect

type VSLPageProps = {
  userName: string
  onContinue: () => void // Mantido como um tipo, mesmo que não seja usado aqui
}

export default function VSLPage({ userName, onContinue }: VSLPageProps) {
  // O script do Vturb deve ser injetado apenas uma vez, no carregamento do componente
  useEffect(() => {
    // === Código de Limpeza (Opcional, mas recomendado) ===
    // Remove qualquer script de player Vturb/ConverteAI anterior para evitar duplicação.
    const oldScripts = document.querySelectorAll('script[src*="converteai.net/players"]')
    oldScripts.forEach(script => script.parentNode?.removeChild(script))

    // === Injeção do NOVO Script do Player ===
    const script = document.createElement("script")
    
    // Novo Source URL com o ID do seu vídeo: 69000296f17270f44e1ebcc9
    script.src =
      "https://scripts.converteai.net/24dbb03c-fe6a-4d6d-b45f-ac4a3e2e5da5/players/69000296f17270f44e1ebcc9/v4/player.js"
    
    script.async = true
    document.head.appendChild(script)

    // Função de limpeza: remove o script quando o componente é desmontado
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, []) // Dependências vazias = roda apenas na montagem

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Logo Header: Fundo branco com sombra sutil */}
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-COMSOnSXXi5ZLVeRf3qhj58klzMCzr.png"
            alt="Mounjaro de Pobre Logo"
            className="h-16 w-auto"
          />
        </div>
      </header>

      {/* Conteúdo Principal: Container do Vídeo */}
      <main className="flex-grow max-w-4xl mx-auto p-6 w-full">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
          <vturb-smartplayer
            // NOVO ID DO VÍDEO
            id="vid-69000296f17270f44e1ebcc9"
            style={{
              display: "block",
              margin: "0 auto",
              width: "100%",
              // NOVO max-width: Limita a largura do player como você solicitou
              maxWidth: "400px", 
            }}
          ></vturb-smartplayer>
          {/*
            ATENÇÃO: A URL de destino/botão aparecerá AQUI, INJETADA
            automaticamente pelo script do Vturb, conforme configurado na sua plataforma.
          */}
        </div>
      </main>

      {/* Footer Simples (Rodapé) */}
      <footer className="bg-gray-100 p-4 text-center text-gray-600 text-sm mt-8">
        <div className="max-w-4xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Mounjaro de Pobre. Todos os direitos reservados.</p>
          <p>Termos de Uso | Política de Privacidade</p>
        </div>
      </footer>
    </div>
  )
}