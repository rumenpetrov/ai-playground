import type { APIRoute, APIContext } from 'astro';
import xataClient from '@/data-entities/xata-client.ts'
import { status200, status404, status422, status500 } from '@/utilities/rest-status-codes.ts';

export const POST: APIRoute = async ({ params, request }: APIContext): Promise<Response> => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body = await request.json();
    const { id, prompt, history = [] } = body;
    const nextHistoryBeforeResponse = [...history, { role: 'user', content: prompt }];

    if (typeof prompt !== 'string' || prompt.length < 1 || !history || typeof id !== 'string') {
      return new Response(null, {
        ...status422,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }

    const response = await fetch('http://localai:8080/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': false,
        // 'Access-Control-Allow-Methods': 'POST, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are a helpful AI assistant. Your name is Crash. Answer the user's questions to the best of you ability.`,
          },
          ...nextHistoryBeforeResponse,
        ],
        temperature: 0.5,
        stream: false,
      }),
    });

    if (response.ok) {
      const assistantResponse = await response.json();
      const assistantMessage = assistantResponse?.choices?.[0]?.message;
      const nextHistory = [...nextHistoryBeforeResponse, assistantMessage];
      const record = await xataClient.db.conversations.update(id, { history: [...nextHistory.map(item => JSON.stringify(item))] });

      return new Response(JSON.stringify(assistantResponse), status200);
    }

    return response;
  }

  return new Response(null, status500);
};
