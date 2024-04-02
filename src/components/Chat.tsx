import React from 'react';

export const Chat = () => {
  const [state, setState] = React.useState(0);
  return (
    <button onClick={() => setState(prevState => prevState + 1)}>🛠️ Chat is under construction - {state}</button>
  )
}

export default Chat;
