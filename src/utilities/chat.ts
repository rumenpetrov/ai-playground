import type { Role } from '@/types.d.ts';

export const formatMessage = (role: Role, userInput: string) =>
  ({ role, content: userInput });
