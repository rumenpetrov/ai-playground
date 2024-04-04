import type { APIRoute, APIContext } from 'astro';
import xataClient from '@/data-entities/xata-client.ts'
import { status200, status404, status422, status500 } from '@/utilities/rest-status-codes.ts'

export const POST: APIRoute = async ({ params, request }: APIContext): Promise<Response> => {
  const formData = await request.formData();
  const name = formData.get('name');
  const nameValid = typeof name === 'string' && name.length > 3;

  if (!nameValid) {
    return new Response(
      JSON.stringify({
        name: nameValid ? 'valid' : 'invalid',
      }),
      status422,
    );
  }

  const record = await xataClient.db.conversations.create({ name });

  return new Response(JSON.stringify(record), status200);
};
