"use client"

import { Button } from "@/components/ui/button"
import { Shield, Lock, Award } from "lucide-react"
import { useState } from "react"

type SalesPageProps = {
  userName: string
}

export default function SalesPage({ userName }: SalesPageProps) {
  const [showFloatingBanner, setShowFloatingBanner] = useState(true)

  const handleCTA = () => {
    window.location.href = "https://seucheckout.com/lastlink"
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="text-2xl">☕</div>
          <div className="font-bold text-green-600 text-lg">MOUNJARO DE POBRE</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Main Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">🎯 Protocolo Completo Mounjaro de Pobre</h1>
          <div className="space-y-2 text-left max-w-2xl mx-auto">
            {[
              "✅ Protocolo Completo de Emagrecimento",
              "✅ Detox Natural Incluído",
              "✅ Suporte Especializado",
              "✅ 4 Bônus Exclusivos",
            ].map((item, index) => (
              <p key={index} className="text-lg">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Price Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 text-center border-4 border-green-600">
          <div className="mb-4">
            <p className="text-gray-600 text-lg mb-2">Valor Total:</p>
            <p className="text-3xl text-gray-400 line-through">R$ 197,00</p>
          </div>
          <div className="mb-6">
            <p className="text-green-600 text-2xl font-bold mb-2">Por Apenas:</p>
            <p className="text-6xl font-bold text-green-600">R$ 37,90</p>
            <p className="text-red-600 font-semibold text-xl mt-2">92% DE DESCONTO - APENAS HOJE!</p>
          </div>
          <Button
            onClick={handleCTA}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-8 text-2xl font-bold"
          >
            QUERO A RECEITA! 🔥
          </Button>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Compare: Quanto Você Economiza com o Mounjaro de Pobre
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left p-3 font-bold">Método</th>
                  <th className="text-right p-3 font-bold">Custo</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3">Ozempic (medicamento)</td>
                  <td className="text-right p-3 font-semibold text-red-600">R$ 3.000+</td>
                </tr>
                <tr>
                  <td className="p-3">Nutricionista (por consulta)</td>
                  <td className="text-right p-3 font-semibold text-red-600">R$ 500+</td>
                </tr>
                <tr>
                  <td className="p-3">Academia + Personal (mensal)</td>
                  <td className="text-right p-3 font-semibold text-red-600">R$ 600+</td>
                </tr>
                <tr>
                  <td className="p-3">Cirurgia Bariátrica</td>
                  <td className="text-right p-3 font-semibold text-red-600">R$ 20.000 - R$ 50.000</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 font-bold text-green-800">Mounjaro de Pobre (COMPLETO)</td>
                  <td className="text-right p-3 font-bold text-green-600 text-2xl">R$ 37,90</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <Shield className="w-12 h-12 mx-auto text-green-600" />
              <p className="text-sm font-semibold">Compra Segura</p>
            </div>
            <div className="space-y-2">
              <Award className="w-12 h-12 mx-auto text-green-600" />
              <p className="text-sm font-semibold">Satisfação Garantida</p>
            </div>
            <div className="space-y-2">
              <Lock className="w-12 h-12 mx-auto text-green-600" />
              <p className="text-sm font-semibold">Privacidade Protegida</p>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-yellow-50 border-4 border-yellow-400 rounded-lg p-6 text-center">
          <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">30</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Garantia Total de 30 Dias</h3>
          <p className="text-lg text-gray-700 mb-4">Se você não emagrecer pelo menos 5kg em 30 dias...</p>
          <p className="text-xl font-bold text-red-600">Eu vou te devolver cada centavo!</p>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">O Que Nossas Clientes Dizem</h2>
          <div className="space-y-6">
            {[
              {
                name: "Rafaela Nascimento",
                text: "Perdi 12kg em 45 dias! Não acredito que consegui sem passar fome. O Mounjaro de Pobre mudou minha vida!",
                rating: 5,
              },
              {
                name: "Luana Dias",
                text: "Estava cética no início, mas os resultados falam por si. Já eliminei 8kg e me sinto incrível!",
                rating: 5,
              },
              {
                name: "Andressa Soares",
                text: "Finalmente encontrei algo que funciona! Minha autoestima voltou e estou mais confiante do que nunca.",
                rating: 5,
              },
              {
                name: "Beatriz Mattos",
                text: "O melhor investimento que fiz em mim mesma. Perdi 15kg e ganhei saúde e disposição!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Journey */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sua Jornada de Transformação</h2>
          <div className="space-y-4">
            {[
              { week: "1ª Semana", result: "Elimina retenção de líquidos e toxinas" },
              { week: "2ª Semana", result: "Acelera o metabolismo e queima de gordura" },
              { week: "3ª Semana", result: "Redução visível de medidas" },
              { week: "4ª Semana", result: "Corpo transformado - hora das fotos de biquíni!" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <p className="font-bold text-green-800">{item.week}</p>
                  <p className="text-gray-700">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">⏰ Não Perca Esta Oportunidade!</h2>
          <p className="text-xl mb-6">Esta oferta especial expira em breve</p>
          <Button
            onClick={handleCTA}
            className="w-full bg-white text-red-600 hover:bg-gray-100 py-8 text-2xl font-bold mb-4"
          >
            GARANTIR MINHA VAGA POR R$ 37,90
          </Button>
          <div className="flex items-center justify-center gap-4 text-sm">
            <Shield className="w-5 h-5" />
            <span>Pagamento 100% Seguro</span>
            <Lock className="w-5 h-5" />
            <span>Dados Protegidos</span>
          </div>
        </div>
      </div>

      {/* Floating Banner */}
      {showFloatingBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 shadow-2xl z-30">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="font-bold text-lg">OFERTA ESPECIAL - APENAS HOJE!</p>
              <p className="text-sm">
                <span className="line-through">R$ 497,00</span> <span className="text-2xl font-bold">R$ 37,90</span>{" "}
                (92% OFF)
              </p>
            </div>
            <Button onClick={handleCTA} className="bg-white text-red-600 hover:bg-gray-100 font-bold px-6 py-3">
              GARANTIR AGORA
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
