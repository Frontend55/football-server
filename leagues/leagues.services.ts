import { database } from "../datebase";
import { LeaguesModel } from "./leagues.model";

export class LeaguesService {
  constructor() { }

  async getAll() {
    return await database.models.LeaguesModel.findAll();
  }

  async create(league): Promise<void> {
    await database.models.LeaguesModel.create(league)
  }

  async update(leagues) {
    await database.models.LeaguesModel.update(leagues, { where: { nameLeagues: leagues.nameLeagues } })
  }

  async save(league) {
    if (!league?.nameLeagues) return;
    const isLeague = await database.models.LeaguesModel.findAll({
      where: {
        nameLeagues: league.nameLeagues,
      },
    });

    if (isLeague.length) {
      this.update(league);
      return;
    }

    this.create(league);
  }
}