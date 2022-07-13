import { Schema } from 'mongoose';

const Favorite = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    meal_id: {
      type: Schema.Types.ObjectId,
      ref: 'meals',
      required: true,
    },
    time: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'mealshistory',
    timestamps: true,
  },
);
