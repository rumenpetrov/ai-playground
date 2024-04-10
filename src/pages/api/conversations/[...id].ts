import type { APIRoute, APIContext } from 'astro';
import xataClient from '@/data-entities/xata-client.ts'
import { status200, status404 } from '@/utilities/rest-status-codes.ts'

export const GET: APIRoute = async ({ params }: APIContext): Promise<Response> => {
  const { id } = params;

  if (typeof id !== 'string') {
    return new Response(null, status404);
  }

  const record = await xataClient.db.conversations.read(id);

  if (!record) {
    return new Response(null, status404);
  }

  const data = {
    ...record,
    history: record?.history?.map(item => JSON.parse(item)),
  };

  return new Response(JSON.stringify(data), status200);
};

