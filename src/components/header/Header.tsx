import Image from "next/image"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";

export default function Header() {

    return (
        <header className="my-4 mx-2 lg:mx-4 flex justify-between items-center py-6 rounded-2xl px-4 lg:px-8 bg-card/80 z-50 backdrop-blur-md sticky top-3">
            <div className="flex items-center gap-1">
                <Image src="/logo.svg" alt="Logo" width={45} height={45} />
                <h1 className="text-xl leading-none antialiased font-serif font-light tracking-tight ml-2">Computadores <br /> Revolucionários</h1>
            </div>
            <NavigationMenu className="hidden lg:flex  ">
                <NavigationMenuList className="flex text-sm">
                    <NavigationMenuItem>
                        <Button variant="ghost" asChild><NavigationMenuLink href="#" >Home</NavigationMenuLink></Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button variant="ghost" asChild ><NavigationMenuLink href="#">Modelos</NavigationMenuLink></Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button variant="ghost" asChild ><NavigationMenuLink href="#" >Linha do Tempo</NavigationMenuLink></Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button variant="ghost" asChild ><NavigationMenuLink href="#">Sobre</NavigationMenuLink></Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Sidebar className="lg:hidden"/>
        </header>
    )

}