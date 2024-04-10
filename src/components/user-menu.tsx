import React from 'react';
import { Icon } from '@iconify-icon/react';
import Login from '@/components/login.tsx';
import Logout from '@/components/logout.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';

interface Props {
  hasUser: boolean;
  name?: string | null;
  url?: string | null;
};

export const UserMenu = (props: Props) => {
  const { hasUser, name, url } = props;

  const avatarFallbackChildren = typeof name?.[0] === 'string'
    ? name?.[0]
    : <Icon icon="mdi:account" width="24px" height="24px" />;

  return (
    <div className="flex flex-row items-center p-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            {typeof url === 'string' ? (
              <AvatarImage src={url} />
            ) : (
              <AvatarFallback>{avatarFallbackChildren}</AvatarFallback>
            )}
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-48">
          <DropdownMenuLabel>{typeof name === 'string' ? name : 'My Account'}</DropdownMenuLabel>

          <DropdownMenuSeparator />

          {!hasUser ? (
            <DropdownMenuItem>
              <Login provider="github" className="block w-full text-left">
                <Icon icon="mdi:github" width="16px" height="16px" className="mr-2 align-text-bottom" />
              </Login>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem>
              <Logout className="block w-full text-left">
                <Icon icon="mdi:exit-to-app" width="16px" height="16px" className="mr-2 align-text-bottom" />

                <span>Logout</span>
              </Logout>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserMenu;
