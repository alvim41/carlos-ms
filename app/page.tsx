
import Container from "@/components/ui/container";
import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Benefits from "@/components/home/benefits";
import Process from "@/components/home/process";
import { Cta } from "@/components/home/cta";
import { Faq } from "@/components/home/faq";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <Cta />
      <Faq />
      <Footer />
   </Container>
  );
}
