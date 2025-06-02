import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return (
    <footer>
      <div className="my-4 mx-2 lg:mx-4 flex justify-between items-center py-6 rounded-2xl px-4 lg:px-8 bg-card/80 z-50 backdrop-blur-md border">
        <div className="container">

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 lg:mb-0">
              <div className="flex items-center gap-5 flex-col lg:flex-row lg:justify-start">
                <h1 className="text-3xl font-serif">Computadores Revolucionários</h1>
                <p>Gostou? Avalie esse projeto <Link target="_blank" href={"https://forms.gle/F8B5uyFD5piv3H3q7"} className="underline">nesse link!</Link></p>
              </div>

            </div>
            <div className="col-start-5 col-span-2 lg:mb-0">
              <div className="flex items-center gap-2 flex-col lg:flex-row lg:justify-start">
                <h2 className="font-serif text-2xl">Referências</h2>
                <p className="text-muted-foreground">WAZLAWICK, Raul Sidnei. História da computação. 2. ed. Florianópolis: Visual Books, 2009.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-t pt-8 mt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <div className="flex flex-wrap gap-4">
              <Image src={"/logo-icmc-preto.png"} width={212} height={107} alt="ICMC" className="dark:invert" />
              <p >Museu de Computação Prof. Odelar Leite Linhares
                <br />Instituto de Ciências e Matemáticas e de Computação - ICMC
                <br />Universidade de São Paulo - USP
                <br />Avenida Trabalhador São-Carlense, nº 400, Centro.
                <br />CEP 13566-590 - São Carlos - SP</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
