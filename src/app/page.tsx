import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4">
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
    </main>
  );
}
