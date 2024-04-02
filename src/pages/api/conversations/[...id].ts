import type { APIRoute, APIContext } from 'astro';
import { XataClient } from '@src/xata';

const xata = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: import.meta.env.XATA_BRANCH
});

export const GET: APIRoute = async ({ params, request }: APIContext): Promise<Response> => {
  const { id } = params;

  const record = await xata.db.conversations.read(id);

  if (!record) {
    return new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  return new Response(JSON.stringify(record));
};
