import { rest } from "msw";

import mock from "./mock.data.json";

export const handlers = [
  rest.get("/posts", (req, res, ctx) => {
    return res(ctx.json({ posts: mock }));
  }),
  rest.get("/comments", null),
];
