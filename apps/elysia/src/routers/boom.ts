import { CreateElogs } from "@eastgold15/elogs";

export const boomRouter = <App extends CreateElogs>(app: App) =>
  app.get("/boom", {}, () => {
    throw new Error("Boom!");
  });
