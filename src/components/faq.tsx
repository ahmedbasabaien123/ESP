import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

---

<section
  class="mt-40 flex h-[500px] gap-4 bg-[url('/CTAbg.jpg')] bg-cover text-center text-white"
>
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-30"
  >
    <h1
      class="mx-20 pb-10 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,4)] md:text-6xl"
    >
      {largeText}
    </h1>
    <h2
      class="mx-10 mb-20 pb-10 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,4)] md:text-2xl"
    >
    </h2>
    <Button link={link} text={text} name={name} />
  </div>
</section>
export default function Faq() {
  return (
    <div
      id="FAQ"
      className="mx-40 my-20 flex flex-col items-center justify-center text-xl"
    >
      <h1 className="mb-10 text-4xl">FAQ</h1>
      <Accordion type="single" collapsible className="w-full text-left">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can you do this particular job?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes. We do that particular job multiple times a week, sometimes
            multiple times a day.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            I have been burned in the past, will that happen here?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Absoluetely not, we have a proven track record of successful jobs
            and satisfied clients. Don't believe us? Check out our customer
            reviews.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>When will you be available next?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Our availablility is constantly changing, if you are interested in
            working together please conact us through our comapany email or
            phone, both can be found in our contact page.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
}
