import { Schema } from 'mongoose';

const CalendarSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isSuccess: {
    type: Date,
    required: true,
  },
  currentKcal: {
    type: Number,
    required: true,
  },
  goalKcal: {
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  todayWeight: {
    type: Number,
    required: true,
  },
});

export { CalendarSchema };
