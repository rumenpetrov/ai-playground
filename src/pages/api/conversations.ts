import type { APIRoute } from "astro";
import { XataClient } from '@src/xata';

const xata = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: import.meta.env.XATA_BRANCH
});

export const GET: APIRoute = async ({ params, request }) => {
  const { records } = await xata.db.conversations.getPaginated({
    pagination: {
      size: 50
    }
  });

  return new Response(JSON.stringify(records));
};

export const POST: APIRoute = ({ request }) => {
  return new Response(JSON.stringify({
    message: "This was a POST!"
  }));
}

export const DELETE: APIRoute = ({ request }) => {
  return new Response(JSON.stringify({
    message: "This was a DELETE!"
  }));
};

export const ALL: APIRoute = ({ request }) => {
  return new Response(JSON.stringify({
    message: `This was a ${request.method}!`
  }));
}