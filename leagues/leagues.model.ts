import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from '@sequelize/core';

import { Attribute, Table } from '@sequelize/core/decorators-legacy';

interface LeagueTabelTypes {
  teamImgSrc: string,
  teamName: string,
  teamUrl: string,
  teamGeams: string,
  teamWinners: number,
  teamDraw: number,
  teamLooses: number,
  teamGoals: number,
  teamDifference: string,
  teamPoints: number,
}

@Table({
  underscored: true,
  tableName: 'Leagues'
})
export class LeaguesModel extends Model<InferAttributes<LeaguesModel>, InferCreationAttributes<LeaguesModel>> {
  @Attribute(DataTypes.STRING)
  declare nameLeagues: string;
  @Attribute(DataTypes.STRING)
  declare url: string;
  @Attribute(DataTypes.ARRAY(DataTypes.JSON))
  declare teams: Array<LeagueTabelTypes>
  @Attribute(DataTypes.INTEGER)
  sortId: number;
}