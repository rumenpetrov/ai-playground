import type { APIRoute, APIContext } from 'astro';
import xataClient from '@/data-entities/xata-client.ts'
import { status200, status404, status422, status500 } from '@/utilities/rest-status-codes.ts'

export const PATCH: APIRoute = async ({ params, request }: APIContext): Promise<Response> => {
  const { id } = params;
  const formData = await request.formData();
  const name = formData.get('name');
  const idValid = typeof id === 'string';
  const nameValid = typeof name === 'string' && name.length > 3;

  if (!idValid || !nameValid) {
    return new Response(
      JSON.stringify({
        id: idValid ? 'valid' : 'invalid',
        name: nameValid ? 'valid' : 'invalid',
      }),
      status422,
    );
  }

  const record = await xataClient.db.conversations.update(id, { name });

  return new Response(JSON.stringify(record), status200);
};
