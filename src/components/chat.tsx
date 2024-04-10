import { useState } from 'react';
import ButtonSpinner from '@/components/button-spinner.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import { formatMessage } from '@/utilities/chat.ts';
import type { Message } from '@/types.d.ts';

type Style = { [k: string]: string };

const styleRoot = {
  display: 'grid',
  gridTemplateRows: '1fr auto',
} as Style;
const styleScrollAreaRoot = {
  maxHeight: '60vh',
  overflow: 'hidden scroll',
  display: 'flex',
  flexDirection: 'column-reverse',
  overflowAnchor: 'auto !important',
} as Style;

const chatWithAI = async (id: string, prompt: string, messages: Message[]) => {
  const response = await fetch('/api/ai/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      prompt,
      history: messages,
    }),
  });

  if (response.ok) {
    return await response.json();
  }

  return null;
};

type FetchStatus = 'idle' | 'loading';

interface Props {
  id: string;
  initialHistory?: Message[];
};

export const Chat = (props: Props) => {
  const { id, initialHistory = [] } = props;
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('idle');
  const processing = fetchStatus === 'loading';
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([...initialHistory]);

  const handleSend = async () => {
    setFetchStatus('loading');

    const nextData = await chatWithAI(id, prompt, messages);

    if (nextData?.choices?.[0]?.message?.content) {
      setMessages(prevMessages => [...prevMessages, formatMessage('user', prompt), formatMessage('assistant', nextData?.choices?.[0]?.message?.content)]);
    } else {
      setMessages(prevMessages => [...prevMessages, formatMessage('user', prompt)]);
    }

    setPrompt('');
    setFetchStatus('idle');
  };

  return (
    <div style={styleRoot}>
      <div className="h-full w-full" style={styleScrollAreaRoot}>
        <div>
          <Alert key="greeting" className="my-2" variant="destructive">
            <AlertTitle className="font-bold">AI:</AlertTitle>

            <AlertDescription>
              <p className="text-sm">Hey there!</p>

              <p className="text-sm">I'm an AI chat bot and I'm here to help you with anything you need. However, I need a minute or two to process your request and come up with a response. So please be patient and wait for me to get back to you. I'll do my best to get back to you as soon as possible.</p>
            </AlertDescription>
          </Alert>

          {Array.isArray(messages) && messages.length > 0 && messages.map((message, index) => {
            return (
              <Alert key={index} className="my-2" variant={message?.role === 'assistant' ? 'destructive' : undefined}>
                {message.role === 'assistant' && (
                  <AlertTitle className="font-bold" >AI:</AlertTitle>
                )}

                {message.role === 'user' && (
                  <AlertTitle className="font-bold" >You:</AlertTitle>
                )}

                <AlertDescription>
                  <pre>
                    {message?.content}
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
