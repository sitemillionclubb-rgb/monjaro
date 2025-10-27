"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, AlertTriangle } from "lucide-react"

type ResultsPageProps = {
  userName: string
  currentWeight: number
  height: number
  targetWeight: number
  onDreamBodySelect: (dreamBody: string) => void
}

export default function ResultsPage({
  userName,
  currentWeight,
  height,
  targetWeight,
  onDreamBodySelect,
}: ResultsPageProps) {
  const heightInMeters = height / 100
  const bmi = currentWeight / (heightInMeters * heightInMeters)
  const weightToLose = currentWeight - targetWeight

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Abaixo do Peso", color: "text-blue-600", bgColor: "bg-blue-100" }
    if (bmi < 25) return { category: "Normal", color: "text-green-600", bgColor: "bg-green-100" }
    if (bmi < 30) return { category: "Sobrepeso", color: "text-yellow-600", bgColor: "bg-yellow-100" }
    return { category: "Obesidade", color: "text-red-600", bgColor: "bg-red-100" }
  }

  const bmiInfo = getBMICategory(bmi)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-3xl mx-auto flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rbLQk7VxvM6S9NR1hEjRyzFyMvDDHj.png"
            alt="Mounjaro de Pobre Logo"
            className="h-12 md:h-16 w-auto"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 space-y-6">
        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold mb-2">Olá, {userName}! 👋</h1>
          <p className="text-lg">Transformando vidas e veja os resultados da nossa comunidade!</p>
        </div>

        {/* BMI Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Seu IMC (Índice de Massa Corporal)</h2>
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-red-600 mb-2">{bmi.toFixed(2)}</div>
            <div className={`inline-block px-4 py-2 rounded-full ${bmiInfo.bgColor} ${bmiInfo.color} font-semibold`}>
              {bmiInfo.category}
            </div>
          </div>

          {/* BMI Scale */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-full h-8 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-400 rounded-lg"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Abaixo</span>
              <span>Normal</span>
              <span>Sobrepeso</span>
              <span>Obesidade</span>
            </div>
          </div>

          {bmi >= 25 && (
            <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">⚠️ Zona de Alerta</h3>
                  <p className="text-sm text-red-700">
                    Seu IMC indica que você está na zona de {bmiInfo.category.toLowerCase()}. É importante tomar medidas
                    para melhorar sua saúde.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Metabolism Analysis */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold text-yellow-800 mb-2">
              ⚠️ Seu metabolismo pode estar te sabotando sem que você perceba!
            </h2>
            <p className="text-gray-700">
              Mesmo estando no peso normal, seu corpo pode estar retendo toxinas e trabalhando de forma mais lenta,
              dificultando a perda de peso e deixando você com menos energia.
            </p>
          </div>

          {/* Warning Signs */}
          <div className="mb-6">
            <h3 className="font-bold text-red-700 mb-3 text-lg">🚨 Sinais de Alerta:</h3>
            <div className="space-y-2">
              {[
                "Metabolismo lento dificultando a perda de peso",
                "Cansaço constante e falta de energia",
                "Acúmulo de gordura localizada",
                "Dificuldade para dormir bem",
              ].map((sign, index) => (
                <div key={index} className="flex items-start gap-2 text-red-700">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-3 text-lg">✨ A Solução:</h3>
            <p className="text-gray-700 mb-3">
              Com o Protocolo Mounjaro de Pobre, seu corpo acelera a queima de gordura naturalmente!
            </p>
            <div className="space-y-2">
              {[
                "Acelera o metabolismo de forma natural",
                "Aumenta a energia e disposição",
                "Elimina toxinas acumuladas",
                "Melhora a qualidade do sono",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 text-blue-700">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 w-5 h-5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personalized Plan */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Seu Plano Personalizado, {userName}</h2>
          <div className="bg-green-50 border-2 border-green-600 rounded-lg p-4 mb-4">
            <p className="text-center text-lg font-semibold text-green-800">
              Meta: Perder {weightToLose.toFixed(1)} kg
            </p>
          </div>

          <div className="space-y-3">
            {[
              "Protocolo Completo Mounjaro de Pobre",
              "Técnica Hormonal para acelerar resultados",
              "Extensão Doces sem culpa",
              "Fogão Metabólico - Receitas exclusivas",
              "Planilha de acompanhamento",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle2 className="text-green-600 flex-shrink-0 w-6 h-6" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => onDreamBodySelect("")}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-xl font-bold"
          >
            VER MEU PROTOCOLO PERSONALIZADO
          </Button>
        </div>
      </div>
    </div>
  )
}
