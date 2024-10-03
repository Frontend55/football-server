import Sequelize from "@sequelize/core";

import { LeaguesModel } from "../leagues/leagues.model";
import { CalendarModel } from "../calendar/calendar.model";

export const database = new Sequelize('default_db', 'cloud_user', 'MDdakn%4dLng', {
  host: 'quaceflide.beget.app',
  port: 5432,
  username: 'cloud_user',
  database: 'default_db',
  password: 'MDdakn%4dLng',
  dialect: 'postgres',
  models: [LeaguesModel, CalendarModel]
});