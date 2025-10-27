"use client"

import { useState } from "react"

type BodyTypeSelectionProps = {
  userName: string
  onContinue: () => void
}

export default function BodyTypeSelection({ userName, onContinue }: BodyTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<string>("")

  const handleSelection = (type: string) => {
    setSelectedType(type)
    setTimeout(() => {
      onContinue()
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-3xl mx-auto flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rbLQk7VxvM6S9NR1hEjRyzFyMvDDHj.png"
            alt="Mounjaro de Pobre Logo"
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-3xl mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-600 h-3 rounded-full" style={{ width: "95%" }}></div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Qual o <span className="text-green-600">corpo</span> dos <span className="text-green-600">sonhos</span>?
          </h2>
          <p className="text-center text-gray-600 text-lg">Escolha a opção abaixo:</p>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8">
            <button
              onClick={() => handleSelection("Em forma")}
              className={`flex flex-col items-center p-4 md:p-6 border-2 rounded-lg transition-all hover:shadow-lg ${
                selectedType === "Em forma" ? "border-green-600 bg-green-50" : "border-gray-200 hover:border-green-400"
              }`}
            >
              <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OKTUzsdhINW5Ajcwsk94PIjdEt8D9K.png"
                  alt="Corpo em forma"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg md:text-xl font-semibold text-gray-800">Em forma</span>
            </button>

            <button
              onClick={() => handleSelection("Natural")}
              className={`flex flex-col items-center p-4 md:p-6 border-2 rounded-lg transition-all hover:shadow-lg ${
                selectedType === "Natural" ? "border-green-600 bg-green-50" : "border-gray-200 hover:border-green-400"
              }`}
            >
              <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E79zt3jg3mjc9hEoDmiaoH1Z5ApeFL.png"
                  alt="Corpo natural"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg md:text-xl font-semibold text-gray-800">Natural</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
