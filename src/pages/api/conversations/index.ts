import type { APIRoute, APIContext } from 'astro';
import { XataClient } from '@src/xata';

const xata = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: import.meta.env.XATA_BRANCH
});

export const GET: APIRoute = async ({ params, request }: APIContext): Promise<Response> => {
  const { records } = await xata.db.conversations.getPaginated({
    pagination: {
      size: 50
    }
  });

  return new Response(JSON.stringify(records));
};