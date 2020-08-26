import "dotenv/config";
import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";

import ClassesRouter from "./routes/classes";
import ConnectionsRouter from "./routes/connections";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.production();
  }

  private middleware() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private routes() {
    this.express.use([ClassesRouter, ConnectionsRouter]);
  }

  private production() {
    if (process.env.NODE_ENV === "development") {
      this.express.use(morgan("dev"));
    }

    if (process.env.NODE_ENV === "production") {
      this.express.use(express.static("client/build"));
      this.express.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
    }
  }
}

export default new App().express;
