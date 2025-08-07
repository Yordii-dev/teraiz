// src/middleware.ts
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(({ url, redirect }, next) => {
  if (url.pathname === "/") {
    return redirect("/es", 301);
  }

  return next(); // Muy importante: continuar con las demás rutas
});
