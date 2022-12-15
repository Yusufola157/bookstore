import express, { Application } from "express";
const app: Application = express();
app.use(express.json());
require("./config/db");
import router from "./router/router";
app.get("/", (Request, Response) => {
  return Response.status(200).json({
    message: "here is the dat",
  });
});
app.use("/", router);
app.listen(2002, () => {
  console.log("here is the data");
});
