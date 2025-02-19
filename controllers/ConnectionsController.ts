import { Request, Response } from "express";

import db from "../database/connection";

class ConnectionsController {
  /**
   *
   * @param req
   * @param res
   */
  async getConnections(req: Request, res: Response) {
    const totalConnections = await db("connections").count("* as total");
    const { total } = totalConnections[0];

    return res.json({ total });
  }

  /**
   *
   * @param req
   * @param res
   */
  async createConnection(req: Request, res: Response) {
    const { user_id } = req.body;
    await db("connections").insert({
      user_id,
    });

    return res.status(201).send();
  }
}

export default new ConnectionsController();
