/**
 * Cloudflare Pages Function: forwards /api/* to the schedU server on Railway,
 * as vercel.json's rewrite does on Vercel. Only the contact form uses it
 * (POST /api/contact). public/_routes.json limits it to /api/*, so pages
 * never run it.
 *
 * Not part of the Next build; Cloudflare compiles this folder on its own.
 */
const SERVER = 'https://schedu-production.up.railway.app'

export async function onRequest(context: { request: Request }): Promise<Response> {
  const incoming = new URL(context.request.url)
  const target = new URL(incoming.pathname + incoming.search, SERVER)
  return fetch(new Request(target.toString(), context.request))
}
