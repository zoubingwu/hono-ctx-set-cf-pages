import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";

interface HonoContext {
  Variables: {
    user: string;
  };
}

const app = new Hono<HonoContext>().basePath("/api");

const routes = app.get("/hello", (c) => {
  return c.json({
    //@ts-ignore
    message: `Hello, ${c.env.eventContext.data.user}!`,
  });
});

export const onRequest = handle(routes);
