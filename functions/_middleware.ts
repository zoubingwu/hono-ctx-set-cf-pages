import { handleMiddleware } from "hono/cloudflare-pages";

export const onRequest = [
  // handleMiddleware(async (c, next) => {
  //   console.log("middleware setting user");
  //   c.set('user', 'joe');
  //   console.log(c);
  //   c.env.eventContext.data.user = 'joe2'
  //   return await next();
  // })
  async (context) => {
    context.data.user = "joe";
    return await context.next();
  },
];
