import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Hamburger, Menu } from "lucide-react";

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
                            <Button variant="ghost" asChild><NavigationMenuLink href="#" className="w-full items-start" >Home</NavigationMenuLink></Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full" >
                            <Button variant="ghost" asChild ><NavigationMenuLink href="#" className="w-full items-start">Modelos</NavigationMenuLink></Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full" >
                            <Button variant="ghost" asChild ><NavigationMenuLink href="#" className="w-full items-start">Linha do Tempo</NavigationMenuLink></Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full" >
                            <Button variant="ghost" asChild ><NavigationMenuLink href="#" className="w-full items-start">Sobre</NavigationMenuLink></Button>
                        </NavigationMenuItem>
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