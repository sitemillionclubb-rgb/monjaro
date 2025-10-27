"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const transformations = [
    {
      name: "Transformação em 30 dias",
      beforeImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zscI3sLUpe67vkyvnn9ETcl08otBra.png",
      label: "-12kg em 30 dias",
    },
    {
      name: "Resultados visíveis",
      beforeImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zSdfMfe6S9M6iAJNbOk5CHhZubEfGk.png",
      label: "Redução de medidas",
    },
    {
      name: "Corpo definido",
      beforeImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AVzfiTJSoNBzwVgpocRAxgXx2NbV6w.png",
      label: "Cintura reduzida",
    },
    {
      name: "Mudança completa",
      beforeImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LAN3SMd1A4jbbuKzcsBMOvUh6KKJkK.png",
      label: "Transformação total",
    },
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 100)

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % transformations.length)
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(imageInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="text-4xl mb-4">☕</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Aguarde enquanto preparamos o Mounjaro de Pobre......
          </h1>
          <p className="text-gray-600">Analisando suas respostas</p>
        </div>

        <div className="space-y-2">
          <Progress value={progress} className="h-4" />
          <p className="text-center text-sm text-gray-600">{progress}%</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-center mb-4 text-green-700">
            Transformações reais com Mounjaro de Pobre
          </h3>
          <div className="space-y-4">
            <div className="text-center">
              <p className="font-semibold mb-3">{transformations[currentImage].name}</p>
              <div className="relative w-full aspect-square max-w-sm mx-auto rounded-lg overflow-hidden shadow-md">
                <Image
                  src={transformations[currentImage].beforeImage || "/placeholder.svg"}
                  alt={transformations[currentImage].name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-3 text-green-700 font-bold text-lg">{transformations[currentImage].label}</p>
            </div>
          </div>
        </div>

        <p className="text-center text-green-700 font-semibold animate-pulse">Você também pode conseguir!</p>
      </div>
    </div>
  )
}
