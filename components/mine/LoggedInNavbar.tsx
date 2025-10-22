import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  CreditCardIcon,
  Loader,
  LucideIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  SquarePowerIcon,
  ToggleRight,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import DashboardSearchbar from "./DashboardSearchbar";

const components: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Accordion",
    href: "/components/accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Button",
    href: "/components/button",
    description: "Displays a button or a component that looks like a button.",
    icon: SquarePowerIcon,
  },
  {
    title: "Card",
    href: "/components/card",
    description: "Displays a card with header, content, and footer.",
    icon: CreditCardIcon,
  },
  {
    title: "Checkbox",
    href: "/components/checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    icon: SquareCheckIcon,
  },
  {
    title: "Spinner",
    href: "/components/spinner",
    description: "Informs users about the status of ongoing processes.",
    icon: Loader,
  },
  {
    title: "Switch",
    href: "/components/switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    icon: ToggleRight,
  },
];

export default function LoggedInNavbar() {
  return (
    <NavigationMenu className="z-20">
      <NavigationMenuList className="flex gap-2 py-6 px-4">
        {/* Products */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Institucional</NavigationMenuTrigger>
          <NavigationMenuContent className="px-0 py-1">
            <div className="grid grid-cols-3 gap-3 p-4 w-[900px] divide-x">
              <div className="col-span-2">
                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                  Capabilities
                </h6>
                <ul className="mt-2.5 grid grid-cols-2 gap-3">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </div>

              <div className="pl-4">
                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                  Product & Features
                </h6>
                <ul className="mt-2.5 grid gap-3">
                  {components.slice(0, 3).map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Solutions */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Carreras</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
              Solutions
            </h6>
            <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Solutions */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
              Solutions
            </h6>
            <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Solutions */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Investigacion</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
              Solutions
            </h6>
            <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Solutions */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Asuntos Universitarios</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
              Solutions
            </h6>
            <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Solutions */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Extension</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
              Solutions
            </h6>
            <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

              <DashboardSearchbar />

      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: LucideIcon; title: string }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          {...props}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none",
            className
          )}
        >
          <div className="font-semibold tracking-tight leading-none flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
