"use client"

import { useEffect } from "react"

type VSLPageProps = {
  userName: string
  onContinue: () => void
}

export default function VSLPage({ userName, onContinue }: VSLPageProps) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://scripts.converteai.net/24dbb03c-fe6a-4d6d-b45f-ac4a3e2e5da5/players/69000296f17270f44e1ebcc9/v4/player.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
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
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
              Usuário seu protocolo foi gerado com sucesso!
            </h2>
            <p className="text-lg text-gray-700">Por favor assista o vídeo abaixo para liberar</p>
          </div>

          <vturb-smartplayer
            id="vid-69000296f17270f44e1ebcc9"
            style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
          ></vturb-smartplayer>
        </div>
      </div>
    </div>
  )
}
