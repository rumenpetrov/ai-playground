import React from 'react';
import { Button } from '@/components/ui/button';

export const Chat = () => {
  const [state, setState] = React.useState(0);
  return (
    <Button onClick={() => setState(prevState => prevState + 1)}>🛠️ Chat is under construction - {state}</Button>
  )
}

export default Chat;
