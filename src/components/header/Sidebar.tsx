import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Menu } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ className }: { className?: string }) {

    return (
        <Sheet>
            <SheetTrigger className={className} asChild>
                <Button size={"icon"} variant="outline"><Menu /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="font-serif text-3xl font-normal">Menu</SheetTitle>
                </SheetHeader>
                <NavigationMenu className="items-start w-full max-w-full [&>*]:w-full">
                    <NavigationMenuList className="flex w-full flex-col text-sm">
                        <NavigationMenuItem className="w-full" >
                            <Button variant="ghost" asChild><NavigationMenuLink className="w-full items-start" asChild><Link href={"/"}>Home</Link></NavigationMenuLink></Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full" >
                            <Button variant="ghost" asChild><NavigationMenuLink className="w-full items-start" asChild><Link href={"material"}>Material Complementar</Link></NavigationMenuLink></Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full" >
                            <Button variant="ghost" asChild ><NavigationMenuLink href="https://mc.icmc.usp.br/" className="w-full items-start">Visite o Museu</NavigationMenuLink></Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full" >
                            <Button variant="ghost" asChild><NavigationMenuLink href="https://forms.gle/F8B5uyFD5piv3H3q7" target="_blank" className="w-full items-start" >Avalie esse Projeto!</NavigationMenuLink></Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full" >
                            <Button variant="ghost" asChild><NavigationMenuLink href="https://github.com/hahhen/ehca" className="flex flex-row" target="_blank" >GitHub <Github color="var(--foreground)"/></NavigationMenuLink></Button>
                        </NavigationMenuItem>
                        {/* <NavigationMenuItem className="w-full" >
                            <Button variant="ghost" asChild ><NavigationMenuLink href="#" className="w-full items-start">Linha do Tempo</NavigationMenuLink></Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full" >
                            <Button variant="ghost" asChild ><NavigationMenuLink href="#" className="w-full items-start">Sobre</NavigationMenuLink></Button>
                        </NavigationMenuItem> */}
                    </NavigationMenuList>
                </NavigationMenu>
                <SheetFooter className="flex mt-4">
                    <p className="text-xs text-muted-foreground">
                        Computadores Revolucionários, 2025
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Instituto de Ciências e Matemáticas e de Computação - ICMC
                    </p>

                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}