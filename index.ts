import { Application } from "express";
import express, { Request, Response } from "express";
const app: Application = express();
app.use(express.json());
require("./config/db");
import router from "./router/router";
app.get("/", (Request, Response): Response => {
  return Response.status(200).json({
    message: "here is it",
  });
});
app.use("/", router);
app.listen(2000, () => {
  console.log("server is up....");
});
