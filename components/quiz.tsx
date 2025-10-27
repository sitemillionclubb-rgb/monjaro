"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import LoadingScreen from "@/components/loading-screen"
import ResultsPage from "@/components/results-page"
import BodyTypeSelection from "@/components/body-type-selection"
import VSLPage from "@/components/vsl-page"
import SalesPage from "@/components/sales-page"

type QuizAnswers = {
  weightLoss: string
  bodyType: string
  dreamBody: string
  targetArea: string
  name: string
  lifeImpact: string
  happiness: string
  obstacle: string
  benefits: string[]
  currentWeight: number
  height: number
  targetWeight: number
  routine: string
  sleep: string
  water: string
}

export default function Quiz() {
  const [step, setStep] = useState(1)
  const [showLoading, setShowLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showBodyTypeSelection, setShowBodyTypeSelection] = useState(false)
  const [showVSL, setShowVSL] = useState(false)
  const [showSales, setShowSales] = useState(false)
  const [answers, setAnswers] = useState<QuizAnswers>({
    weightLoss: "",
    bodyType: "",
    dreamBody: "",
    targetArea: "",
    name: "",
    lifeImpact: "",
    happiness: "",
    obstacle: "",
    benefits: [],
    currentWeight: 70,
    height: 160,
    targetWeight: 65,
    routine: "",
    sleep: "",
    water: "",
  })

  const totalSteps = 13
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step === totalSteps) {
      setShowLoading(true)
      setTimeout(() => {
        setShowLoading(false)
        setShowResults(true)
      }, 10000)
    } else if (step === 7) {
      setStep(step + 1)
    } else {
      setStep(step + 1)
    }
  }

  const handleBenefitToggle = (benefit: string) => {
    setAnswers((prev) => ({
      ...prev,
      benefits: prev.benefits.includes(benefit)
        ? prev.benefits.filter((b) => b !== benefit)
        : [...prev.benefits, benefit],
    }))
  }

  const handleDreamBodySelect = (dreamBody: string) => {
    setAnswers({ ...answers, dreamBody })
    setShowBodyTypeSelection(true)
  }

  if (showSales) {
    return <SalesPage userName={answers.name} />
  }

  if (showVSL) {
    return <VSLPage userName={answers.name} onContinue={() => setShowSales(true)} />
  }

  if (showBodyTypeSelection) {
    return <BodyTypeSelection userName={answers.name} onContinue={() => setShowVSL(true)} />
  }

  if (showResults) {
    return (
      <ResultsPage
        userName={answers.name}
        currentWeight={answers.currentWeight}
        height={answers.height}
        targetWeight={answers.targetWeight}
        onDreamBodySelect={handleDreamBodySelect}
      />
    )
  }

  if (showLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="bg-white shadow-md border-b-2 border-green-100 p-4 md:p-6">
        <div className="max-w-3xl mx-auto flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rbLQk7VxvM6S9NR1hEjRyzFyMvDDHj.png"
            alt="Mounjaro de Pobre Logo"
            className="h-12 md:h-16 w-auto"
          />
        </div>
      </div>

      <div className="sticky top-0 bg-white shadow-md z-10 p-4 md:p-6 border-b border-green-100">
        <div className="max-w-3xl mx-auto">
          <Progress value={progress} className="h-2.5 md:h-3" />
          <p className="text-xs md:text-sm text-gray-600 mt-2 text-center font-medium">
            Pergunta {step} de {totalSteps}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-xl shadow-lg border border-green-100 p-4 md:p-8 space-y-6 transition-all duration-300">
          {step === 1 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Quantos quilos você deseja perder?
              </h2>
              <div className="space-y-3">
                {["Até 5 kg", "De 6 a 10 kg", "De 11 a 15 kg", "De 16 a 20 kg", "Mais de 20 kg"].map((option) => (
                  <Button
                    key={option}
                    variant={answers.weightLoss === option ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto py-4 md:py-5 px-4 md:px-6 text-base md:text-lg font-medium whitespace-normal transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                    onClick={() => {
                      setAnswers({ ...answers, weightLoss: option })
                      setTimeout(handleNext, 300)
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Como você classificaria seu <span className="text-green-600">corpo hoje?</span>
              </h2>
              <div className="space-y-3">
                <Button
                  variant={answers.bodyType === "Regular" ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto py-3 md:py-4 px-3 md:px-4 flex items-center gap-3 md:gap-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                  onClick={() => {
                    setAnswers({ ...answers, bodyType: "Regular" })
                    setTimeout(handleNext, 300)
                  }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Ei4pvwklwuSG6R2tsNzkd7DqOqaxX.png"
                    alt="Corpo Regular"
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <span className="text-base md:text-lg font-medium">Regular</span>
                </Button>
                <Button
                  variant={answers.bodyType === "Flácido" ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto py-3 md:py-4 px-3 md:px-4 flex items-center gap-3 md:gap-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                  onClick={() => {
                    setAnswers({ ...answers, bodyType: "Flácido" })
                    setTimeout(handleNext, 300)
                  }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uwHnwien7DxQ4twKZhUUTaJymIpimr.png"
                    alt="Corpo Flácido"
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <span className="text-base md:text-lg font-medium">Flácido</span>
                </Button>
                <Button
                  variant={answers.bodyType === "Sobrepeso" ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto py-3 md:py-4 px-3 md:px-4 flex items-center gap-3 md:gap-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                  onClick={() => {
                    setAnswers({ ...answers, bodyType: "Sobrepeso" })
                    setTimeout(handleNext, 300)
                  }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Shs5xzEdbIUKYTi1TpGT9bVRivZIyr.png"
                    alt="Corpo com Sobrepeso"
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <span className="text-base md:text-lg font-medium">Sobrepeso</span>
                </Button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Em qual área do seu corpo você gostaria de reduzir mais gordura?
              </h2>
              <div className="space-y-3">
                {[
                  "Região dos Culotes",
                  "Região das Coxas",
                  "Região do Abdômen (barriga)",
                  "Região dos Glúteos",
                  "Região dos Braços",
                ].map((option) => (
                  <Button
                    key={option}
                    variant={answers.targetArea === option ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto py-4 md:py-5 px-4 md:px-6 text-base md:text-lg font-medium whitespace-normal leading-relaxed transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                    onClick={() => {
                      setAnswers({ ...answers, targetArea: option })
                      setTimeout(handleNext, 300)
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Qual seu nome?
              </h2>
              <Input
                type="text"
                placeholder="Digite seu nome"
                value={answers.name}
                onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                className="text-base md:text-lg py-5 md:py-6 px-4 border-2 focus:border-green-500 transition-colors"
              />
              <Button
                onClick={handleNext}
                disabled={!answers.name}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-5 md:py-6 text-base md:text-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
              </Button>
            </>
          )}

          {step === 5 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Como o seu peso impacta sua vida?
              </h2>
              <div className="space-y-3">
                {[
                  "Evito tirar fotos porque tenho vergonha",
                  "Meu parceiro não me olha mais com desejo como antes",
                  "Evito encontros sociais porque não me sinto bem comigo mesma",
                  "Nenhuma das opções",
                ].map((option) => (
                  <Button
                    key={option}
                    variant={answers.lifeImpact === option ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto py-4 md:py-5 px-4 md:px-6 text-base md:text-lg font-medium whitespace-normal leading-relaxed transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                    onClick={() => {
                      setAnswers({ ...answers, lifeImpact: option })
                      setTimeout(handleNext, 300)
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </>
          )}

          {step === 6 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Você está realmente feliz com sua aparência?
              </h2>
              <div className="space-y-3">
                {[
                  "Não, porque me sinto acima do peso",
                  "Sim, mas sei que posso melhorar minha saúde",
                  "Não gostaria de perder peso para melhorar meu bem-estar",
                ].map((option) => (
                  <Button
                    key={option}
                    variant={answers.happiness === option ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto py-4 md:py-5 px-4 md:px-6 text-base md:text-lg font-medium whitespace-normal leading-relaxed transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                    onClick={() => {
                      setAnswers({ ...answers, happiness: option })
                      setTimeout(handleNext, 300)
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </>
          )}

          {step === 7 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                O que mais te impede de emagrecer?
              </h2>
              <div className="space-y-3">
                {["Falta de tempo", "Autocontrole", "Financeiro"].map((option) => (
                  <Button
                    key={option}
                    variant={answers.obstacle === option ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto py-4 md:py-5 px-4 md:px-6 text-base md:text-lg font-medium whitespace-normal leading-relaxed transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                    onClick={() => {
                      setAnswers({ ...answers, obstacle: option })
                      setTimeout(handleNext, 300)
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </>
          )}

          {step === 8 && (
            <>
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-600 rounded-xl p-4 md:p-6 mb-6 shadow-md">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-800 text-center mb-4 leading-tight text-balance">
                  Nosso protocolo Resolve isso para você!
                </h2>
                <div className="flex justify-center mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jbZYJjkyV0Hb07Sye8Nz8KHlrzXQ8b.png"
                    alt="Como funciona o Mounjaro de Pobre"
                    className="w-full max-w-md rounded-lg shadow-md"
                  />
                </div>
              </div>
              <Button
                onClick={handleNext}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-5 md:py-6 text-base md:text-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                Continuar
              </Button>
            </>
          )}

          {step === 9 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Quais desses benefícios você gostaria de ter?
              </h2>
              <div className="space-y-3">
                {[
                  "Emagrecer sem esforço e sem efeito sanfona",
                  "Sono mais profundo",
                  "Mais energia e disposição ao longo do dia",
                  "Aumento da autoestima e confiança",
                  "Redução do estresse e ansiedade",
                ].map((benefit) => (
                  <Button
                    key={benefit}
                    variant={answers.benefits.includes(benefit) ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto py-4 md:py-5 px-4 md:px-6 text-sm md:text-base font-medium whitespace-normal leading-relaxed transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                    onClick={() => handleBenefitToggle(benefit)}
                  >
                    <span className="mr-3 flex-shrink-0">{answers.benefits.includes(benefit) ? "✓" : "○"}</span>
                    {benefit}
                  </Button>
                ))}
              </div>
              <Button
                onClick={handleNext}
                disabled={answers.benefits.length === 0}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-5 md:py-6 text-base md:text-lg font-semibold mt-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
              </Button>
            </>
          )}

          {step === 10 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Qual é o seu peso atual?
              </h2>
              <div className="space-y-6">
                <div className="text-center bg-green-50 rounded-xl p-6 md:p-8 border-2 border-green-200">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600">
                    {answers.currentWeight}
                  </span>
                  <span className="text-xl md:text-2xl text-gray-600 ml-2">kg</span>
                </div>
                <Slider
                  value={[answers.currentWeight]}
                  onValueChange={(value) => setAnswers({ ...answers, currentWeight: value[0] })}
                  min={40}
                  max={200}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs md:text-sm text-gray-600 font-medium">
                  <span>40 kg</span>
                  <span>200 kg</span>
                </div>
              </div>
              <Button
                onClick={handleNext}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-5 md:py-6 text-base md:text-lg font-semibold mt-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                Continuar
              </Button>
            </>
          )}

          {step === 11 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Qual é a sua altura?
              </h2>
              <div className="space-y-6">
                <div className="text-center bg-green-50 rounded-xl p-6 md:p-8 border-2 border-green-200">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600">{answers.height}</span>
                  <span className="text-xl md:text-2xl text-gray-600 ml-2">cm</span>
                </div>
                <Slider
                  value={[answers.height]}
                  onValueChange={(value) => setAnswers({ ...answers, height: value[0] })}
                  min={120}
                  max={220}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs md:text-sm text-gray-600 font-medium">
                  <span>120 cm</span>
                  <span>220 cm</span>
                </div>
              </div>
              <Button
                onClick={handleNext}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-5 md:py-6 text-base md:text-lg font-semibold mt-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                Continuar
              </Button>
            </>
          )}

          {step === 12 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Qual é o seu objetivo de peso?
              </h2>
              <div className="space-y-6">
                <div className="text-center bg-green-50 rounded-xl p-6 md:p-8 border-2 border-green-200">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600">
                    {answers.targetWeight}
                  </span>
                  <span className="text-xl md:text-2xl text-gray-600 ml-2">kg</span>
                </div>
                <Slider
                  value={[answers.targetWeight]}
                  onValueChange={(value) => setAnswers({ ...answers, targetWeight: value[0] })}
                  min={40}
                  max={200}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs md:text-sm text-gray-600 font-medium">
                  <span>40 kg</span>
                  <span>200 kg</span>
                </div>
              </div>
              <Button
                onClick={handleNext}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-5 md:py-6 text-base md:text-lg font-semibold mt-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                Continuar
              </Button>
            </>
          )}

          {step === 13 && (
            <>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-balance">
                Quantos copos de água você bebe por dia?
              </h2>
              <div className="space-y-3">
                {["Bebo apenas café ou chá", "1-2 copos por dia", "2-6 copos por dia", "Mais de 6 copos"].map(
                  (option) => (
                    <Button
                      key={option}
                      variant={answers.water === option ? "default" : "outline"}
                      className="w-full justify-start text-left h-auto py-4 md:py-5 px-4 md:px-6 text-base md:text-lg font-medium whitespace-normal leading-relaxed transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                      onClick={() => {
                        setAnswers({ ...answers, water: option })
                        setTimeout(handleNext, 300)
                      }}
                    >
                      {option}
                    </Button>
                  ),
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
