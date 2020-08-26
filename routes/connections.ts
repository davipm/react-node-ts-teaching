import { Router } from "express";
import ConnectionsController from "../controllers/ConnectionsController";

const route = Router();

route.get("/connections", ConnectionsController.getConnections);
route.post("/connections", ConnectionsController.createConnection);

export default route;
