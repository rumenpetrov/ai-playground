import React from 'react';
import { Icon } from '@iconify-icon/react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const linkClassName = 'flex items-center select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground';

interface Props {
  hasUser: boolean;
};

export const MainMenu = (props: Props) => {
  const { hasUser } = props;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={linkClassName}>
            <Icon icon="mdi:home" width="18px" height="18px" className="mr-2" />
            <span>Home</span>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {hasUser && (
          <NavigationMenuItem>
            <NavigationMenuLink href="/conversations" className={linkClassName}>
              Conversations
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MainMenu;
