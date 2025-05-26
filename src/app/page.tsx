"use client";

import Bin from "@/components/bin/page";
import Image from "next/image";
import data from "@/content.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ElasticLine from "@/fancy/components/physics/elastic-line";
import { useState } from "react";
import { cn } from "@/lib/utils";
import StackingCards, { StackingCardItem } from "@/fancy/components/blocks/stacking-cards";
import AppliedCarousel from "@/components/carousel/carousel";


export default function Home() {
  const colors = ["bg-slate-600", "bg-slate-700", "bg-slate-800", "bg-slate-900", "bg-slate-950"];

  const [container, setContainer] = useState<HTMLElement | null>(null)

  return (
    <main className="px-2 lg:px-4 gap-4 flex flex-col" ref={(node) => setContainer(node)}>
      <StackingCards
        className="pb-12 sm:pb-0"
        totalCards={data.secoes.length}
        scrollOptons={{ container: { current: container } }}
      >
        <section className="flex flex-col gap-4 lg:flex-row" >
          <div className="flex items-center bg-card border rounded-xl">
            <div className="py-6 px-4 lg:px-8">
              <h1 className="font-serif text-4xl lg:text-6xl font-light">{data.titulo}</h1>
              {/* <p className="text-sm mt-3 text-muted-foreground">Apr. 11, 1976</p> */}
              <div className="left-0 h-12 overflow-visible w-full z-10">
                <ElasticLine
                  releaseThreshold={50}
                  strokeWidth={1}
                  animateInTransition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: 0.15,
                  }} />
              </div>
              <div>
                {data.introducao.map((paragrafo, index) => (
                  <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground" key={index}>
                    {paragrafo}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <CardContainer className="border bg-card rounded-2xl max-w-[calc(100dvw-1rem)] max-h-[700px] lg:h-[calc(100dvh-8rem)] flex-1 aspect-[1] [&_*]:h-full [&_*]:w-full overflow-hidden">
            <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl">
              <CardItem>
                <div className="relative w-full">
                  <Image
                    alt="Gottfried Wilhelm Leibniz"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Gottfried_Wilhelm_Leibniz%2C_Bernhard_Christoph_Francke.jpg/960px-Gottfried_Wilhelm_Leibniz%2C_Bernhard_Christoph_Francke.jpg"
                    fill
                    objectFit="cover"
                  />
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </section>
        <section>
          {data.secoes.map((secao, index) => {
            return (
              <StackingCardItem key={index} index={index} className="h-[620px]">
                <div
                  className={cn(colors[index], "border h-[80%] sm:h-[70%] flex-col sm:flex-row gap-2 aspect-video px-4 lg:px-8 py-10 flex w-full rounded-3xl relative top-21 -mt-24 "
                  )}
                >
                  <div className="flex-1 flex flex-col justify-center">

                    <div className="lg:px-10">
                      <h3 className="mb-5 font-serif text-4xl">{secao.subtitulo}</h3>
                      <AppliedCarousel paragrafos={secao.paragrafos} />
                    </div>
                  </div>

                  <div className="rounded-xl relative aspect-square overflow-hidden">
                    <Image
                      src={"https://plus.unsplash.com/premium_vector-1739262161806-d954eb02427c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8"}
                      alt={"Lighthouse"}
                      className="object-cover"
                      fill
                    />
                  </div>
                </div>
              </StackingCardItem>
            )
          })}
        </section>
      </StackingCards>
      <div className="flex flex-wrap gap-4 justify-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/R4o421whXDE?si=ktBr3hKXyBb29xcT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ebUK3O7F_14?si=z8803HWenLQ-i6KI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <Bin />
    </main>
  );
}
