import { Asterisk, CornerDownRight } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

const Process = () => {
  const process = [
    {
      step: "01",
      title: "Solicite seu orçamento",
      description:
        "Entre em contato conosco e receba uma proposta personalizada em até 24 horas, com preços transparentes e todas as condições detalhadas.",
    },
    {
      step: "02",
      title: "Receba a proposta",
      description:
        "Enviaremos uma proposta técnica completa, adequada às necessidades específicas do seu plantio, considerando a região e o volume solicitado.",
    },
    {
      step: "03",
      title: "Transporte especializado",
      description:
        "Preparamos suas mudas com todo cuidado e realizamos o transporte especializado até sua propriedade, garantindo que cheguem em perfeitas condições.",
    },
    {
      step: "04",
      title: "Receba e plante",
      description:
        "Suas mudas chegam saudáveis e prontas para plantio imediato. Conte com nosso suporte técnico sempre disponível para tirar dúvidas.",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              <h1 className="w-fit">Como Funciona</h1>
              <Asterisk className="absolute -right-2 -top-2 size-5 text-green-500 md:size-10 lg:-right-14" />
            </div>
            <p className="text-foreground/50 text-base">
              Um processo simples para adquirir e plantar suas mudas com
              segurança.
            </p>
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-2"
            >
              <CornerDownRight className="text-green-500" />
              Solicitar Orçamento
            </Button>
          </div>
          <ul className="lg:pl-22 relative col-span-4 w-full">
            {process.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute right-0 top-4" />

                <div className="bg-muted flex size-12 items-center justify-center px-4 py-1 tracking-tighter">
                  0{index + 1}
                </div>
                <div className="">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#22C55E" // green-500
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#22C55E" // green-500
        strokeWidth="4"
      />
    </svg>
  );
};
