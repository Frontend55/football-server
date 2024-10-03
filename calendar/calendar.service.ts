import { database } from '../datebase';

export class CalendarService {
  constructor() { };

  async get(idLeague) {
    const league = await database.models.CalendarModel.findAll({
      where: {
        idLeague
      }
    })
    return league[0];
  }

  async create(calendar) {
    await database.models.CalendarModel.create(calendar)
  }
  async update(date, id) {
    await database.models.CalendarModel.update(date, {
      where: {
        idLeague: id
      }
    })
  }

  async save({ idLeague, calendar }) {
    const table = await database.models.CalendarModel.findAll({
      where: {
        idLeague,
      }
    })

    if (table.length) {
      this.update({ idLeague, calendar }, idLeague);
      return;
    }
    this.create({ idLeague, calendar })
  }
}