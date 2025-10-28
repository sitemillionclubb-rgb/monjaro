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
      "https://scripts.converteai.net/89ff5648-3264-4b81-aa6a-289811c4f92c/players/69000296f17270f44e1ebcc9/v4/player.js"
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
          <vturb-smartplayer
            id="vid-69000296f17270f44e1ebcc9"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          ></vturb-smartplayer>
        </div>
      </div>
    </div>
  )
}
