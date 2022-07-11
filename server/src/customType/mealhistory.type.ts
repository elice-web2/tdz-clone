export interface mealInfo {
  code: string;
  name: String;
  kcal: Number;
  carb: Number;
  protein: Number;
  fat: Number;
  sugars: Number;
  natruim: Number;
  cholesterol: Number;
  saturatedfatty: Number;
  transfat: Number;
  updated_date: Date;
}

export interface MealHistoryInfo {
  user_id: string;
  category: string;
  date: Date;
  meals: [mealInfo];
}

export interface MealHistoryData {
  _id: string;
  user_id: string;
  category: string;
  date: Date;
  meals: [mealInfo];
}

export interface ToUpdate {
  mealhistory_id: string;
  update: {
    [key: string]: string | number | Date | [mealInfo];
  };
}
