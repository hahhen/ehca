"use client";

import Bin from "@/components/bin/page";
import Image from "next/image";
import data from "@/content.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import ElasticLine from "@/fancy/components/physics/elastic-line";
import { useEffect, useState } from "react";
import StackingCards, { StackingCardItem } from "@/fancy/components/blocks/stacking-cards";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { secureHeapUsed } from "crypto";
import { Button } from "@/components/ui/button";
import AppliedCarousel from "@/components/carousel/carousel";


export default function Home() {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

    console.log(count)
  }, [api])

  return (
    <main className="px-4">
      <Bin/>
      <section className="flex flex-col lg:flex-row">
        <div className="py-6 lg:px-8 flex-1">
          <h1 className="font-serif text-6xl font-light">Apple I</h1>
          <p className="text-sm mt-3 text-muted-foreground">Apr. 11, 1976</p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            In 1975, Steve Wozniak designed the Apple I as his personal computer to use the ARPANET and play games. Its enthusiastic reception among the members of Silicon Valley’s Homebrew Computer Club prompted Wozniak and Steve Jobs to form Apple Computers to manufacture the Apple I. Wozniak designed the Apple I around two principles; making the machine affordable by minimizing the number of chips; and the ability to output video to a TV screen most users already owned. With the incorporation of the microprocessor and dynamic RAM, the Apple I proved how small, simple, and cheap a usable computer could be.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The computer sold as a single board for $666.66 since Wozniak liked repeating digits. To complete the setup the board required a video display monitor, an ASCII encoded keyboard, and an AC connected power unit supplying 8 volts at 3 amps and 28 volts at 1 amp. Aside from the 6502 microprocessor running at 1.023 MHz, the Apple included four kilobytes of memory (enough to run BASIC), expandable to 8KB on board, or 64KB using expansion cards. A cassette interface was also available for the expansion slot, allowing for data storage and programming, such as easily loading the BASIC interpreter without having to program it in by hand.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The Apple I heralded a shift in personal computing. In the years prior, most computers were sold as kits, or assembled at a premium by the manufacturer. The purchase of a board that was completely tested and in working order led to “hassle-free” computing, helping spur personal computing towards a more mainstream consumer market. In 1977, the Commodore PET, TRS-80, and Apple II were released as assembled PCs, and hardware and software companies surged into a newly created market.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Apple Computers gave owners the option to trade in their Apple I for an Apple II, mainly to free Wozniak from his customer services duties as the only designer of the computer. With about only 200 made, and many removed from circulation due to the returns, Apple I’s have become a valuable collector’s item.
          </p>
        </div>
        {/* <div className="bg-card rounded-2xl sticky top-28 h-[calc(100dvh-8rem)] lg:max-w-[45%] flex-1">
          <RenderModel>
            <Model source={"https://cloud.appwrite.io/v1/storage/buckets/67e8525300339f64d6e5/files/67ea00e6003b9a69b09b/view?project=67e8520d003c0b64405c&mode=admin"}/>
          </RenderModel>
        </div> */}
      </section>
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
                  className={cn("bg-slate-" + (600 + 100 * index),
                    " border h-[80%] sm:h-[70%] flex-col sm:flex-row gap-2 aspect-video px-4 lg:px-8 py-10 flex w-full rounded-3xl relative top-21 -mt-24 "
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
    </main>
  );
}
