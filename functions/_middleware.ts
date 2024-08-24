import { handleMiddleware } from "hono/cloudflare-pages";

export const onRequest = [
  handleMiddleware(async (c, next) => {
    console.log("middleware setting user");
    c.set('user', 'joe')
    await next();
  })
]