import type { APIRoute } from 'astro';
import xataClient from '@/data-entities/xata-client.ts'
import { status200, status404 } from '@/utilities/rest-status-codes.ts'

export const GET: APIRoute = async (): Promise<Response> => {
  const records = await xataClient.db.conversations.getAll();

  if (!records) {
    return new Response(null, status404);
  }

  return new Response(JSON.stringify(records), status200);
};
