import { Request, Response } from "express";

import db from "../database/connection";
import convertHoursToMinutes from "../utils/convertHoursToMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

class ClassesController {
  /**
   * Get all classes
   *
   * @param req
   * @param res
   */
  async getClasses(req: Request, res: Response) {
    const filters = req.query;
    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({
        error: "Missing filters to search classes",
      });
    }

    const timeInMinutes = convertHoursToMinutes(time);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedule`.`week_day` = `??`", [Number(week_day)])
          .whereRaw("`class_schedule`.`from` <= `??`", [timeInMinutes])
          .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    return res.json(classes);
  }

  /**
   * Create classes
   *
   * @param req
   * @param res
   */
  async createClasses(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;
    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      /**
       * create array with schedule items and convert time
       */
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHoursToMinutes(scheduleItem.from),
          to: convertHoursToMinutes(scheduleItem.to),
        };
      });

      await trx("class_schedule").insert(classSchedule);
      await trx.commit();

      return res.status(201).send();
    } catch (error) {
      await trx.rollback();
      return res.status(400).json({
        error: "Unexpected error while creating new class",
      });
    }
  }
}

export default new ClassesController();
