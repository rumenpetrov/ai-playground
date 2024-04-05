import React, { useState } from 'react';
import ButtonSpinner from '@/components/button-spinner.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';


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

const chatWithAI = async (prompt: string) => {
  const response = await fetch('/api/ai/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (response.ok) {
    return await response.json();
  }

  return null;
};

type FetchStatus = 'idle' | 'loading';

export const Chat = () => {
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('idle');
  const processing = fetchStatus === 'loading';
  const [data, setData] = useState();
  const [prompt, setPrompt] = useState('');

  const handleSend = async () => {
    setFetchStatus('loading');

    const nextData = await chatWithAI(prompt);

    setData(nextData);
    setPrompt('');
    setFetchStatus('idle');
  };

  return (
    <div style={styleRoot}>
      <div className="h-full w-full" style={styleScrollAreaRoot}>
        <div style={styleScrollAreaContent}>
          {data?.choices && data?.choices.map(choice => {
            return (
              <Alert key={choice?.index} className="my-2">
                <AlertTitle className="font-bold">AI:</AlertTitle>

                <AlertDescription>
                  <pre>
                    {choice?.message?.content}
                  </pre>
                </AlertDescription>
              </Alert>
            );
          })}
        </div>
      </div>

      <div className="py-4">
        <Textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} disabled={processing} />

        <div className="flex justify-end py-4">
          <Button disabled={processing} onClick={handleSend}>
            {processing && (
              <ButtonSpinner />
            )}

            <span>Send</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
