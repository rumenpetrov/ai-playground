import React from 'react';
import { Button } from '@/components/ui/button.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import { ScrollArea } from "@/components/ui/scroll-area"


const styleRoot = {
  display: 'grid',
  gridTemplateRows: '1fr auto',
};
const styleScrollAreaRoot = {
  maxHeight: '60vh',
  overflow: 'hidden scroll',
  display: 'flex',
  flexDirection: 'column-reverse',
  overflowAnchor: 'auto !important',
};
const styleScrollAreaContent = {};

export const Chat = () => {
  const [state, setState] = React.useState(0);
  return (
    <div style={styleRoot}>
      <div className="h-full w-full" style={styleScrollAreaRoot}>
        <div style={styleScrollAreaContent}>
          {Array.from(Array(state).keys()).map(item => {
            return (
              <Alert key={item} className="my-2">
                <AlertTitle>Heads up! [{item}]</AlertTitle>
                <AlertDescription>
                  You can add components and dependencies to your app using the cli.
                </AlertDescription>
              </Alert>
            );
          })}
        </div>
      </div>

      <div className="py-4">
        <Textarea />

        <div className="flex justify-end py-4">
          <Button onClick={() => setState(prevState => prevState + 1)}>🛠️ Chat is under construction - {state}</Button>
        </div>
      </div>
    </div>
  )
}

export default Chat;
