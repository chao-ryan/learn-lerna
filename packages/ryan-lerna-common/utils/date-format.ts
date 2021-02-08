import * as _moment from 'moment';

export const moment = _moment;
export type Moment = _moment.Moment;

export class DateFormat {
  public static formatDateWithSeparator(date: Date | Moment): string {
    const dateString = moment(date).format('YYYY-MM-DD');
    return dateString;
  }
}