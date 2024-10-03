import Sequelize from "@sequelize/core";

import { LeaguesModel } from "../leagues/leagues.model";
import { CalendarModel } from "../calendar/calendar.model";

export const database = new Sequelize('dev', 'dev', '123123', {
  host: 'localhost',
  port: 5432,
  username: 'dev',
  database: 'dev',
  password: '123123',
  dialect: 'postgres',
  models: [LeaguesModel, CalendarModel]
});