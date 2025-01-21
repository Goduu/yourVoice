import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '../ui/navigation-menu'

export const PageMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu >
  )
}


const menuItems: { title: string; href: string; description: string }[] = [
  {
    title: "Input",
    href: "/text-input",
    description:
      "Page for inputting new text data",
  },
  {
    title: "Signature Cards",
    href: "/signature-cards",
    description:
      "Signature cards are a collection of information about a voice tone signature.",
  },
  {
    title: "Generated Texts",
    href: "/generated-texts",
    description:
      "Generated texts",
  },
]