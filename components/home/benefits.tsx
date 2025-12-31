import { Leaf, Users, Truck, ClipboardCheck, Layers, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Feature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  title?: string;
  features?: Feature[];
  buttonText?: string;
  buttonUrl?: string;
}

const Benefits = ({
  title = "O que você ganha ao escolher nossas mudas",
  features = [
    {
      heading: "Economia no longo prazo",
      description:
        "Mudas de qualidade superior resultam em plantios mais produtivos e rentáveis",
      icon: <Leaf className="size-6" />, // ícone de folha
    },
    {
      heading: "Experiência comprovada",
      description:
        "Mais de 20 anos atuando no cultivo e venda de mudas de seringueira.",
      icon: <Users className="size-6" />, // ícone de grupo/pessoas
    },
    {
      heading: "Entrega segura",
      description:
        "Transporte de até 6 mil mudas por viagem, garantindo que cheguem em perfeitas condições.",
      icon: <Truck className="size-6" />, // ícone de caminhão
    },
    {
      heading: "Facilidade no processo de compra",
      description:
        "Orçamento rápido, proposta detalhada e acompanhamento do transporte das mudas.",
      icon: <ClipboardCheck className="size-6" />, // ícone de checklist
    },
    {
      heading: "Grande variedade de clones",
      description:
        "Disponibilizamos clones RRIM, RIM e IAC, atendendo diferentes necessidades de plantio.",
      icon: <Layers className="size-6" />, // ícone de camadas, representando variedade
    },
    {
      heading: "Disponibilidade imediata",
      description:
        "Mudas em pronta entrega, para que você possa iniciar o plantio sem atrasos.",
      icon: <Calendar className="size-6" />, // ícone de calendário
    },
  ],
  buttonText = "Solicitar Orçamento",
  buttonUrl = "https://wa.me/5517988230597?text=Olá! Gostaria de saber valores e disponibilidade de mudas.",
}: Feature43Props) => {
  return (
    <section className="py-32" id="nossas">
      <div className="container">
        {title && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-pretty text-4xl font-medium lg:text-5xl">
              {title}
            </h2>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-accent mb-5 flex size-16 items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.heading}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        {buttonUrl && (
          <div className="mt-16 flex justify-center">
            <Button size="lg" asChild>
              <Link href={buttonUrl}>{buttonText}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Benefits;
