"use client"

import { useEffect } from "react"
import { Shield } from "lucide-react"

export default function ObrigadoPage() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://scripts.converteai.net/24dbb03c-fe6a-4d6d-b45f-ac4a3e2e5da5/players/68ffe79bebbcac2e8cb8704a/v4/player.js"
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rbLQk7VxvM6S9NR1hEjRyzFyMvDDHj.png"
            alt="Mounjaro de Pobre Logo"
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-4">
        {/* Warning Banner */}
        <div className="bg-red-600 text-white rounded-lg p-4 text-center">
          <p className="font-bold text-lg flex items-center justify-center gap-2">
            <span>⚠️</span>
            <span>AVISO IMPORTANTE</span>
          </p>
        </div>

        {/* Important Message Box */}
        <div className="bg-white border-2 border-orange-500 rounded-lg p-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            ASSISTA O VÍDEO OU VOCÊ PODE NÃO TER RESULTADOS
          </h2>
          <p className="text-gray-700">
            No final você receberá um <span className="text-orange-600 font-semibold">Presente Exclusivo</span>
          </p>
        </div>

        {/* Video Player */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <vturb-smartplayer
            id="vid-68ffe79bebbcac2e8cb8704a"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          ></vturb-smartplayer>
        </div>

        {/* Guarantee Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-600 text-white p-4 text-center">
            <p className="font-bold text-lg">GARANTIA INCONDICIONAL</p>
          </div>
          <div className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              Nós acreditamos tanto no nosso <span className="font-semibold">Protocolo</span> que oferecemos{" "}
              <span className="text-green-600 font-bold">7 DIAS DE GARANTIA INCONDICIONAL</span>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center py-6">
          <p className="text-gray-500 text-sm">Conteúdo exclusivo e confidencial</p>
        </div>
      </div>
    </div>
  )
}
