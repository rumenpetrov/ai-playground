import type { APIRoute, APIContext } from 'astro';
import xataClient from '@/data-entities/xata-client.ts'
import { status200, status404, status422, status500 } from '@/utilities/rest-status-codes.ts';

export const POST: APIRoute = async ({ params, request }: APIContext): Promise<Response> => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body = await request.json();
    const { prompt } = body;

    if (typeof prompt !== 'string' || prompt.length < 1) {
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
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.5,
        stream: false,
      }),
    });

    if (response.ok) {
      return new Response(JSON.stringify(await response.json()), status200);
    }

    return response;
  }

  return new Response(null, status500);
};
