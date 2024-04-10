import type { APIRoute } from 'astro';
import xataClient from '@/data-entities/xata-client.ts'
import { status404, status500 } from '@/utilities/rest-status-codes.ts'

export const DELETE: APIRoute = async ({ params, redirect }): Promise<Response> => {
  const { id } = params;

  if (!id) {
    return new Response(null, status404);
  }

  try {
    await xataClient.db.conversations.delete(id);
  } catch (error) {
    return new Response(null, status500);
  }

  return redirect('/conversations');
};
