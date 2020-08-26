import { Router } from "express";
import ClassesController from "../controllers/ClassesController";

const route = Router();

route.get("/classes", ClassesController.getClasses);
route.post("/classes", ClassesController.createClasses);

export default route;
