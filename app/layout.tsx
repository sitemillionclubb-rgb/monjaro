// Importações essenciais para React e Next.js
import React, { Suspense } from "react" // Garante que React esteja no escopo
import type { Metadata } from "next"     // Importa o tipo Metadata do Next.js
import Script from "next/script"         // Componente Script para scripts externos

// Importações das fontes Geist
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

// Importação do componente de Analytics do Vercel
import { Analytics } from "@vercel/analytics/next"

// Importação do arquivo CSS global
import "./globals.css"

// Metadados para a página (visível em abas do navegador, SEO, etc.)
export const metadata: Metadata = {
  title: "Mounjaro de Pobre",
  description: "Protocolo de emagrecimento",
  generator: "v0.app", // Informa a ferramenta que gerou o código, se aplicável
}

// Componente de layout raiz para todas as páginas da aplicação
export default function RootLayout({
  children, // O conteúdo da página atual (recebido como prop)
}: Readonly<{
  children: React.ReactNode // Define o tipo de 'children'
}>) {
  return (
    // O elemento <html> é o contêiner principal da página.
    // As variáveis de fonte Geist são aplicadas aqui para estarem disponíveis globalmente.
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {/*
          Script para o Facebook Pixel:
          - 'id': Identificador único para o script.
          - 'strategy': Define quando o script deve ser carregado. 'afterInteractive' significa
            que ele será carregado após o navegador ficar inativo por um momento.
        */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '415493113957340');
            fbq('track', 'PageView');
          `}
        </Script>

        {/*
          <noscript> para o Facebook Pixel:
          - É exibido se o JavaScript estiver desativado no navegador.
          - Carrega uma imagem 1x1 pixel para rastreamento.
        */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }} // Oculta a imagem visualmente
            src="https://www.facebook.com/tr?id=415493113957340&ev=PageView&noscript=1"
            alt="Facebook Pixel" // Adicione um alt para acessibilidade
          />
        </noscript>

        {/*
          Script para UTMIFY Pixel:
          - Similar ao Facebook Pixel, carrega um script externo para rastreamento de UTMs.
        */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "68fe7ebfa7228f12e06a0408";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/*
          Outro script UTMIFY para funcionalidades adicionais:
          - Possui atributos 'data-utmify-prevent-xcod-sck' e 'data-utmify-prevent-subids'
            para configurar o comportamento do script.
        */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck="true"
          data-utmify-prevent-subids="true"
          strategy="afterInteractive"
        />

        {/*
          Suspense Boundary:
          - Usado para carregar componentes de forma assíncrona.
          - 'fallback={null}' significa que nada será exibido enquanto o componente infantil
            (children) estiver carregando.
        */}
        <Suspense fallback={null}>{children}</Suspense>

        {/* Componente de Analytics do Vercel para monitoramento */}
        <Analytics />
      </body>
    </html>
  )
}