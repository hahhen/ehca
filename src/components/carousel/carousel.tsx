import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function AppliedCarousel(secao: { paragrafos: string[] }) {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

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
        <Carousel className="w-full max-w-xl" setApi={setApi}>
            <CarouselContent>
                {secao.paragrafos.map((paragrafo, index) => (
                    <CarouselItem key={index}>
                        <p>
                            {paragrafo}
                        </p>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex my-4 lg:hidden">
                {Array.from(Array(count).keys()).map((i) => (
                    <Button
                        key={i}
                        className={`mx-1 h-1 flex-grow rounded-full p-0  ${i === current - 1
                            ? "bg-primary"
                            : "bg-muted-foreground"
                            }`}
                        onClick={() => api?.scrollTo(i)}
                    />
                ))}
            </div>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
        </Carousel>
    )
}