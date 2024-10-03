import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from '@sequelize/core';
import { Attribute, Table } from '@sequelize/core/decorators-legacy';

interface CalendareTypes {
  place: string,
  time: string,
  teamFirstHref: string,
  teamFirstName: string,
  teamSecondHref: string,
  teamSecondName: string,
  scoreFirst: string,
  scoreSecond: string,
  date: string,
}
@Table({
  underscored: true,
  tableName: 'Calendar'
})
export class CalendarModel extends Model<InferAttributes<CalendarModel>, InferCreationAttributes<CalendarModel>> {
  @Attribute(DataTypes.STRING)
  declare idLeague: string;
  @Attribute(DataTypes.ARRAY(DataTypes.JSON))
  declare calendar: Array<CalendareTypes>;
}