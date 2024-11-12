import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div
      id="FAQ"
      className="mx-40 my-20 flex flex-col items-center justify-center text-xl"
    >
      <h1 className="mb-10 text-4xl">FAQ</h1>
      <Accordion type="single" collapsible className="w-full text-left">
        <AccordionItem value="item-1">
          <AccordionTrigger>Pourquoi nous rejoindre ?</AccordionTrigger>
          <AccordionContent className="text-lg">
            En travaillant sur un SIEM, tu contribueras à renforcer la sécurité de vraies infrastructures, tout en apprenant à réagir aux incidents de sécurité complexes. Rejoins-nous pour développer une expertise en cybersécurité, une compétence ultra-prisée sur le marché du travail !
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Je ne fais pas de cyber sécurité, puis je quand même rejoindre le projet ?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Oui, absolument ! Même si tu ne te spécialises pas en cybersécurité, tu peux tout à fait rejoindre le projet. Nous avons besoin de personnes avec différentes compétences et perspectives, et tu pourras contribuer à des aspects comme la gestion des données, l’analyse, la programmation, et bien plus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Si on ne peut pas faire de BeerStorming, quel est l'intéret ? </AccordionTrigger>
          <AccordionContent className="text-lg">
            Don't panic, nous organiserons un BeerStorming dans les règles de l'art par visioconférence tu connais !
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
