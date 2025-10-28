"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function SimpleVSL() {
  useEffect(() => {
    // Load the VSL video player script
    const script = document.createElement("script")
    script.src =
      "https://scripts.converteai.net/24dbb03c-fe6a-4d6d-b45f-ac4a3e2e5da5/players/68ffe78fd929fd909afff8a2/v4/player.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main content area with video */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[400px]">
          <vturb-smartplayer
            id="vid-68ffe78fd929fd909afff8a2"
            style={{
              display: "block",
              margin: "0 auto",
              width: "100%",
              maxWidth: "400px",
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm font-medium">Copyright ©2025 | Todos Direitos Reservados</p>
          <p className="text-xs text-gray-300 leading-relaxed">
            Facebook. Todas as opiniões e conteúdos expressos neste site são de responsabilidade exclusiva de seus
            autores e não refletem a opinião ou políticas do Facebook.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <Link href="/politica-de-privacidade" className="text-blue-400 hover:text-blue-300 transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-gray-400">-</span>
            <Link href="/termos-e-condicoes" className="text-blue-400 hover:text-blue-300 transition-colors">
              Termos e Condições
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
