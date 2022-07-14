import { Date } from 'mongoose';

export interface DayInfo {
  user_id: string;
  date: string;
}

// export interface FromToInfo {
//   user_id: string;
//   fromY: string;
//   fromM: string;
//   fromD: string;
//   toY: string;
//   toM: string;
//   toD: string;
// }

export interface FromToInfo {
  user_id: string;
  from: string;
  to: string;
}

// export interface FromToInfo {
//     user_id: string;
//     from: Date;
//     to: Date;
//   }
